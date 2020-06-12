import { constructTemplate } from './constructTemplate';

/**
 * Adds italic markdown to the tagged template
 * @example
 * ```typescript
 * italic `text`;
 * // "*text*"
 * ```
 * @param subStrings The template strings array
 * @param args The values passed in the ${}s
 */
export function italic(subStrings: TemplateStringsArray, ...args: any[]): string {
	return `*${constructTemplate(subStrings, ...args)}*`;
}
