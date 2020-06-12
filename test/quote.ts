import ava from 'ava';
import { quote } from '../src';

ava('standard', (test): void => {
	test.is(quote `test`, '> test');
});

ava('values', (test): void => {
	test.is(quote `test ${1 + 1}!`, '> test 2!');
});

ava('multi-line', (test): void => {
	test.is(quote `test\ntest2?`, '> test\n> test2?');
});
