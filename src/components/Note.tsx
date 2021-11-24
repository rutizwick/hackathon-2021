import React, { useState } from 'react';

export default function Note() {
  const [noteText, setNoteText] = useState<string>('');
  const [x, setX] = useState<number>();
  const [y, setY] = useState<number>();

  return (
    <textarea
      draggable
      onDragEnd={(e) => {
        console.log(e.pageX, e.pageY);
        setX(e.pageX);
        setY(e.pageY);
      }}
      value={noteText}
      onChange={(e) => {
        setNoteText(e.target.value);
      }}
      style={{ position: 'absolute', left: x, top: y }}
    />
  );
}
