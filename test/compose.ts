import ava from 'ava';
import { bold, italic, strikethrough, codeblock, underline, compose } from '../dist';

ava('bold italic', (test): void => {
	test.is(compose(bold, italic) `test`, '***test***');
});

ava('bold italic strikethrough', (test): void => {
	test.is(compose(bold, italic, strikethrough) `test`, '~~***test***~~');
});

ava('bold italic strikethrough codeblock()', (test): void => {
	test.is(compose(bold, italic, strikethrough, codeblock('md')) `test`, '```md\n~~***test***~~```');
});

ava('bold italic strikethrough codeblock', (test): void => {
	test.is(compose(bold, italic, strikethrough, codeblock) `test`, '```\n~~***test***~~```');
});

ava('bold italic with values', (test): void => {
	test.is(compose(bold, italic) `test ${5}`, '***test 5***');
});

ava('bold italic with inner underline', (test): void => {
	test.is(compose(bold, italic) `test ${underline `6`}`, '***test __6__***');
});
