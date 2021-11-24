import React, { useState } from 'react';
import './App.css';
import Note from './components/Note';

export default function App() {
  const [open, SetOpen] = useState<boolean>(false);
  const [notes, setNotes] = useState<any>([]);

  return (
    <>
      <div>
        <button onClick={() => SetOpen(!open)}>+</button>
        {open && (
          <>
            <button onClick={() => {}}>Embedd a link</button>
            <button
              onClick={() => {
                setNotes([...notes, 1]);
              }}
            >
              Add a note
            </button>
            <button onClick={() => {}}>Surprise me</button>
          </>
        )}
      </div>
      {notes.map((note: any) => {
        return <Note />;
      })}
    </>
  );
}
