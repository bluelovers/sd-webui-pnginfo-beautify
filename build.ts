#!/usr/bin/env node

import { build } from 'esbuild'
import { join } from 'path'

import { sassPlugin } from 'esbuild-sass-plugin'
import { __ROOT, __ROOT_OUTPUT } from './test/__root';
import _ from './test/scripts/output/copy';

(async () => {
	await _;

	await build({
		entryPoints: [
			join(__ROOT, 'src/index.mts')
		],
		outfile: join(__ROOT_OUTPUT, 'javascript', 'sd-webui-pnginfo-beautify.js'),
		bundle: true,
		plugins: [
			sassPlugin({
				type: "css-text",
			}),
		],
		platform: 'browser',
		treeShaking: true,
		sourcemap: true,
		// @ts-ignore
		//analyze: true,
		legalComments: 'none',
		allowOverwrite: true,
		minifySyntax: true,
		format: 'iife',
		minify: Boolean(process.env['ESBUILD_MINIFY'])
	})
})();
