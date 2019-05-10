import constructTemplate from './constructTemplate';

/**
 * Adds bold markdown to the tagged template
 * @example
 * ```typescript
 * bold `text`;
 * // "**text**"
 * ```
 * @param subStrings The template strings array
 * @param args The values passed in the ${}s
 */
export default function bold(subStrings: TemplateStringsArray, ...args: any[]): string {
	return `**${constructTemplate(subStrings, ...args)}**`;
}
