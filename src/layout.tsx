function addRow(key: string, value: any, full?: boolean)
{
	let sx = full ? '_full' : '';
	let html = `<div class="shiki_infotext_row">`;
	html += `<div class="shiki_infotext_label_div shiki_infotext_label${sx}">${key}</div>`;
	html += `<div class="shiki_infotext_value_div shiki_infotext_value${sx} bilingual__trans_ignore_deep">${value}</div>`;
	html += `</div>`;
	return html;
}

function escapeHTML(html: string)
{
	return html.replace(/[&<>"']/g, c => `&#${c.charCodeAt(0)};`);
}

export function renderLayout({
	prompt,
	negative_prompt,
	config,
})
{
	let html = '';

	html += `<div class="shiki_infotext_main">`;

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
