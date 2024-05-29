import { parseFromRawInfo } from '@bluelovers/auto1111-pnginfo';
import { renderLayout, switchBtn } from './layout';
import { CLASS_PREFIX, EXTENSION_NAME, tabs } from './const';
import { IOptionsInfoparser } from '@bluelovers/auto1111-pnginfo';
import { logger } from './logger';

export async function renderInfo(
	parentId: Extract<typeof tabs[number], string> | HTMLDivElement,
	isElem?: boolean,
	opts?: IOptionsInfoparser
)
{
	const inputArgv = {
		parentId,
		isElem,
		opts,
	};

	logger.debug('renderInfo:inputArgv', inputArgv);

	const app = gradioApp();
	let elem: HTMLDivElement;

	if (typeof parentId === 'string')
	{
		parentId = app.querySelector<HTMLDivElement>(parentId);
	}

	if (isElem)
	{
		elem = parentId;
		parentId = elem?.parentNode as HTMLDivElement;
	}

	if (!parentId)
	{
		logger.info('target not exists', inputArgv.parentId, inputArgv)
		return;
	}

	elem ??= parentId.querySelector(`.infotext`);

	let infotext: string;

	if (elem.matches('textarea'))
	{
		// @ts-ignore
		infotext = elem.value;
	}
	else
	{
		infotext = elem.innerText;
	}

	infotext = infotext?.replace(/^\s+|\s+$/g, '');

	let html: string = '';

	if (infotext?.length)
	{
		let options = {
			...opts,
			isIncludePrompts: opts?.isIncludePrompts ?? true,
		};

		let {
			prompt,
			negative_prompt,
			...config
		} = parseFromRawInfo(infotext, options)

		logger.debug('parseFromRawInfo', {
			prompt,
			negative_prompt,
			config,
			options,
		});

		//if (prompt?.length) prompt = await syntaxHighlighter(prompt);
		//if (negative_prompt?.length) negative_prompt = await syntaxHighlighter(negative_prompt);

		html = await renderLayout({
			prompt,
			negative_prompt,
			config,
		});
	}

	let target = parentId.querySelector(`.${CLASS_PREFIX}root`) as HTMLDivElement;

	if (!target)
	{
		elem.insertAdjacentHTML('afterend', `<div class="prose gradio-html ${CLASS_PREFIX}root">${html}</div>`);
		target = parentId.querySelector<HTMLDivElement>(`.${CLASS_PREFIX}root`);

		let btn = switchBtn(elem);
		target.parentNode.insertBefore(btn, target);

		logger.debug('switchBtn', {
			parentId,
			elem,
			target,
			btn,
		})
	}
	else
	{
		target.innerHTML = html;
	}

	if (html.length)
	{
		elem.style.display = 'none';
		target.style.display = 'block';
	}
	else
	{
		elem.style.display = 'block';
		target.style.display = 'none';
	}

	return {
		parentId,
		elem,
		target,
		html,
	}
}
