import React from 'react';
import './Tracker.css';

export default function Tracker({ headCount, bodyCount }) {
  return (
    <div>
      <p className="headtracker">You have changed the head {headCount} times</p>
      <p className="bodytracker">You have changed the body {bodyCount} times</p>
    </div>
  );
}
