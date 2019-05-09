import constructTemplate from './constructTemplate';

export default function bold(subStrings: TemplateStringsArray, ...args: any[]): string {
	return `**${constructTemplate(subStrings, ...args)}**`;
}
