import ava from 'ava';
import { code } from '../dist';

ava('standard', (test): void => {
	test.is(code `test`, '`test`');
});

ava('values', (test): void => {
	test.is(code `test ${1+1}!`, '`test 2!`');
});

ava('substring', (test): void => {
	test.is(`test ${code `3`}?`, 'test `3`?');
});
