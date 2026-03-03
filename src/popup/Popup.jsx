import React, { useState, useEffect } from "react";

function Popup() {
  const [sessionName, setSessionName] = useState("");
  const [sessions, setSessions] = useState({});
  const [notes, setNotes] = useState("");

  // Load saved sessions and notes when popup opens
  useEffect(() => {
    chrome.storage.local.get(["sessions", "notes"], (data) => {
      if (data.sessions) setSessions(data.sessions);
      if (data.notes) setNotes(data.notes);
    });
  }, []);

  return (
    <div className="popup-container">
      <h2>Productivity Suite</h2>

      {/* Save Session Section */}
      <div className="section">
        <input
          type="text"
          placeholder="Session Name"
          value={sessionName}
          onChange={(e) => setSessionName(e.target.value)}
        />
        <button data-testid="save-session-btn">
          Save Current Tabs
        </button>
      </div>

      {/* Sessions List */}
      <div className="section">
        <h3>Saved Sessions</h3>
        <div data-testid="sessions-list">
          {Object.keys(sessions).length === 0 && <p>No sessions saved.</p>}
          {Object.keys(sessions).map((name) => (
            <div key={name}>
              <span>{name}</span>
              <button
                data-testid={`restore-session-${name}`}
              >
                Restore
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Notes Section */}
      <div className="section">
        <h3>Notes</h3>
        <textarea
          data-testid="notes-textarea"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows="4"
        />
        <button data-testid="save-notes-btn">
          Save Notes
        </button>
      </div>

      {/* Open Options */}
      <div className="section">
        <button
          data-testid="open-options-btn"
          onClick={() => chrome.runtime.openOptionsPage()}
        >
          Open Settings
        </button>
      </div>
    </div>
  );
}

export default Popup;