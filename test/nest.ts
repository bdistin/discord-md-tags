import ava from 'ava';
import { bold, italic, strikethrough, codeblock, nest } from '../dist';

ava('bold italic', (test): void => {
	test.is(nest('test', bold, italic), '***test***');
});

ava('bold italic strikethrough', (test): void => {
	test.is(nest('test', bold, italic, strikethrough), '~~***test***~~');
});

ava('bold italic strikethrough codeblock()', (test): void => {
	test.is(nest('test', bold, italic, strikethrough, codeblock('md')), '```md\n~~***test***~~```');
});

ava('bold italic strikethrough codeblock', (test): void => {
	test.is(nest('test', bold, italic, strikethrough, codeblock), '```\n~~***test***~~```');
});
