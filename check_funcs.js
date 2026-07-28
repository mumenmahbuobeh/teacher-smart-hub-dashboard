const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const js = fs.readFileSync('app.js', 'utf8');

// Extract all onclick function names from HTML
const re = /onclick="[^"]*?(\w+)\s*\(/g;
let m;
const htmlFuncs = new Set();
while (m = re.exec(html)) {
  htmlFuncs.add(m[1]);
}

// Extract all onchange function names from HTML
const re2 = /onchange="[^"]*?(\w+)\s*\(/g;
while (m = re2.exec(html)) {
  htmlFuncs.add(m[1]);
}

// Extract all onsubmit function names from HTML
const re3 = /onsubmit="[^"]*?(\w+)\s*\(/g;
while (m = re3.exec(html)) {
  htmlFuncs.add(m[1]);
}

// Extract all oninput function names from HTML
const re4 = /oninput="[^"]*?(\w+)\s*\(/g;
while (m = re4.exec(html)) {
  htmlFuncs.add(m[1]);
}

// Check which functions exist in app.js
const missing = [];
const found = [];
for (const fn of [...htmlFuncs].sort()) {
  // Skip standard JS functions
  if (['event', 'document', 'window', 'alert', 'console', 'parseInt', 'this'].includes(fn)) continue;
  if (js.includes(`function ${fn}(`) || js.includes(`function ${fn} (`)) {
    found.push(fn);
  } else {
    missing.push(fn);
  }
}

console.log('=== MISSING FUNCTIONS ===');
missing.forEach(f => console.log('MISSING:', f));
console.log('\n=== FOUND FUNCTIONS ===');
found.forEach(f => console.log('OK:', f));
