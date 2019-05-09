export default function concat(...args: any[]): string {
    return `${args.shift()}${args.length ? ` ${concat(...args)}` : ''}`;
}
