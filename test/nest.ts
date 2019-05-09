import ava from 'ava';
import { bold, italic, strikethrough, codeblock, nest } from '../dist';

ava('bold italic', (test): void => {
	test.is(nest(bold, italic) `test`, '***test***');
});

ava('bold italic strikethrough', (test): void => {
	test.is(nest(bold, italic, strikethrough) `test`, '~~***test***~~');
});

ava('bold italic strikethrough codeblock()', (test): void => {
	test.is(nest(bold, italic, strikethrough, codeblock('md')) `test`, '```md\n~~***test***~~```');
});

ava('bold italic strikethrough codeblock', (test): void => {
	test.is(nest(bold, italic, strikethrough, codeblock) `test`, '```\n~~***test***~~```');
});
