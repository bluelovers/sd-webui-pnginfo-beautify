
export function pb_gotoTab(tabname: string, tabsId = 'tabs') 
{
	Array.from(gradioApp().querySelectorAll<HTMLButtonElement>(`#${tabsId} > div:first-child button`)).forEach((button) => {
		let name = button.textContent.trim()
		let is_match = name === tabname

		if (!is_match)
		{
			name = button.querySelector('.bilingual__trans_source')?.textContent.trim()
			is_match = name === tabname
		}

		console.log('PNGINFO Beautify: found tab', name, is_match, button)
		if (is_match) 
		{
			button.click()
		}
	})
}

export function pb_setPromptInput(value: string, ...selectors: (string | HTMLElement)[])
{
	if (!selectors.length)
	{
		selectors = [pb_get_uiCurrentTabPromptInput()]
	}

	for (const selector of selectors) 
		{
		const input = pb_elemOrSelector<HTMLTextAreaElement>(selector)
		if (!input) {
			console.error('PNGINFO Beautify: Could not find input', selector)
			continue
		}
		input.value = value
		input.dispatchEvent(new Event('change'))
	}
}

export function pb_get_uiCurrentTab()
{
	const tab = get_uiCurrentTabContent()
	const id = tab.id.replace(/^tab_/, '')

	return {
		tab,
		id,
	}
}

export function pb_get_uiCurrentTabPromptInput()
{
	const { tab, id } = pb_get_uiCurrentTab()

	return tab.querySelector<HTMLTextAreaElement>(`#${id}_prompt textarea`)
}

export function pb_elemOrSelector<T = HTMLElement>(value: string | T | HTMLElement, parent?: HTMLElement)
{
	if (typeof value === 'string')
	{
		return (parent ?? gradioApp()).querySelector(value) as T
	}

	return value as T
}

// gotoTab('txt2img')
// // gotoTab('txt2img', 'mode_img2img')
// setPromptInput('#txt2img_txt2img_tab input[type=file]')

// pb_setPromptInput(`1girl`, `#tab_txt2img #txt2img_prompt textarea`)
