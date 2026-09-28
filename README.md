# Designer Deb – Invoice & Email Desk

Files: `index.html` (the whole app) · `Code.gs` (Google Sheet connector) · this README.

## Step 1 – Connect Google Sheets (5 min)
1. Go to sheets.google.com and create a blank sheet named **Designer Deb Invoices**.
2. Click **Extensions → Apps Script**. Delete the sample code and paste all of `Code.gs`.
3. Change `SECRET` on line 2 to any private word. Click **Save**.
4. Click **Deploy → New deployment**. Gear icon → **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Click **Deploy → Authorize access** and choose your account. If Google warns "unverified app", click **Advanced → Go to project (unsafe)**. This is your own script, so it's safe.
6. Copy the **Web app URL** (ends in `/exec`). Keep it private.

If you edit `Code.gs` later, use **Deploy → Manage deployments → pencil → Version: New version → Deploy**. The URL stays the same.

## Step 2 – Host on GitHub Pages
1. On github.com click **New repository**, name it `invoice-desk`, set it **Public**, and create it.
2. Click **Add file → Upload files**, drag in `index.html` (and this README if you like), then **Commit**.
3. Go to **Settings → Pages**. Under Source choose **Deploy from a branch**, Branch **main**, folder **/(root)**, and **Save**.
4. After about a minute your site is live at `https://YOUR-USERNAME.github.io/invoice-desk/`. Bookmark it or use "Add to Home Screen" on your phone.

## Step 3 – First-time setup in the app
Open the site and tap **⚙ Settings** (top right). Everything saves as you type; tap **Done** to close. Fill in:
- Business name, tagline, email, phone
- Terms & conditions
- Services & prices: edit the rows (name, price, months of validity, 0 = lifetime), tap **+ Add service** for more, ✕ to remove
- Apps Script URL and Secret key from Step 1, then tap **Test connection**
- Keep "Auto-save" ticked

Settings are stored in your browser only, so your Sheet URL and secret never go into GitHub. Repeat this once on each device you use.

## Daily use
1. Pick a service (price and validity fill automatically), add discount, customer details and payment method.
2. **Phone:** tap **Send email with PDF attached**. Choose Gmail or your mail app and the text and PDF are already attached.
3. **Desktop:** tap **Gmail / Outlook / Yahoo / Default mail app**. The PDF downloads and the compose window opens with the address, subject and text filled in. Drag the PDF in.
4. Each send or download saves a row to your sheet. Using the same invoice number again updates that row rather than duplicating it.
5. Tap **New invoice** to clear the customer and move to the next invoice number.

## Good to know
- Websites cannot attach a file to a mail app automatically. The share-sheet button on phones is the only one-tap way to do that, so the other buttons download the PDF for you to attach.
- The PDF prints ₹ as "Rs." because the built-in PDF font lacks the ₹ glyph. The email text keeps ₹.
- The Valid until date can be edited by hand. Choosing a duration only pre-fills it.
- The Sheet has no login on the web app URL other than your secret key, so keep both private.

## Phone mail apps
- **Send email with PDF attached** opens the phone share sheet. Pick Gmail, Outlook or Mail and the text and PDF arrive attached. This is the only way to get the file attached automatically.
- **Phone mail app** opens your default mail app with the address, subject and text filled in.
- **iPhone/iPad:** the Gmail, Outlook and Yahoo buttons open those apps directly. If the app isn't installed, it falls back to the default mail app.
- **Android:** the app-specific buttons are hidden. "Phone mail app" lets Android show its app chooser (Gmail, Outlook and so on).

## Updating the site
After any change to `index.html`, upload it to the repo again (Add file → Upload files → Commit). Your Settings live in the browser, so they are kept.
