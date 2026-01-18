import React from 'react';
import './Timestamp.css';

function Timestamp() {
  return (
    <section className="timestamp">
      <div className="timestamp-container">
        <h2 className="timestamp-title">AI YouTube Timestamps</h2>
        <p className="timestamp-description">
          Automatically generate precise timestamps for your YouTube videos using AI. Enhance viewer engagement and make your content more navigable with intelligent timestamp detection.
        </p>
        <div className="timestamp-upload-section">
          <div className="timestamp-upload">
            <input 
              type="file" 
              id="video-upload" 
              className="timestamp-file-input" 
              accept="video/*"
            />
            <label htmlFor="video-upload" className="timestamp-file-label">
              Choose Video File
            </label>
          </div>
          <button className="timestamp-generate-btn">Generate</button>
        </div>
      </div>
    </section>
  );
}

export default Timestamp;
