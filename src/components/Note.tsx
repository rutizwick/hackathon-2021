import React, { useState } from 'react';

export default function Note() {
  const [noteText, setNoteText] = useState<string>('');
  return (
    <textarea
      draggable
      value={noteText}
      onChange={(e) => setNoteText(e.target.value)}
    />
  );
}
