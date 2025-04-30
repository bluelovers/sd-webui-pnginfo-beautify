import { parseFromRawInfoGenerator } from '@bluelovers/auto1111-pnginfo';
import { logger } from './logger';
import { other_syntax_lang, syntaxHighlighter } from './highlighter';

type IDecodeFn = (value: string, key: string) => string | PromiseLike<string>

interface ISyntaxHighlighterFn
{
	<T extends any>(code: T, opts?: IRowConfigOptions, key?: string): string | PromiseLike<string>

//	(code: string, opts?: IRowConfigOptions, key?: string): string | PromiseLike<string>

	(code: any, opts?: IRowConfigOptions, key?: string): string | PromiseLike<string>
}

export interface IRowConfigOptions
{
	full?: boolean,

	syntaxHighlighter?: boolean | ISyntaxHighlighterFn,
	syntaxLang?: 'prompt' | 'json5' | 'javascript',
	syntaxTheme?: 'dark' | 'dracula' | 'material-theme',

	formatFn?: IDecodeFn,

	decode?: boolean | IDecodeFn,
	disableEscapeHTML?: boolean,
}

export const RowConfigMap = new Map<string, IRowConfigOptions>();
export const RowConfigMapRegExp = new Map<RegExp, IRowConfigOptions>();

[
	'Positive Prompt',
	'Negative Prompt',
].forEach(key => RowConfigMap.set(key, {
	full: true,
	syntaxHighlighter: true,
}));

[
	'sv_prompt',
	'sv_negative',
	'Template',
	'Template Generated',
	'Wildcard Prompt',
].forEach(key => RowConfigMap.set(key, {
	full: true,
	syntaxHighlighter: true,
	decode: true,
}));

[
	'Template Generated Grid',
	'PPP original prompts',
	'PPP original negative prompts',
	//'Dynamic Prompts',
].forEach(key => RowConfigMap.set(key, {
	full: true,
	decode: true,
	async syntaxHighlighter(ls: string[])
	{
		ls = await Promise.all([ls].flat().map(value =>
		{
			return syntaxHighlighter(value);
		}))

		return ls.join('<hr class="shiki_infotext_hr"/>');
	},
	formatFn(value, key)
	{
		if (key === 'Template Generated Grid')
		{
			//return JSON.stringify(value, null, 2)
		}

		return value
	}
}));

/*
[
	///^ControlNet \d+$/
].forEach(key => RowConfigMapRegExp.set(key, {
	full: true,
	decode: true,
	syntaxHighlighter: true,
	syntaxLang: 'json5',
	formatFn(value, key)
	{
		let map = parseFromRawInfo(value);

		return JSON.stringify(map)
	}
}));
 */

[
	'TI hashes',
	'Lora hashes',
].forEach(key => RowConfigMap.set(key, {
	decode: decodeHashs,
	disableEscapeHTML: true,
}));

[
	'Model hash',
	'Model',
	'VAE hash',
	'VAE',
	'ADetailer model',
].forEach(key => RowConfigMap.set(key, {
	decode: simpleSearch,
	disableEscapeHTML: true,
}));

[
	/^ADetailer model \d+\w*$/,
].forEach(key => RowConfigMapRegExp.set(key, {
	decode: simpleSearch,
	disableEscapeHTML: true,
}));

[
	'Hashes',
	'Civitai resources',
	'Civitai metadata',
].forEach(key => RowConfigMap.set(key, {
	decode: true,
	disableEscapeHTML: true,
	formatFn(value, key)
	{
		return _decodeHashsCore(Object.entries(value))
	}
}));

[
	'Dynamic Prompts',
].forEach(key => RowConfigMap.set(key, {
	decode: true,
	syntaxHighlighter: true,
	syntaxLang: other_syntax_lang,
	formatFn(value, key)
	{
		return JSON.stringify(value)
	}
}));

function simpleSearch(value: string)
{
	return `<span>${value}</span> ${_search(value)}`
}

function _search(query: unknown, text = '&#x1F50E;')
{
	const href = `https://civitai.com/search/models?sortBy=models_v9&query=${query}`;
	return `<a href="${href}" target="_blank">${text}</a>`
}

function decodeHashs(input: string)
{
	return _decodeHashsCore(parseFromRawInfoGenerator(JSON.parse(input)))
}

function _decodeHashsCore(input: [string, string][] | Generator<any>)
{
	const list: string[] = [];

	for (const [key, value] of input)
	{
		list.push(`<div>${_search(key, '&#x1F50D;')} <span style="color:#C3E88D">${key}</span>: <span style="color:#FF9CAC">${value}</span> ${_search(value)}</div>`)
	}

	return list.join('')
}

function mergeMapRegExp()
{
	let ls: string[] = [];
	for (let re of RowConfigMapRegExp.keys())
	{
		ls.push(re.source);
	}
	const re = ls.length ? new RegExp(ls.join('|')) : null;
	logger.debug('RowConfigMapRegExpCached', re);
	return re
}

export const RowConfigMapRegExpCached = mergeMapRegExp();
