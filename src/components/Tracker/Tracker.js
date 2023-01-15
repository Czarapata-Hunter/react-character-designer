import React from 'react';
import './Tracker.css';

export default function Tracker({ headCount, bodyCount, legsCount }) {
  return (
    <div>
      <p className="headtracker">You have changed the head x{headCount} </p>
      <p className="bodytracker">You have changed the body x{bodyCount}</p>
      <p className="legstracker">You have changed the body x{legsCount}</p>
    </div>
  );
}
