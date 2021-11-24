import React, { useState, useEffect } from 'react';
import './App.css';
import Note from './components/Note';
import './App.css';

export interface Inote {
  id: number;
  value: string;
  y: number;
  x: number;
}

export default function App() {
  const [open, SetOpen] = useState<boolean>(false);
  const [notes, setNotes] = useState<Inote[]>(() => {
    const localNotes = window.localStorage.getItem('localNotes');
    return localNotes !== null ? JSON.parse(localNotes) : [];
  });

  useEffect(() => {
    window.localStorage.setItem('localNotes', JSON.stringify(notes));
  }, [notes]);

  const newNote: Inote = {
    id: Math.random(),
    value: '',
    x: 50,
    y: 50,
  };

  const updateNotes = (note: Inote) => {
    const updatingNotes = [...notes];
    const index = updatingNotes.findIndex((noteA) => {
      return noteA.id === note.id;
    });
    updatingNotes[index] = note;
    setNotes(updatingNotes);
  };

  const deleteNote = (id: number) => {
    const deleteNotes = [...notes];
    const index = deleteNotes.findIndex((note) => {
      return note.id === id;
    });
    deleteNotes.splice(index, 1);
    setNotes(deleteNotes);
  };

  return (
    <>
      <div className='main-container'>
        {open && (
          <div className='button-list'>
            <button onClick={() => {}}>Embedd a link</button>
            <button
              onClick={() => {
                setNotes([...notes, newNote]);
              }}
            >
              Add a note
            </button>
            <button onClick={() => {}}>Surprise me</button>
          </div>
        )}
        <button className='main-btn' onClick={() => SetOpen(!open)}>
          +
        </button>
      </div>
      {notes.map((note: Inote, index: number) => {
        return (
          <Note
            key={index}
            id={note.id}
            value={note.value}
            x={note.x}
            y={note.y}
            updateNotes={updateNotes}
            deleteNote={deleteNote}
          />
        );
      })}
    </>
  );
}
