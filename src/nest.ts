import constructTemplate, { tagFunction } from './constructTemplate';
import bold from './bold';
import code from './code';
import codeblock from './codeblock';
import italic from './italic';
import spoiler from './spoiler';
import strikethrough from './strikethrough';
import underline from './underline';


type format = typeof bold | typeof code | typeof codeblock | typeof italic | typeof spoiler | typeof strikethrough | typeof underline;

export default function nest(...formats: format[]): tagFunction {
	return (subStrings: TemplateStringsArray, ...values: any[]): string => {
		let text = constructTemplate(subStrings, ...values);
		for (const format of formats) text = format `${text}`;
		return text;
	};
}
