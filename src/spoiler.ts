import constructTemplate from './constructTemplate';

export default function spoiler(subStrings: TemplateStringsArray, ...args: any[]): string {
	return `||${constructTemplate(subStrings, ...args)}||`;
}
