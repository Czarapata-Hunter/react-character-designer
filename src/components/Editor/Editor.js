import React from 'react';
import './Editor.css';
import Tracker from '../Tracker/Tracker.js';
import { useState } from 'react';

export default function Editor({ head, setHead, body, setBody, legs, setLegs }) {
  const [headCount, setHeadCount] = useState(0);
  const [bodyCount, setBodyCount] = useState(0);
  const [legsCount, setLegsCount] = useState(0);

  const headHandler = (e) => {
    setHead(e.target.value);
    setHeadCount((currentState) => {
      return currentState + 1;
    });
  };

  const bodyHandler = (e) => {
    setBody(e.target.value);
    setBodyCount((currentState) => {
      return currentState + 1;
    });
  };

  const legsHandler = (e) => {
    setLegs(e.target.value);
    setLegsCount((currentState) => {
      return currentState + 1;
    });
  };

  return (
    <div>
      <div>
        <h2>Design Your Character</h2>
        <label>Head</label>
        <select name="head" value={head} onChange={headHandler}>
          <option value="dragonbornhead">Dragonborn</option>
          <option value="dwarfhead">Dwarf</option>
          <option value="elfhead">Elf</option>
          <option value="gnomehead">Gnome</option>
          <option value="halfelfhead">Half-Elf</option>
          <option value="halflinghead">Halfling</option>
          <option value="halforchead">Half-Orc</option>
          <option value="humanhead">Human</option>
          <option value="tieflinghead">Tiefling</option>
        </select>
      </div>
      <div>
        <label>Body</label>
        <select name="body" value={body} onChange={bodyHandler}>
          <option value="dragonbornbody">Dragonborn</option>
          <option value="dwarfbody">Dwarf</option>
          <option value="elfbody">Elf</option>
          <option value="gnomebody">Gnome</option>
          <option value="halfelfbody">Half-Elf</option>
          <option value="halflingbody">Halfling</option>
          <option value="halforcbody">Half-Orc</option>
          <option value="humanbody">Human</option>
          <option value="tieflingbody">Tiefling</option>
        </select>
      </div>
      <div>
        <label>Legs</label>
        <select name="legs" value={legs} onChange={legsHandler}>
          <option value="dragonbornlegs">Dragonborn</option>
          <option value="dwarflegs">Dwarf</option>
          <option value="elflegs">Elf</option>
          <option value="gnomelegs">Gnome</option>
          <option value="halfelflegs">Half-Elf</option>
          <option value="halflinglegs">Halfling</option>
          <option value="halforclegs">Half-Orc</option>
          <option value="humanlegs">Human</option>
          <option value="tieflinglegs">Tiefling</option>
        </select>
      </div>
      <div>
        <Tracker headCount={headCount} bodyCount={bodyCount} legsCount={legsCount} />
      </div>
      <div>
        <label>Give Your Best Warcry</label>
        <input name="warcry" type="text" />
      </div>
    </div>
  );
}
