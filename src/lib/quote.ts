import { constructTemplate } from '../util/constructTemplate';

/**
 * Adds quote markdown to the tagged template
 * @example
 * ```typescript
 * quote `text`;
 * // "> text"
 * ```
 * @param subStrings The template strings array
 * @param args The values passed in the ${}s
 */
export function quote(subStrings: TemplateStringsArray, ...args: any[]): string {
	return `> ${constructTemplate(subStrings, ...args).split('\n').join('\n> ')}`;
}
