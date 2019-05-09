import constructTemplate from './constructTemplate';

export default function italic(subStrings: TemplateStringsArray, ...args: any[]): string {
	return `*${constructTemplate(subStrings, ...args)}*`;
}
