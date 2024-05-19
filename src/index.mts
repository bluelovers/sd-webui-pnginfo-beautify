/**
 * Created by user on 2024/5/17.
 */
/// <reference types="../global.webui.d.ts" preserve="true"/>

import { renderInfo } from './render';
import { initStyle } from './style';
import { EXTENSION_NAME, tabs } from './const';

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
		console.debug(EXTENSION_NAME, 'observer', {
			mutationsList,
		})
		for (let mutation of mutationsList)
		{
			// @ts-ignore
			console.debug(EXTENSION_NAME, 'observer:mutation', mutation.type, mutation.target?.id, mutation.target, mutation)
			await renderInfo(mutation.target as HTMLDivElement, true)
		}
	});

	let temp = [];

	for (let parentId of tabs)
	{
		let {
			html,
			...ret
		} = await renderInfo(parentId)
		//const elem = app.querySelector(`${parentId} .infotext`) as HTMLDivElement;

		temp.push(ret);

		observer.observe(ret.elem, {
			//characterData: true,
			childList: true,
			//subtree: true,
			//attributes: true,
			//attributeFilter: ['title', 'placeholder'],
		});
	}

	console.info(EXTENSION_NAME, `onUiLoaded`, temp)
})
