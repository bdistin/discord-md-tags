import constructTemplate from './constructTemplate';

export default function code(subStrings: TemplateStringsArray, ...args: any[]): string {
	return `\`${constructTemplate(subStrings, ...args)}\``;
}
