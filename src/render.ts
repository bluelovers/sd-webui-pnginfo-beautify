import { parseFromRawInfo } from '@bluelovers/auto1111-pnginfo';
import { syntaxHighlighter } from './highlighter';
import { renderLayout } from './layout';
import { EXTENSION_NAME, tabs } from './const';

export async function renderInfo(parentId: Extract<typeof tabs[number], string> | HTMLDivElement, isElem?: boolean)
{
	const app = gradioApp();
	let elem: HTMLDivElement;

	if (isElem && typeof parentId !== 'string')
	{
		elem = parentId;
		parentId = elem.parentNode as any;
	}

	if (typeof parentId === 'string')
	{
		parentId = app.querySelector(parentId) as HTMLDivElement;
	}

	elem ??= parentId.querySelector(`.infotext`);

	let infotext = elem.innerText?.replace(/^\s+|\s+$/g, '');

	let html: string = '';

	if (infotext?.length)
	{
		let {
			prompt,
			negative_prompt,
			...config
		} = parseFromRawInfo(infotext, {
			isIncludePrompts: true,
		})

		console.debug(EXTENSION_NAME, 'parseFromRawInfo', {
			prompt,
			negative_prompt,
			config,
		});

		prompt = await syntaxHighlighter(prompt);
		negative_prompt = await syntaxHighlighter(negative_prompt);

		html = renderLayout({
			prompt,
			negative_prompt,
			config,
		});
	}

	let target = parentId.querySelector(`.shiki_infotext_root`) as HTMLDivElement;

	if (!target)
	{
		elem.insertAdjacentHTML('afterend', `<div class="prose gradio-html shiki_infotext_root">${html}</div>`);
		target = parentId.querySelector(`.shiki_infotext_root`) as HTMLDivElement;
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
