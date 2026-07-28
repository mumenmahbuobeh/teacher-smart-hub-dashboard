const fs = require('fs');

const appJs = fs.readFileSync('app.js', 'utf8');
const dictStr = fs.readFileSync('dict_translated.json', 'utf8');
const translatedDict = JSON.parse(dictStr);

// We need to inject translatedDict.ar into i18n.ar and translatedDict.en into i18n.en
// We can use a regex to find the start of i18n object and inject it.

let newAppJs = appJs;

const arKeys = Object.entries(translatedDict.ar).map(([k, v]) => `    ${k}: ${JSON.stringify(v)}`).join(',\n');
const enKeys = Object.entries(translatedDict.en).map(([k, v]) => `    ${k}: ${JSON.stringify(v)}`).join(',\n');

newAppJs = newAppJs.replace(/ar:\{/, `ar:{\n${arKeys},`);
newAppJs = newAppJs.replace(/en:\{/, `en:{\n${enKeys},`);

fs.writeFileSync('app_modified.js', newAppJs, 'utf8');
console.log("Injected into app_modified.js");
