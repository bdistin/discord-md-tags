import constructTemplate from './constructTemplate';

export default function underline(subStrings: TemplateStringsArray, ...args: any[]): string {
	return `__${constructTemplate(subStrings, ...args)}__`;
}
