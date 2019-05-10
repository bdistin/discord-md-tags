import constructTemplate from './constructTemplate';

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
export default function strikethrough(subStrings: TemplateStringsArray, ...args: any[]): string {
	return `~~${constructTemplate(subStrings, ...args)}~~`;
}
