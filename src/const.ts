import { IOptionsInfoparser } from '@bluelovers/auto1111-pnginfo';

export const EXTENSION_NAME = 'sd-webui-pnginfo-beautify';

export const CLASS_PREFIX = 'shiki_infotext_';

export const tabs = [
	'#html_info_txt2img',
	'#html_info_img2img',
	['#tab_pnginfo .html-log.prose, #tab_pnginfo .panel .form + .block.gradio-html div > .prose.gradio-html:first-of-type', true],
	['#html_info_x_extras.prose', true, {
		isIncludePrompts: false,
	}],
	['#html_info_extras.prose', true, {
		isIncludePrompts: false,
	}],
	['#html_info_replacer.prose', true],
	['#fastpnginfo_geninfo_html', true],
	//['#fastpnginfo_geninfo  > label > textarea', true],
	/**
	 * is trigger by style
	 */
	['#agent_scheduler_history_infotext textarea', true],
] satisfies (string | [string, boolean, opts?: IOptionsInfoparser])[];
