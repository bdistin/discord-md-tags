import ava from 'ava';
import { italic } from '../src';

ava('standard', (test): void => {
	test.is(italic `test`, '*test*');
});

ava('values', (test): void => {
	test.is(italic `test ${1 + 1}!`, '*test 2!*');
});

ava('substring', (test): void => {
	test.is(`test ${italic `3`}?`, 'test *3*?');
});
