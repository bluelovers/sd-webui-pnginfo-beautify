import { parseFromRawInfo, parseFromRawInfoGenerator } from '@bluelovers/auto1111-pnginfo';
import { logger } from './logger';
import { syntaxHighlighter } from './highlighter';

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
	syntaxLang?: string,
	syntaxTheme?: 'github-dark' | 'dark',

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
	'Template',
	'Template Generated',
].forEach(key => RowConfigMap.set(key, {
	full: true,
	syntaxHighlighter: true,
	decode: true,
}));

[
	'Template Generated Grid',
	//'Dynamic Prompts',
].forEach(key => RowConfigMap.set(key, {
	full: true,
	decode: true,
	async syntaxHighlighter(ls: string[])
	{
		ls = await Promise.all(ls.map(value =>
		{
			return syntaxHighlighter(value);
		}))

		return ls.join('<hr/>');
	},
	syntaxLang: 'json5',
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
	const list: string[] = [];

	for (const [key, value] of parseFromRawInfoGenerator(JSON.parse(input)))
	{
		list.push(`<div>${_search(key, '&#x1F50D;')} <span>${key}</span>: <span>${value}</span> ${_search(value)}</div>`)
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
