import constructTemplate from './constructTemplate';

export default function (type: string | string[], ...args): Function | string {
	if (Array.isArray(type)) return `\`\`\`\n${constructTemplate(type, ...args)}\`\`\``;
	return (subStrings, ...params): string => `\`\`\`${type}\n${constructTemplate(subStrings, ...params)}\`\`\``;
}
