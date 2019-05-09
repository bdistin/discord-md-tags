import constructTemplate from './constructTemplate';

export default function strikethrough(subStrings: TemplateStringsArray, ...args: any[]): string {
	return `~~${constructTemplate(subStrings, ...args)}~~`;
}
