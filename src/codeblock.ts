import constructTemplate, { tagFunction } from './constructTemplate';

export default function codeblock(type: string): tagFunction;
export default function codeblock(type: TemplateStringsArray, ...args: any[]): string;
export default function codeblock(type: string | TemplateStringsArray, ...args: any[]): string | tagFunction {
	if (Array.isArray(type)) return `\`\`\`\n${constructTemplate(type as TemplateStringsArray, ...args)}\`\`\``;
	return (subStrings: TemplateStringsArray, ...params: any[]): string => `\`\`\`${type}\n${constructTemplate(subStrings, ...params)}\`\`\``;
}
