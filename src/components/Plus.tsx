import React, { useState } from 'react';

export default function Plus() {
  const [open, SetOpen] = useState<boolean>(false);
  return (
    <div>
      <button onClick={() => SetOpen(!open)}>+</button>
      {open && (
        <>
          <button onClick={() => {}}>Embedd a link</button>
          <button onClick={() => {}}>Add a note</button>
          <button onClick={() => {}}>Surprise me</button>
        </>
      )}
    </div>
  );
}
