import constructTemplate from './constructTemplate';

export default function (subStrings, ...args): string {
	return `__${constructTemplate(subStrings, ...args)}__`;
}
