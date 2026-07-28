const fs = require('fs');
const { translate } = require('@vitalets/google-translate-api');

(async () => {
    console.log("Loading dictionary...");
    const dictStr = fs.readFileSync('dict_extracted.json', 'utf8');
    const dict = JSON.parse(dictStr);
    
    const keys = Object.keys(dict);
    console.log(`Translating ${keys.length} keys...`);
    
    // Batch translation to avoid rate limits? Let's just translate all at once if possible, or batched.
    // google-translate-api can handle an array of strings? No, usually single string.
    // Let's batch them in chunks of 50.
    
    const translatedDict = { ar: {}, en: {} };
    
    const delay = ms => new Promise(res => setTimeout(res, ms));
    
    for (let i = 0; i < keys.length; i++) {
        const k = keys[i];
        const arText = dict[k].ar;
        try {
            const res = await translate(arText, { from: 'ar', to: 'en' });
            translatedDict.ar[k] = arText;
            translatedDict.en[k] = res.text;
            if (i % 20 === 0) console.log(`Progress: ${i} / ${keys.length}`);
            await delay(100); // 100ms delay to avoid rate limiting
        } catch (err) {
            console.error(`Error translating key ${k}:`, err.message);
            translatedDict.ar[k] = arText;
            translatedDict.en[k] = arText; // fallback
        }
    }
    
    fs.writeFileSync('dict_translated.json', JSON.stringify(translatedDict, null, 2), 'utf8');
    console.log("Done translating!");
})();
