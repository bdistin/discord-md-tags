import { constructTemplate } from './constructTemplate';

/**
 * Adds code markdown to the tagged template
 * @example
 * ```typescript
 * code `text`;
 * // "`text`"
 * ```
 * @param subStrings The template strings array
 * @param args The values passed in the ${}s
 */
export function code(subStrings: TemplateStringsArray, ...args: any[]): string {
	return `\`${constructTemplate(subStrings, ...args)}\``;
}
