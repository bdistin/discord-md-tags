import ava from 'ava';
import { bold, italic, strikethrough, concat, nest } from '../dist';

ava('concat with bold 1', (test): void => {
	test.is(concat('test', bold `1`), 'test **1**');
});

ava('nested mess 2', (test): void => {
	test.is(concat(nest('test', bold, italic, strikethrough), 2), '~~***test***~~ 2');
});

ava('concat with no format', (test): void => {
	test.is(concat('test', '3'), 'test 3');
});
