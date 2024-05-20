// @ts-ignore
import customCSS from './style.scss'

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
