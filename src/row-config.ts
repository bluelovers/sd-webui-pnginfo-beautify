import { parseFromRawInfo } from '@bluelovers/auto1111-pnginfo';

type IDecodeFn = (key: string, value: string) => string

export interface IRowConfigOptions
{
	full?: boolean,

	syntaxHighlighter?: boolean,
	syntaxLang?: string,

	decode?: boolean | IDecodeFn,
	disableEscapeHTML?: boolean,
}

export const RowConfigMap = new Map<string, IRowConfigOptions>();

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
].forEach(key => RowConfigMap.set(key, {
	full: true,
	syntaxHighlighter: true,
	decode: true,
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
	decode(key, value)
	{
		return `<span>${value}</span> ${_search(value)}`
	},
	disableEscapeHTML: true,
}));

function _search(query: unknown, text = '&#x1F50E;')
{
	let href = `https://civitai.com/search/models?sortBy=models_v9&query=${query}`;
	return `<a href="${href.toString()}" target="_blank">${text}</a>`
}

function decodeHashs(key, input: string)
{
	let map = parseFromRawInfo(JSON.parse(input));

	let list: string[] = [];

	Object.entries(map)
		.forEach(([key, value]) => {
			list.push(`<div>${_search(key, '&#x1F50D;')} <span>${key}</span>: <span>${value}</span> ${_search(value)}</div>`)
		})
	;

	return list.join('')
}
