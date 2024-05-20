import { CLASS_PREFIX } from './const';

function addRow(key: string, value: any, full?: boolean)
{
	let sx = full ? '_full' : '';
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

export function renderLayout({
	prompt,
	negative_prompt,
	config,
})
{
	let html = '';

	html += `<div class="${CLASS_PREFIX}main">`;

	if (prompt?.length) html += addRow('Positive Prompt', prompt, true);
	if (negative_prompt?.length) html += addRow('Negative Prompt', negative_prompt, true);

	Object.entries(config as Record<string, string>).forEach(([key, value]) =>
	{
		if (typeof value === 'string')
		{
			value = escapeHTML(value);
		}

		html += addRow(key, value);
	})

	html += `</div>`

	return html
}
