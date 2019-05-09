import ava from 'ava';
import { codeblock } from '../dist';

ava('standard', (test): void => {
	test.is(codeblock `test`, '```\ntest```');
});

ava('values', (test): void => {
	test.is(codeblock `test ${1 + 1}!`, '```\ntest 2!```');
});

ava('substring', (test): void => {
	test.is(`test ${codeblock `3`}?`, 'test ```\n3```?');
});

ava('standard w/ type', (test): void => {
	test.is(codeblock('js') `test 4`, '```js\ntest 4```');
});

ava('values w/ type', (test): void => {
	test.is(codeblock('js') `test ${1 + 4}!`, '```js\ntest 5!```');
});

ava('substring w/ type', (test): void => {
	test.is(`test ${codeblock('js') `6`}?`, 'test ```js\n6```?');
});
