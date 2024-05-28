import { parseFromRawInfo } from '@bluelovers/auto1111-pnginfo';

type IDecodeFn = (value: string, key: string) => string | PromiseLike<string>

export interface IRowConfigOptions
{
	full?: boolean,

	syntaxHighlighter?: boolean,
	syntaxLang?: string,

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
	syntaxHighlighter: true,
	syntaxLang: 'json5',
	formatFn(value, key)
	{
		if (key === 'Template Generated Grid')
		{
			return JSON.stringify(value, null, 2)
		}

		return value
	}
}));

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
	decode(value)
	{
		return `<span>${value}</span> ${_search(value)}`
	},
	disableEscapeHTML: true,
}));

function _search(query: unknown, text = '&#x1F50E;')
{
	const href = `https://civitai.com/search/models?sortBy=models_v9&query=${query}`;
	return `<a href="${href}" target="_blank">${text}</a>`
}

function decodeHashs(input: string)
{
	let map = parseFromRawInfo(JSON.parse(input));

	const list: string[] = [];

	Object.entries(map)
		.forEach(([key, value]) => {
			list.push(`<div>${_search(key, '&#x1F50D;')} <span>${key}</span>: <span>${value}</span> ${_search(value)}</div>`)
		})
	;

	return list.join('')
}
