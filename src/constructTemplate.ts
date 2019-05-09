export default function (subStrings: string[], ...values: any[]): string {
	return values.reduce((prev, cur, i): string => `${prev}${cur}${subStrings[i + 1]}`, subStrings[0]);
}
