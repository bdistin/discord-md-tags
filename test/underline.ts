import ava from 'ava';
import { underline } from '../dist';

ava('standard', (test): void => {
	test.is(underline `test`, '__test__');
});

ava('values', (test): void => {
	test.is(underline `test ${1+1}!`, '__test 2!__');
});

ava('substring', (test): void => {
	test.is(`test ${underline `3`}?`, 'test __3__?');
});
