export type tagFunction = (subStrings: TemplateStringsArray, ...params: any[]) => string;

/**
 * Shared internal function for assembling TemplateStringArrays and values
 * @param subStrings The template strings array
 * @param args The values passed in the ${}s
 */
export function constructTemplate(subStrings: TemplateStringsArray, ...values: any[]): string {
	return values.reduce((prev, cur, i): string => `${prev}${cur}${subStrings[i + 1]}`, subStrings[0]);
}
