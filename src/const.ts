import { IOptionsInfoparser } from '@bluelovers/auto1111-pnginfo';

export const EXTENSION_NAME = 'sd-webui-pnginfo-beautify';

export const CLASS_PREFIX = 'shiki_infotext_';

export const tabs = [
	'#html_info_txt2img',
	'#html_info_img2img',
	['#tab_pnginfo .html-log.prose', true],
	['#html_info_x_extras.prose', true, {
		isIncludePrompts: false,
	}],
	['#html_info_extras.prose', true, {
		isIncludePrompts: false,
	}],
	['#html_info_replacer.prose', true],
	['#fastpnginfo_geninfo_html', true],
	//['#fastpnginfo_geninfo  > label > textarea', true],
] satisfies (string | [string, boolean, opts?: IOptionsInfoparser])[];
