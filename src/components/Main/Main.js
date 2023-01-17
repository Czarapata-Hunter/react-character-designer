import React from 'react';
import { useState } from 'react';
import './Main.css';

import Editor from '../Editor/Editor.js';
import Preview from '../Preview/Preview.js';

export default function Main() {
  const [head, setHead] = useState('dragonbornhead');
  const [body, setBody] = useState('dragonbornbody');
  const [legs, setLegs] = useState('dragonbornlegs');

  return (
    <main className="main">
      <div>
        <Editor
          className="editor"
          head={head}
          setHead={setHead}
          body={body}
          setBody={setBody}
          legs={legs}
          setLegs={setLegs}
        />
      </div>
      <Preview className="tracker" head={head} body={body} legs={legs} />
    </main>
  );
}
