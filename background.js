// Listen for tab updates
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Only act when page finishes loading
  if (changeInfo.status !== "complete" || !tab.url) return;

  try {
    const url = new URL(tab.url);
    const hostname = url.hostname.replace("www.", "");

    chrome.storage.sync.get(["blockedSites"], (data) => {
      const blockedSites = data.blockedSites || [];

      if (blockedSites.includes(hostname)) {
        // Redirect to internal blocked page
        chrome.tabs.update(tabId, {
          url: chrome.runtime.getURL("blocked.html")
        });
      }
    });
  } catch (err) {
    // Ignore invalid URLs like chrome://
  }
});

// Keyboard shortcut handler
chrome.commands.onCommand.addListener((command) => {
  if (command === "save-session") {

    chrome.tabs.query({ currentWindow: true }, (tabs) => {
      const urls = tabs.map(tab => tab.url);

      const sessionName = "quick-save-" + Date.now();

      chrome.storage.local.get(["sessions"], (data) => {
        const existingSessions = data.sessions || {};

        const updatedSessions = {
          ...existingSessions,
          [sessionName]: urls
        };

        chrome.storage.local.set({ sessions: updatedSessions });
      });
    });

  }
});