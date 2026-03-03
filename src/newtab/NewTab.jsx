import React, { useEffect, useState } from "react";

function NewTab() {
  const [notes, setNotes] = useState("");
  const [sessions, setSessions] = useState({});

  useEffect(() => {
    chrome.storage.local.get(["notes", "sessions"], (data) => {
      if (data.notes) setNotes(data.notes);
      if (data.sessions) setSessions(data.sessions);
    });
  }, []);

  return (
    <div className="newtab-container">
      <h1>Productivity Dashboard</h1>

      {/* Notes Widget */}
      <div className="widget">
        <h3>Your Notes</h3>
        <div data-testid="widget-notes">
          {notes || "No notes saved."}
        </div>
      </div>

      {/* Sessions Widget */}
      <div className="widget">
        <h3>Saved Sessions</h3>
        <div data-testid="widget-sessions">
          {Object.keys(sessions).length === 0 && <p>No sessions saved.</p>}
          {Object.keys(sessions).map((name) => (
            <div key={name}>{name}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewTab;