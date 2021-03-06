# discord-md-tags
A collection of tag functions for discord markdown

These are Tag Functions for use with [Tagged Templates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates)

Usage is simple:

```js
const { bold, italic } = require('discord-md-tags');

console.log(bold `text`);
// Logs: "**text**"

console.log(bold `bold ${italic `bold and italic`}`);
// Logs: "**bold *bold and italic***"
```

This works the same for `italic`, `underline`, `code`, `spoiler`, `strikethrough`, `quote`.

`codeblock` also works the same, but has a bit more:

```js
const { codeblock } = require('discord-md-tags');

console.log(codeblock `text`);
// Logs: "```\ntext```"

console.log(codeblock('md') `text`);
// Logs: "```md\ntext```"
```

Find the native javascript nesting a bit ugly? Find beauty by making composite formats with the included `compose` util!
```js
const { bold, italic, compose } = require('discord-md-tags');

// :(
console.log(bold `${italic `text`}`);
// Logs: "***text***"

// :)
console.log(compose(bold, italic) `text`);
// Logs: "***text***"
```
