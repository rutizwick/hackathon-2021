import React, { useState } from 'react';
import { Iembedd, Inote } from '../App';

interface INoteComponent {
  id: number;
  value: string;
  y: number;
  x: number;
  updateEmbedd: (embedd: Iembedd) => void;
  deleteEmbedd: (id: number) => void;
}

export default function Embedd({
  id,
  value,
  x,
  y,
  updateEmbedd,
  deleteEmbedd
}: INoteComponent) {
  const [xCor, setX] = useState<number>(x);
  const [yCor, setY] = useState<number>(y);

  return (
    <div
      className='iframe-container'
      style={{ position: 'absolute', left: xCor, top: yCor }}
      draggable
        onDragEnd={(e) => {
          console.log(e.pageX, e.pageY);
          setX(e.pageX);
          setY(e.pageY);
          updateEmbedd({ id, value, x: e.pageX, y: e.pageY });
        }}
    >
      <button className='note-close' onClick={() => deleteEmbedd(id)}>
        X
      </button>
      <iframe width='100%' height='100%' src={value} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    </div>
  );
}
