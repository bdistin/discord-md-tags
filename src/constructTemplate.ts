export default function (subStrings: TemplateStringsArray, ...values: any[]): string {
	return values.reduce((prev, cur, i): string => `${prev}${cur}${subStrings[i + 1]}`, subStrings[0]);
}
