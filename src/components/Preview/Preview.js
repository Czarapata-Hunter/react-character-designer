import React from 'react';
import './Preview.css';

export default function Preview({ head, body, legs }) {
  return (
    <div>
      <img src={`/Photos/Head/${head}.png`} />
      <img src={`/Photos/Body/${body}.png`} />
      <img src={`/Photos/Legs/${legs}.png`} />
    </div>
  );
}
