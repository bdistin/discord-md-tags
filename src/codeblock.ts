import { constructTemplate, tagFunction } from './constructTemplate';

/**
 * Adds codeblock markdown to the tagged template
 * @example
 * ```typescript
 * codeblock `text`;
 * // "```\ntext```"
 * ```
 * @example
 * ```typescript
 * codeblock('typescript') `text`;
 * // "```typescript\ntext```"
 * ```
 * @param subStrings The template strings array
 * @param args The values passed in the ${}s
 */
export function codeblock(type: string): tagFunction;
export function codeblock(type: TemplateStringsArray, ...args: any[]): string;
export function codeblock(type: string | TemplateStringsArray, ...args: any[]): string | tagFunction {
	if (Array.isArray(type)) return `\`\`\`\n${constructTemplate(type as TemplateStringsArray, ...args)}\`\`\``;
	return (subStrings: TemplateStringsArray, ...params: any[]): string => `\`\`\`${type}\n${constructTemplate(subStrings, ...params)}\`\`\``;
}
