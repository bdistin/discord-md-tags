import { constructTemplate } from './constructTemplate';

/**
 * Adds spoiler markdown to the tagged template
 * @example
 * ```typescript
 * spoiler `text`;
 * // "||text||"
 * ```
 * @param subStrings The template strings array
 * @param args The values passed in the ${}s
 */
export function spoiler(subStrings: TemplateStringsArray, ...args: any[]): string {
	return `||${constructTemplate(subStrings, ...args)}||`;
}
