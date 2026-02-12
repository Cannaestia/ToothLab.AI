# Google Sheets Setup Guide

Follow these steps to connect your form submissions to Google Sheets.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Demo Requests" or whatever you prefer
4. In the first row, add these column headers:
   - `Timestamp`
   - `Clinic Name`
   - `Contact Name`
   - `Email`
   - `Phone`
   - `Monthly Volume`
   - `QC Tier`
   - `Price List Types`

## Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** > **Apps Script**
2. Delete any existing code
3. Copy and paste this script:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.clinicName || '',
      data.contactName || '',
      data.email || '',
      data.phone || '',
      data.monthlyVolume || '',
      data.qcTier || '',
      data.priceListTypes || ''
    ]);

    return ContentService.createTextOutput(JSON.stringify({
      status: 'success'
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click the **Save** icon (disk icon)
5. Name your project (e.g., "Form to Sheets")

## Step 3: Deploy as Web App

1. Click **Deploy** > **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure settings:
   - **Description**: "Form submission handler" (or any description)
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
5. Click **Deploy**
6. Click **Authorize access**
7. Choose your Google account
8. Click **Advanced** > **Go to [project name] (unsafe)**
9. Click **Allow**
10. Copy the **Web app URL** (it will look like: `https://script.google.com/macros/s/.../exec`)

## Step 4: Add URL to Your Project

1. **Locate the `.env` file**:
   - Open your project folder in your code editor
   - Look for a file named `.env` in the root directory (same level as `package.json`)
   - If you don't see it, make sure hidden files are visible in your editor

2. **Edit the `.env` file**:
   - Open the `.env` file
   - Find the line that starts with `VITE_GOOGLE_SCRIPT_URL=`
   - You should see it looks like this: `VITE_GOOGLE_SCRIPT_URL=`

3. **Add your Web app URL**:
   - Place your cursor right after the `=` sign
   - Paste the full Web app URL you copied from Step 3
   - **Important**: There should be NO SPACE between the `=` and your URL
   - Make sure the entire URL is on one line

4. **Save the file** (Ctrl+S or Cmd+S)

**Before:**
```
VITE_GOOGLE_SCRIPT_URL=
```

**After:**
```
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbx.../exec
```

**Important Notes:**
- The URL must start with `https://script.google.com/macros/s/`
- Make sure there are no extra spaces or line breaks
- The URL should end with `/exec`

## Step 5: Test Your Form

1. Restart your development server if it's running
2. Fill out the form on your website
3. Click "Start free trial"
4. Check your Google Sheet - the data should appear in a new row!

## Troubleshooting

**Form not submitting:**
- Make sure you copied the full Web app URL
- Make sure you set "Who has access" to "Anyone" in deployment settings
- Check browser console for errors

**Data not appearing in sheet:**
- Verify the column headers match exactly
- Check the Apps Script logs: In Apps Script editor, click **Executions** on the left

**Need to update the script:**
- Edit the script in Apps Script editor
- Click **Deploy** > **Manage deployments**
- Click the pencil icon to edit
- Change version to **New version**
- Click **Deploy**

## Important Notes

**If you already have a Google Sheet set up:**
1. Add a new column header "Price List Types" to replace the old "Message" column
2. Update your Apps Script with the new code above
3. Deploy a new version (see "Need to update the script" section)
4. The "Price List Types" field will now show the selected price lists (e.g., "cad-design, lab-finishing" or just "cad-design")
