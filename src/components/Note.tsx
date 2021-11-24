import React, { useState } from 'react';

export default function Note() {
  const [noteText, setNoteText] = useState<string>('');
  const [x, setX] = useState();
  const [y, setY] = useState();

  return (
    <textarea
      draggable
      onDragEnd={(e) => {
        console.log(e.pageX, e.pageY);
      }}
      value={noteText}
      onChange={(e) => setNoteText(e.target.value)}
      style={{ position: 'absolute', left: x, top: y }}
    />
  );
}
