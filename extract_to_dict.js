const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('index.html', 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

const arabicRegex = /[\u0600-\u06FF]/;
let counter = 1;
const dict = {};

function processNode(node) {
  if (node.type === 'text') {
    const text = node.data.trim();
    if (text && arabicRegex.test(text)) {
      const parent = $(node).parent();
      
      // Skip if already has data-i18n
      if (parent.attr('data-i18n')) return;
      
      // Check if the parent only contains this text or a mix
      // To simplify, if a node has text, we wrap it in a span if needed, or if it's the only child, we just add data-i18n to parent
      const key = 'auto_' + counter++;
      dict[key] = { ar: text, en: 'TODO_' + text };
      
      if (parent.contents().length === 1) {
        parent.attr('data-i18n', key);
      } else {
        // Replace text node with a span
        const span = $('<span />').attr('data-i18n', key).text(text);
        $(node).replaceWith(span);
      }
    }
  } else if (node.type === 'tag') {
    // Check attributes like placeholder, title
    ['placeholder', 'title'].forEach(attr => {
      const val = $(node).attr(attr);
      if (val && arabicRegex.test(val)) {
        const key = 'auto_' + counter++;
        dict[key] = { ar: val, en: 'TODO_' + val };
        $(node).attr('data-i18n-' + (attr === 'placeholder' ? 'ph' : 'title'), key);
      }
    });
    
    $(node).contents().each((i, child) => processNode(child));
  }
}

$('body').contents().each((i, node) => processNode(node));

fs.writeFileSync('index_modified.html', $.html(), 'utf8');
fs.writeFileSync('dict_extracted.json', JSON.stringify(dict, null, 2), 'utf8');
console.log('Done! Extracted', Object.keys(dict).length, 'strings.');
