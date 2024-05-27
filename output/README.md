# README.md

    Stable Diffusion PNGINFO Beautify extension

https://github.com/bluelovers/sd-webui-pnginfo-beautify

![img.png](docs/img.png)

This extension is designed to enhance the user experience and performance of
the [AUTOMATIC1111/stable-diffusion-webui](https://github.com/AUTOMATIC1111/stable-diffusion-webui)
or [lllyasviel/stable-diffusion-webui-forge](https://github.com/lllyasviel/stable-diffusion-webui-forge) projects.

fork from [lobehub/sd-webui-lobe-theme](https://github.com/lobehub/sd-webui-lobe-theme)
do not install with lobe theme at same time

I like the lobe theme, but it slows down and freezes the UI very much.

## Feature

The extension provides additional features and improvements to the Stable Diffusion WebUI, such as:

### Supported tabs

see https://github.com/bluelovers/sd-webui-pnginfo-beautify/blob/dev/src/const.ts

- txt2img
- img2img
- PNG info
- Extras
- [Replacer](https://github.com/light-and-ray/sd-webui-replacer)

### Supported fields

see https://github.com/bluelovers/sd-webui-pnginfo-beautify/blob/dev/src/row-config.ts

#### SyntaxHighlighter

- Positive Prompt
- Negative Prompt
- sv_prompt
- Template
- Template Generated

#### hashes

- TI hashes
- Lora hashes

#### Searchs

- Model hash
- Model
- VAE hash
- VAE
- ADetailer model

#### Others

- Show/Hide Original pnginfo

## Known issues

- Old installations may have a bug that prevents updating to the new version. To resolve this issue, follow these steps:
    1. Close Stable Diffusion WebUI.
    2. Delete the extension folder.
    3. Restart Stable Diffusion WebUI.
    4. Reinstall the extension.
