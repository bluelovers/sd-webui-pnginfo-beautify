import { EXTENSION_NAME } from './const';

function initLogger()
{
	return (Object.keys(console) as (keyof typeof console)[])
		.reduce((log, method) => {

			let fn = console[method];
			if (typeof fn === 'function')
			{
				// @ts-ignore
				log[method] = fn.bind(console, EXTENSION_NAME)
			}

			return log
		}, {} as any as typeof console)
}

export const logger = initLogger();
