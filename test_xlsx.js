const XLSX = require('xlsx');

// Create a dummy workbook
const wb = XLSX.utils.book_new();
const ws = XLSX.utils.aoa_to_sheet([["Name", "Grade"], ["Test", 100]]);
XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

// Write to array buffer
const out = XLSX.write(wb, { type: 'array', bookType: 'xlsx' });

try {
  const data = new Uint8Array(out);
  const workbook = XLSX.read(data, { type: 'array' });
  console.log("Success, sheet names:", workbook.SheetNames);
} catch (e) {
  console.error("Error:", e);
}
