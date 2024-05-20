/**
 * Created by user on 2024/5/17.
 */
/// <reference types="../global.webui.d.ts" preserve="true"/>

import { renderInfo } from './render';
import { initStyle } from './style';
import { EXTENSION_NAME, tabs } from './const';
import { IOptionsInfoparser } from '@bluelovers/auto1111-pnginfo';

// @ts-ignore
typeof onUiLoaded === 'undefined' && (onUiLoaded = (fn) => {
	return document.addEventListener('DOMContentLoaded', fn)
});

onUiLoaded(async () =>
{
	initStyle();
	const app = gradioApp();

	let observer = new MutationObserver(async (mutationsList, observer) =>
	{
		for (let mutation of mutationsList)
		{
			const elem = mutation.target as HTMLDivElement;
			console.info(EXTENSION_NAME, 'observer:mutation', {
				type: mutation.type,
				id: elem?.id,
				elem,
				mutation,
				_beautifyOpts: (elem as any)._beautifyOpts,
			})
			await renderInfo(mutation.target as HTMLDivElement, true, (elem as any)._beautifyOpts)
				.catch(e => console.error(EXTENSION_NAME, e))
		}
	});

	let temp = [];

	for (let parentId of tabs)
	{
		let isElem: boolean;
		let opts: IOptionsInfoparser;
		if (Array.isArray(parentId))
		{
			[parentId, isElem, opts] = parentId;
		}

		await renderInfo(parentId, isElem, opts)
			.then(({
				html,
				...ret
			}) => {
				temp.push({
					...ret,
					isElem,
					opts,
				});

				// @ts-ignore
				ret.elem._beautifyOpts = opts;

				observer.observe(ret.elem, {
					//characterData: true,
					childList: true,
					//subtree: true,
					//attributes: true,
					//attributeFilter: ['title', 'placeholder'],
				});
			}).catch(e => console.error(EXTENSION_NAME, e))
		;
	}

	console.info(EXTENSION_NAME, `onUiLoaded`, temp)
})
