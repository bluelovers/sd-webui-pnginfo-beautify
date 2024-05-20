import { IOptionsInfoparser } from '@bluelovers/auto1111-pnginfo';

export const EXTENSION_NAME = 'sd-webui-pnginfo-beautify';

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
] satisfies (string | [string, boolean, opts?: IOptionsInfoparser])[];
