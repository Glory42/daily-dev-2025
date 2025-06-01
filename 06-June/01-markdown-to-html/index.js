const fs = require('fs');
const path = process.argv[2];
const { marked } = require('marked');

if (!path) {
    console.log('Please give a Markdown file.');
    process.exit(1);
}

const markdown = fs.readFileSync(path, 'utf-8');
console.log(markdown);

const html = marked(markdown);
console.log(html);

const outputFile = path.replace(/\.md$/, '.html');

fs.writeFileSync(outputFile, html);
console.log(`${outputFile} file made.`);