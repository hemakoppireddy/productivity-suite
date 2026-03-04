# Productivity Suite - Chrome Extension (Manifest V3)

## Overview

Productivity Suite is a multi-feature Chrome Extension built using React and Manifest V3.  
It enhances user productivity by providing tab session management, persistent notes, website blocking, data export, keyboard shortcuts, and a custom new tab dashboard.

This project demonstrates modern Chrome Extension development practices using Manifest V3 and Chrome APIs.

---

## Features

### 1. Tab Session Management
- Save all tabs in the current window as a named session
- Restore saved sessions in a new browser window
- Quick-save session using keyboard shortcut

### 2. Persistent Notes
- Markdown-enabled text notes
- Notes persist across popup reloads
- Notes stored using chrome.storage.local

### 3. Website Blocker
- Add hostnames to blocklist via Options page
- Blocked sites automatically redirect to a local blocked page
- Blocklist synced across devices using chrome.storage.sync

### 4. Custom New Tab Dashboard
- Overrides Chrome's default new tab page
- Displays saved notes
- Displays saved tab sessions

### 5. Data Export
- Export all stored data as a JSON file
- File name: productivity_suite_export.json
- Includes sessions, notes, and blockedSites

### 6. Keyboard Shortcuts
- Ctrl + Shift + P → Open popup
- Ctrl + Shift + S → Quick save current session

### 7. Context Menu Integration
- Right-click option: "Add page to notes"
- Appends page title and URL to stored notes

---

## Tech Stack

- React
- Webpack
- Babel
- Chrome Extension Manifest V3
- Chrome APIs:
  - tabs
  - storage (local + sync)
  - scripting
  - contextMenus
  - commands
  - windows

---

## Project Structure

```

manifest.json
background.js
popup.html
options.html
newtab.html
blocked.html

src/
popup/
options/
newtab/

dist/

package.json
webpack.config.js
README.md
.env.example

```

---

## Installation (Development Mode)

1. Clone the repository.

2. Install dependencies:

```

npm install

```

3. Build the extension:

```

npm run build

```

4. Open Chrome and navigate to:

```

chrome://extensions

```

5. Enable "Developer Mode".

6. Click "Load unpacked".

7. Select the `dist/` folder.

The extension is now ready for testing.

---

## Storage Details

- Sessions → chrome.storage.local
- Notes → chrome.storage.local
- Blocked sites → chrome.storage.sync

---

## Manifest Version

This extension uses:

```

manifest_version: 3

```

It implements a service worker for background logic in compliance with modern Chrome Extension standards.

---

## Export Data Schema

The exported JSON file contains:

```

{
"sessions": { "type": "object" },
"notes": { "type": "string" },
"blockedSites": { "type": "array" }
}

```

---

## Build Commands

Development (watch mode):

```

npm run dev

```

Production build:

```

npm run build

```

---

## Notes

- Do not include node_modules in version control.
- The dist folder contains the bundled extension ready to load in Chrome.
- No environment variables are required for this project.

---