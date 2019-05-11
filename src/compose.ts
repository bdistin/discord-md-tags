import constructTemplate, { tagFunction } from './constructTemplate';
import bold from './bold';
import code from './code';
import codeblock from './codeblock';
import italic from './italic';
import spoiler from './spoiler';
import strikethrough from './strikethrough';
import underline from './underline';

type format = typeof bold | typeof code | typeof codeblock | typeof italic | typeof spoiler | typeof strikethrough | typeof underline;

/**
 * Creates a composite format (Order Matters)
 * @example
 * ```typescript
 * compose(bold, underline, strikethrough) `text`;
 * // "~~__**text**__~~"
 * ```
 * @example
 * ```typescript
 * const spoilerTS = compose(codeblock('typescript'), spoiler);
 * spoilerTS `import { bold } from 'discord-md-tags';`;
 * // "||```typescript\nimport { bold } from 'discord-md-tags';```||"
 * ```
 * @param subStrings The template strings array
 * @param args The values passed in the ${}s
 */
export default function compose(...formats: format[]): tagFunction {
	return (subStrings: TemplateStringsArray, ...values: any[]): string => {
		let text = constructTemplate(subStrings, ...values);
		for (const format of formats) text = format `${text}`;
		return text;
	};
}