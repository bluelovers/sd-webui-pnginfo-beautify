/**
 * Created by user on 2024/5/17.
 */
/// <reference types="../global.webui.d.ts" preserve="true"/>

import { renderInfo } from './render';
import { initStyle } from './style';
import { EXTENSION_NAME, tabs } from './const';
import { IOptionsInfoparser } from '@bluelovers/auto1111-pnginfo';
import { logger } from './logger';
import { observerObserve } from './observer';

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
			logger.info('observer:mutation', {
				type: mutation.type,
				id: elem?.id,
				elem,
				mutation,
				_beautifyOpts: (elem as any)._beautifyOpts,
			}, mutation.type === 'attributes' && {
				attributeName: mutation.attributeName,
				attributeValue: elem[mutation.attributeName],
			})
			await renderInfo(mutation.target as HTMLDivElement, true, (elem as any)._beautifyOpts)
				.catch(e => logger.error(e))
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
			.then((map) => {

				if (!map)
				{
					return;
				}

				let {
					html,
					...ret
				} = map;

				let tempOpts = {
					...ret,
					isElem,
					opts,
				}

				temp.push(tempOpts);

				// @ts-ignore
				ret.elem._beautifyOpts = opts;

				return observerObserve(ret.elem, observer, tempOpts);
			}).catch(e => logger.error({
				parentId,
				isElem,
				opts,
			}, e))
		;
	}

	logger.info(`onUiLoaded`, temp)
})
