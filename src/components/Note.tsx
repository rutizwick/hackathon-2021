import React, { useState } from 'react';
import { Inote } from '../App';

interface INoteComponent {
  id: number;
  value: string;
  y: number;
  x: number;
  updateNotes: (note: Inote) => void;
  deleteNote: (id: number) => void;
}

export default function Note({
  id,
  value,
  x,
  y,
  updateNotes,
  deleteNote,
}: INoteComponent) {
  const [noteText, setNoteText] = useState<string>(value);
  const [xCor, setX] = useState<number>(x);
  const [yCor, setY] = useState<number>(y);

  return (
    <div
      className='note-container'
      style={{ position: 'absolute', left: xCor, top: yCor }}
    >
      <button className='note-close' onClick={() => deleteNote(id)}>
        X
      </button>
      <textarea
        rows={8}
        className='note'
        draggable
        onDragEnd={(e) => {
          console.log(e.pageX, e.pageY);
          setX(e.pageX);
          setY(e.pageY);
          updateNotes({ id, value: noteText, x: e.pageX, y: e.pageY });
        }}
        value={noteText}
        onChange={(e) => {
          setNoteText(e.target.value);
          updateNotes({ id, value: e.target.value, x: xCor, y: yCor });
        }}
      />
      <button className="note-remind-me">Remind me about this note!</button>
    </div>
  );
}
