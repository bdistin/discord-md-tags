import { constructTemplate, tagFunction } from './constructTemplate';

import type { bold } from '../lib/bold';
import type { code } from '../lib/code';
import type { codeblock } from '../lib/codeblock';
import type { italic } from '../lib/italic';
import type { spoiler } from '../lib/spoiler';
import type { strikethrough } from '../lib/strikethrough';
import type { underline } from '../lib/underline';
import type { quote } from '../lib/quote';

type format = typeof bold | typeof code | typeof codeblock | typeof italic | typeof spoiler | typeof strikethrough | typeof underline | typeof quote;

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
export function compose(...formats: format[]): tagFunction {
	return (subStrings: TemplateStringsArray, ...values: any[]): string => {
		let text = constructTemplate(subStrings, ...values);
		for (const format of formats) text = format `${text}`;
		return text;
	};
}
