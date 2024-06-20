import { EXTENSION_NAME } from './const';

function initLogger()
{
	const list = [
		'log',
		'error',
		'debug',
		'info',
		'warn',
		// @ts-ignore
	] as const satisfies Extract<keyof typeof console, string>;

	return (Object.keys(console) as Extract<keyof typeof console, string>[])
		.reduce((log, method) => {

			let fn = console[method];
			if (typeof fn === 'function' && list.includes(method as any))
			{
				// @ts-ignore
				log[method] = fn.bind(console, EXTENSION_NAME)
			}

			return log
		}, {} as any as typeof console)
}

export const logger = initLogger();
