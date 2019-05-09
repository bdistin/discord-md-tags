import ava from 'ava';
import { strikethrough } from '../dist';

ava('standard', (test): void => {
	test.is(strikethrough `test`, '~~test~~');
});

ava('values', (test): void => {
	test.is(strikethrough `test ${1 + 1}!`, '~~test 2!~~');
});

ava('substring', (test): void => {
	test.is(`test ${strikethrough `3`}?`, 'test ~~3~~?');
});
