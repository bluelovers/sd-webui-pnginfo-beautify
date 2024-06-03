import { renderInfo } from './render';
import { logger } from './logger';

export function observerObserve(target: HTMLDivElement | HTMLTextAreaElement, observer: MutationObserver, cacheInfo: Partial<Awaited<ReturnType<typeof renderInfo>>>)
{
	if (cacheInfo.isInput)
	{
		logger.debug(`try watch input value`, target, cacheInfo);

		observer.observe(target, {
			//characterData: true,
			//childList: true,
			//subtree: true,
			attributes: true,
			//attributeFilter: ['title', 'placeholder'],
		});

		function fn(evt: Event, ...argv)
		{
			logger.debug(evt, argv)
		}

		target.addEventListener('input', fn);
		target.addEventListener('change', fn);
	}
	else
	{
		observer.observe(target, {
			//characterData: true,
			childList: true,
			//subtree: true,
			//attributes: true,
			//attributeFilter: ['title', 'placeholder'],
		});
	}
}
