import { constructTemplate } from '../util/constructTemplate';

/**
 * Adds underline markdown to the tagged template
 * @example
 * ```typescript
 * underline `text`;
 * // "__text__"
 * ```
 * @param subStrings The template strings array
 * @param args The values passed in the ${}s
 */
export function underline(subStrings: TemplateStringsArray, ...args: any[]): string {
	return `__${constructTemplate(subStrings, ...args)}__`;
}
