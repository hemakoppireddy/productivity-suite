import React, { useState, useEffect } from "react";

function Options() {
  const [hostname, setHostname] = useState("");
  const [blockedSites, setBlockedSites] = useState([]);

  // Load blocked sites on page load
  useEffect(() => {
    chrome.storage.sync.get(["blockedSites"], (data) => {
      if (data.blockedSites) {
        setBlockedSites(data.blockedSites);
      }
    });
  }, []);

  // Add new hostname
  const addBlockedSite = () => {
    if (!hostname.trim()) return;

    const updatedSites = [...blockedSites, hostname.trim()];

    chrome.storage.sync.set({ blockedSites: updatedSites }, () => {
      setBlockedSites(updatedSites);
      setHostname("");
    });
  };

  return (
    <div className="options-container">
      <h2>Website Blocker Settings</h2>

      <div className="section">
        <input
          type="text"
          placeholder="Enter hostname (e.g. facebook.com)"
          value={hostname}
          onChange={(e) => setHostname(e.target.value)}
          data-testid="block-hostname-input"
        />

        <button
          data-testid="add-block-btn"
          onClick={addBlockedSite}
        >
          Add to Blocklist
        </button>
      </div>

      <div className="section">
        <h3>Blocked Sites</h3>
        <div data-testid="blocked-sites-list">
          {blockedSites.length === 0 && <p>No blocked sites.</p>}
          {blockedSites.map((site, index) => (
            <div key={index}>{site}</div>
          ))}
        </div>
      </div>

      <div className="section">
        <button data-testid="export-data-btn">
          Export All Data
        </button>
      </div>
    </div>
  );
}

export default Options;