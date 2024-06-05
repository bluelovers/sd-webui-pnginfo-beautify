import { CLASS_PREFIX } from './const';
import { IRowConfigOptions, RowConfigMap, RowConfigMapRegExp, RowConfigMapRegExpCached } from './row-config';
import { syntaxHighlighter } from './highlighter';
import { IRecordInfo } from '@bluelovers/auto1111-pnginfo';

export function _addRowCoreOptions(key: string, value: any, infoData: ILayoutInfoData)
{
	let opts = RowConfigMap.get(key);

	if (!opts && RowConfigMapRegExpCached?.test(key))
	{
		for (let [re, value] of RowConfigMapRegExp.entries())
		{
			if (re.test(key))
			{
				opts = value;
				break;
			}
		}
	}

	opts ??= {};

	return opts
}

export async function _addRowCore(key: string, value: any, infoData: ILayoutInfoData, opts: IRowConfigOptions)
{
	if (typeof value === 'string' && value?.length)
	{
		let doEscapeHTML = !opts.disableEscapeHTML;

		if (opts.decode)
		{
			if (opts.decode === true)
			{
				value = JSON.parse(value)
			}
			else
			{
				value = await opts.decode(value, key);
			}
		}

		if (opts.formatFn)
		{
			value = await opts.formatFn(value, key);
		}

		if (opts.syntaxHighlighter)
		{
			doEscapeHTML = false;

			value = await (opts.syntaxHighlighter === true ? syntaxHighlighter : opts.syntaxHighlighter)(value, opts, key);
		}

		if (doEscapeHTML)
		{
			value = escapeHTML(value);
		}
	}

	return {
		key,
		value,
		opts,
	}
}

async function addRow(key: string, value: any, infoData: ILayoutInfoData)
{
	const opts = _addRowCoreOptions(key, value, infoData);
	({ key, value} = await _addRowCore(key, value, infoData, opts));

	const sx = opts.full ? '_full' : '';

	let html = `<div class="${CLASS_PREFIX}row">`;
	html += `<div class="${CLASS_PREFIX}label_div ${CLASS_PREFIX}label${sx}" data-key="${escapeHTML(key)}">${key}</div>`;
	html += `<div class="${CLASS_PREFIX}value_div ${CLASS_PREFIX}value${sx} bilingual__trans_ignore_deep">${value}</div>`;
	html += `</div>`;
	return html;
}

function escapeHTML(html: string)
{
	return html.replace(/[&<>"']/g, c => `&#${c.charCodeAt(0)};`);
}

export function switchBtn(elem: HTMLDivElement)
{
	let btn = document.createElement('button');

	btn.className = `${CLASS_PREFIX}show_hide_btn`;

	btn.classList.add('lg');
	btn.classList.add('secondary');
	btn.classList.add('gradio-button');
	btn.classList.add('tool');

	btn.innerText = `፨`;

	btn.addEventListener('click', () => {
		elem.style.display = elem.style.display === 'none' ? 'block' : 'none';
	})

	let div = document.createElement('div');

	div.className = `${CLASS_PREFIX}show_hide_div`;
	div.classList.add('bilingual__trans_ignore_deep');

	div.append(btn);

	return div
}

interface ILayoutInfoData
{
	prompt: string;
	negative_prompt: string;
	config: Omit<IRecordInfo, 'prompt' | 'negative_prompt'>;
}

export async function renderLayout(infoData: ILayoutInfoData)
{
	let html = '';

	html += `<div class="${CLASS_PREFIX}main">`;

	if (infoData.prompt?.length) html += await addRow('Positive Prompt', infoData.prompt, infoData);
	if (infoData.negative_prompt?.length) html += await addRow('Negative Prompt', infoData.negative_prompt, infoData);

	for (let [key, value] of Object.entries(infoData.config as Record<string, string>))
	{
		html += await addRow(key, value, infoData);
	}

	html += `</div>`

	return html
}
