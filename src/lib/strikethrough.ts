import { constructTemplate } from '../util/constructTemplate';

/**
 * Adds strikethrough markdown to the tagged template
 * @example
 * ```typescript
 * strikethrough `text`;
 * // "~~text~~"
 * ```
 * @param subStrings The template strings array
 * @param args The values passed in the ${}s
 */
export function strikethrough(subStrings: TemplateStringsArray, ...args: any[]): string {
	return `~~${constructTemplate(subStrings, ...args)}~~`;
}
