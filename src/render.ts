import { parseFromRawInfo } from '@bluelovers/auto1111-pnginfo';
import { renderLayout, switchBtn } from './layout';
import { CLASS_PREFIX, EXTENSION_NAME, tabs } from './const';
import { IOptionsInfoparser } from '@bluelovers/auto1111-pnginfo';
import { logger } from './logger';
import { pb_setPromptInput } from './send-to';

/**
 * 將文字複製到剪貼簿，並相容不安全上下文（non-secure context）。
 * Copy the given text to the clipboard, with a fallback for non-secure contexts.
 *
 * `navigator.clipboard` 僅在 HTTPS 或 localhost 等安全上下文中可用；
 * 當頁面以 file:// 或一般 HTTP 開啟，或文件未取得焦點時，
 * `navigator.clipboard` 會是 undefined，直接呼叫會拋出
 * "can't access property 'writeText', navigator.clipboard is undefined"。
 *
 * `navigator.clipboard` is only available in secure contexts (HTTPS / localhost).
 * On pages served over file:// or plain HTTP, or when the document is not focused,
 * `navigator.clipboard` is undefined and accessing `.writeText` throws a TypeError.
 *
 * 因此先偵測 clipboard API 是否存在，不存在時改用隱藏的 textarea
 * 搭配已棄用但仍廣泛支援的 `document.execCommand('copy')` 作為降級方案。
 *
 * We first probe for the Clipboard API; when it is unavailable we fall back to a
 * hidden <textarea> together with the deprecated-but-still-widely-supported
 * `document.execCommand('copy')`.
 */
function copyText(text: string): Promise<void>
{
	if (navigator.clipboard && navigator.clipboard.writeText)
	{
		return navigator.clipboard.writeText(text);
	}

	return new Promise<void>((resolve, reject) =>
	{
		// 建立一個不可見的 textarea 作為複製來源
		// Create an off-screen textarea to act as the copy source
		const textarea = document.createElement('textarea');
		textarea.value = text;
		textarea.setAttribute('readonly', '');
		textarea.style.position = 'fixed';
		textarea.style.top = '-9999px';
		textarea.style.opacity = '0';
		document.body.appendChild(textarea);
		textarea.select();
		textarea.setSelectionRange(0, text.length);

		try
		{
			// execCommand 已在標準中棄用，但多數瀏覽器仍支援，作為降級方案
			// execCommand is deprecated but still supported as a fallback
			const ok = document.execCommand('copy');
			document.body.removeChild(textarea);
			if (ok)
			{
				resolve();
			}
			else
			{
				reject(new Error('execCommand copy failed'));
			}
		}
		catch (err)
		{
			document.body.removeChild(textarea);
			reject(err as Error);
		}
	});
}

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

				copyText(text).then(() => {
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
