import { __ROOT, __ROOT_OUTPUT } from '../../__root';
import Bluebird from 'bluebird';
import { copy } from 'fs-extra';
import { join } from 'path';
// @ts-ignore
import { globSync } from 'fs';

export default Bluebird.each(globSync([
	'.github/workflows/build.yml',
	'README.md',
	'docs/**/*',
], {
	cwd: __ROOT,
}), (file: string) => {
	console.log(file)
	return copy(join(__ROOT, file), join(__ROOT_OUTPUT, file), {
		preserveTimestamps: true,
		dereference: true,
	})
});
