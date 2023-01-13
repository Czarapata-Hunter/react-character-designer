import React from 'react';
import './Tracker.css';

export default function Tracker({ headCount }) {
  return (
    <div>
      <p className="headtracker">You have changed the head {headCount} times</p>
    </div>
  );
}
