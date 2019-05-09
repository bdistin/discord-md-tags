import constructTemplate from './constructTemplate';

type tagFunction = (subStrings: TemplateStringsArray, ...params: any[]) => string;

export default function(type: string): tagFunction;
export default function(type: TemplateStringsArray, ...args: any[]): string;
export default function (type: string | TemplateStringsArray, ...args: any[]): string | tagFunction {
	if (Array.isArray(type)) return `\`\`\`\n${constructTemplate(type as TemplateStringsArray, ...args)}\`\`\``;
	return (subStrings: TemplateStringsArray, ...params: any[]): string => `\`\`\`${type}\n${constructTemplate(subStrings, ...params)}\`\`\``;
}
