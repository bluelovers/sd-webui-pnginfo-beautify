const customCSS = `

.shiki_infotext_root {
	max-height: 46.5em;
	overflow-y: auto;
	margin-bottom: 20px !important;
}

.shiki_infotext_main {
	display: flex;
	flex-direction: column;
	padding: 5px;
}

.shiki_infotext_label_div, .shiki_infotext_value_div {
	padding: 3px 5px;
	min-height: 24px;
}

.shiki_infotext_label_div
{
border-radius: 3px;
background: var(--button-secondary-background-fill);
}

.shiki_infotext_row:hover .shiki_infotext_label_div, .shiki_infotext_label_full
{
background: var(--button-primary-background-fill-hover);
color: var(--button-primary-text-color);
border-color: var(--button-primary-border-color);
}

.shiki_infotext_label, .shiki_infotext_value {
	margin: 0px 2px;
}

.shiki_infotext_label_full, .shiki_infotext_value_full {
	width: 100%;
}

.shiki_infotext_value_full > pre {
	padding: 10px 5px;
}

.shiki_infotext_value_full, .shiki_infotext_value_full pre, #shiki_infotext_highlighter {
	white-space: pre-wrap;
}

.shiki_infotext_main .shiki_infotext_row {
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 5px;
}

.shiki_infotext_label {
	flex: 1 0 auto;
	/*white-space: nowrap;*/
	min-width: 300px;
}

.shiki_infotext_value {
	flex: 4 1 auto;
	word-wrap: break-word;
	min-width: 0;
	margin: auto 2px;
	border: 1px solid var(--block-border-color);
	border-radius: 8px;
}

.shiki_infotext_row:hover .shiki_infotext_value {
	box-shadow: var(--input-shadow-focus);
	border-color: var(--color-accent);
}

.infotext .pending:hover {
	opacity: 1;
}
`;

export function initStyle()
{
	let $styleEL: HTMLStyleElement = document.getElementById('sd-webui-pnginfo-beautify-style') as any;

	if (!$styleEL)
	{
		$styleEL = document.createElement('style');
		gradioApp().appendChild($styleEL);
	}

	$styleEL.id = 'sd-webui-pnginfo-beautify-style';
	$styleEL.type = 'text/css';

	// @ts-ignore
	if ($styleEL.styleSheet)
	{
		// @ts-ignore
		$styleEL.styleSheet.cssText = customCSS;
	}
	else
	{
		$styleEL.innerHTML = customCSS;
		//$styleEL.appendChild(document.createTextNode(customCSS));
	}

	return $styleEL
}
