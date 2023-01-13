import React from 'react';
import './Tracker.css';

export default function Tracker({ headCount, bodyCount, legsCount }) {
  return (
    <div>
      <p className="headtracker">You have changed the head {headCount} times</p>
      <p className="bodytracker">You have changed the body {bodyCount} times</p>
      <p className="legstracker">You have changed the body {legsCount} times</p>
    </div>
  );
}
