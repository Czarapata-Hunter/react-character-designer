import React from 'react';
import './Main.css';

import Editor from '../Editor/Editor.js';

export default function Main() {
  return (
    <main className="background">
      <Editor className="editor" />
    </main>
  );
}
