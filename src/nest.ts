import bold from './bold';
import code from './code';
import codeblock from './codeblock';
import italic from './italic';
import spoiler from './spoiler';
import strikethrough from './strikethrough';
import underline from './underline';


type format = typeof bold | typeof code | typeof codeblock | typeof italic | typeof spoiler | typeof strikethrough | typeof underline;

export default function nest(text: string, ...formats: format[]): string {
    return formats.length ? nest(formats.shift() `${text}`, ...formats) : text;
}
