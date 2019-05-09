import ava from 'ava';
import { bold } from '../dist';

ava('standard', (test): void => {
	test.is(bold `test`, '**test**');
});

ava('values', (test): void => {
	test.is(bold `test ${1+1}!`, '**test 2!**');
});

ava('substring', (test): void => {
	test.is(`test ${bold `3`}?`, 'test **3**?');
});
