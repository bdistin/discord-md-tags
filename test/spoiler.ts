import ava from 'ava';
import { spoiler } from '../dist';

ava('standard', (test): void => {
	test.is(spoiler `test`, '||test||');
});

ava('values', (test): void => {
	test.is(spoiler `test ${1+1}!`, '||test 2!||');
});

ava('substring', (test): void => {
	test.is(`test ${spoiler `3`}?`, 'test ||3||?');
});
