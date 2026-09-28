// Paste this into Extensions > Apps Script inside your Google Sheet.
const SECRET = 'change-this-secret';   // must match "Secret key" in the app Settings
const TAB = 'Invoices';
const HEAD = ['Invoice No','Saved At','Customer Name','Phone','Email','Service','Purchase Date','Validity','Price','Discount','Amount','Currency','Payment Mode','Payment Status'];

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents);
    if (d.secret !== SECRET) return out({ ok: false, error: 'Wrong secret key' });
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sh = ss.getSheetByName(TAB) || ss.insertSheet(TAB);
    if (sh.getLastRow() === 0) {
      sh.getRange(1, 1, 1, HEAD.length).setValues([HEAD]).setFontWeight('bold');
      sh.setFrozenRows(1);
      sh.getRange(2, 1, 1000, HEAD.length).setNumberFormat('@'); // keep phones/dates as text
    }
    const row = [d.inv, new Date().toLocaleString(), d.name, d.phone, d.email, d.service,
      d.purchase, d.validity, d.price, d.discount, d.total, d.currency, d.mode, d.status];
    const hit = sh.getLastRow() > 1
      ? sh.getRange(2, 1, sh.getLastRow() - 1, 1).createTextFinder(d.inv).matchEntireCell(true).findNext()
      : null;
    if (hit) sh.getRange(hit.getRow(), 1, 1, row.length).setValues([row]); // same invoice no. = update
    else sh.appendRow(row);
    return out({ ok: true });
  } catch (err) {
    return out({ ok: false, error: String(err) });
  }
}

function doGet() { return ContentService.createTextOutput('Invoice API is running'); }
function out(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
