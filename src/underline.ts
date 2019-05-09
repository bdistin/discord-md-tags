import constructTemplate from './constructTemplate';

export default function (subStrings: TemplateStringsArray, ...args: any[]): string {
	return `__${constructTemplate(subStrings, ...args)}__`;
}
