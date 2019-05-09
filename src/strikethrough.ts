import constructTemplate from './constructTemplate';

export default function (subStrings, ...args): string {
	return `~~${constructTemplate(subStrings, ...args)}~~`;
}
