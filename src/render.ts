import { parseFromRawInfo } from '@bluelovers/auto1111-pnginfo';
import { renderLayout, switchBtn } from './layout';
import { CLASS_PREFIX, EXTENSION_NAME, tabs } from './const';
import { IOptionsInfoparser } from '@bluelovers/auto1111-pnginfo';
import { logger } from './logger';
import { pb_setPromptInput } from './send-to';

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
	const isInput = elem.matches('textarea, input');

	if (isInput)
	{
		// @ts-ignore
		infotext = elem.value;
	}
	else
	{
		// Read as HTML so we can remove the standalone <b>parameters</b> header
		const rawHtml = elem.innerHTML;
		const cleanedHtml = rawHtml.replace(/<b>\s*parameters\s*<\/b>/gi, '');
		const doc = new DOMParser().parseFromString(cleanedHtml, 'text/html');
		infotext = (doc.body.innerText || doc.body.textContent || '').trim();
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

		target.addEventListener('click', function (e) {
			const clickedElement = e.target as HTMLElement;
			const row = clickedElement.closest(`.${CLASS_PREFIX}row`) as HTMLDivElement | null;
			if (!row) return;

			if (clickedElement.matches(`.${CLASS_PREFIX}send2prompts`)) {
				const valueElement = row.querySelector(`.${CLASS_PREFIX}value_full, .${CLASS_PREFIX}value`);
				if (valueElement) {
					pb_setPromptInput(valueElement.textContent ?? '');
				}
				return;
			}

			if (clickedElement.matches(`.${CLASS_PREFIX}copy_row`)) {
				const valueElement = row.querySelector(`.${CLASS_PREFIX}value_full, .${CLASS_PREFIX}value`);
				if (!valueElement) return;

				function getTextExcludingLinks(node: Node): string {
					let text = '';
					for (const child of node.childNodes) {
						if (child.nodeType === Node.TEXT_NODE) {
							text += child.textContent ?? '';
						} else if (child.nodeType === Node.ELEMENT_NODE) {
							const el = child as HTMLElement;
							if (el.tagName !== 'A') {
								if (el.tagName === 'DIV') {
									text += '\n';
								}
								text += getTextExcludingLinks(child);
							}
						}
					}
					return text;
				}

				let text = getTextExcludingLinks(valueElement);
				text = text.replace(/[\u200B-\u200D\uFEFF]/g, '').trim();

				navigator.clipboard.writeText(text).then(() => {
					(clickedElement as HTMLElement).textContent = '\u2705';
					setTimeout(() => {
						(clickedElement as HTMLElement).textContent = '\u{1F4C4}';
					}, 1000);
				}).catch((err) => {
					console.error('Copy failed', err);
				});

				return;
			}
		});
	}
	else
	{
		target.innerHTML = html;
	}

	if (html.length)
	{
		changeDisplay(elem, false);
		changeDisplay(target, true);
	}
	else
	{
		changeDisplay(elem, true);
		changeDisplay(target, false);
	}

	return {
		parentId,
		elem,
		target,
		html,
		isInput,
	}
}

function changeDisplay(elem: HTMLDivElement, show: boolean)
{
	const display = elem.style.display?.toLowerCase();

	if (typeof elem.dataset['originalDisplay'] === 'undefined')
	{
		let value = getComputedStyle(elem).display?.toLowerCase();

		if (!value?.length || value === 'none')
		{
			value = 'block'
		}

		elem.dataset['originalDisplay'] = value
	}

	if (show && ![elem.dataset['originalDisplay'], 'block'].includes(display))
	{
		elem.style.display = elem.dataset['originalDisplay']
	}
	else if (!show && display !== 'none')
	{
		elem.style.display = 'none'
	}
}
