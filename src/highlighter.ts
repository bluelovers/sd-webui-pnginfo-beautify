/**
 * Created by user on 2024/5/17.
 */
import { getHighlighterCore, HighlighterCore } from 'shiki/core';
import { prompt } from './grammar';
import getWasm from 'shiki/wasm';
import { ThemeInput } from 'shiki';
import { IRowConfigOptions } from './row-config';

let cacheHighlighter: HighlighterCore;

export async function initHighlighter(): Promise<HighlighterCore>
{
	let highlighter = cacheHighlighter;

	if (highlighter) return highlighter;

	/**
	 * @see https://shiki.matsu.io/guide/install#fine-grained-bundle
	 */
	highlighter = await getHighlighterCore({
		langs: [
			prompt,
			() => import('shiki/langs/json5.mjs'),
		],
		themes: [themeConfig(true), themeConfig(false)],
		loadWasm: getWasm,
	});

	cacheHighlighter = highlighter;

	return highlighter;
}

function themeConfig(isDarkMode: boolean)
{
	const type = isDarkMode ? 'dark' : 'light';

	const colorYellow = '#FFEF5C';
	const colorOrange = '#FFCB47';
	const colorVolcano = '#FF9480';
	const colorGreen = '#C4F042';
	const colorBlue = '#8ae8ff';
	const colorPurple = '#EDC7EE';
	return {
		colors: {
			'editor.foreground': colorGreen,
		},
		name: type,
		tokenColors: [
			{
				scope: 'comma',
				settings: {
					foreground: '#DDDDDD',
				},
			},
			{
				scope: ['and', 'break'],
				settings: {
					foreground: colorBlue,
				},
			},
			{
				scope: 'bracket',
				settings: {
					foreground: colorPurple,
				},
			},
			{
				scope: 'model-type',
				settings: {
					fontStyle: 'italic',
					foreground: colorVolcano,
				},
			},
			{
				scope: 'model-name',
				settings: {
					foreground: colorOrange,
				},
			},
			{
				scope: 'model-bracket',
				settings: {
					foreground: colorPurple,
				},
			},
			{
				scope: 'number',
				settings: {
					foreground: colorPurple,
				},
			},
			{
				scope: 'func',
				settings: {
					foreground: colorPurple,
				},
			},
			{
				scope: 'wildcards',
				settings: {
					foreground: colorYellow,
				},
			},
		],
		type,
	} satisfies ThemeInput;
}

export async function syntaxHighlighter(code: string, opts: IRowConfigOptions = {}, key?: string)
{
	const highlighter = await initHighlighter();
	return highlighter.codeToHtml(code, {
		lang: opts.syntaxLang ?? 'prompt',
		theme: 'dark',
		mergeWhitespaces: true,
		transformers: [
			{
				code(node)
				{
					node.properties['id'] = 'lobe_highlighter';
				},
				pre(node)
				{
					node.properties['id'] = 'shiki_infotext_highlighter';
				},
			},
		],
	})
}
