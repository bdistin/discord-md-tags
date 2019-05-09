export default function (subStrings: string[], ...values: any[]): string {
	return subStrings.reduce((prev, cur, i): string => `${prev}${cur}${values[i + 1]}`, values[0]);
}
