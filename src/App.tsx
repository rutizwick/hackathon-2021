import React, { useState, useEffect } from 'react';
import './App.css';
import Note from './components/Note';
import './App.css';
import Embedd from './components/Embedd';

export interface Inote {
  id: number;
  value: string;
  y: number;
  x: number;
}

export interface Iembedd {
  id: number;
  value: string;
  y: number;
  x: number;
}

export default function App() {
  const [open, SetOpen] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [notes, setNotes] = useState<Inote[]>(() => {
    const localNotes = window.localStorage.getItem('localNotes');
    return localNotes !== null ? JSON.parse(localNotes) : [];
  });
  const [embedds, setEmbedds] = useState<Iembedd[]>([])
  const [currLink, setCurrLink] = useState<string>('')
  const [show, setShow] = useState<boolean>(true)

  useEffect(() => {
    window.localStorage.setItem('localNotes', JSON.stringify(notes));
  }, [notes]);

  const newNote: Inote = {
    id: Math.random(),
    value: 'Hi! This is your note speaking. feel free to edit this text and move me around. I promise to wait for you right where you left me :)',
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

  const updateEmbedd = (note: Inote) => {
    const updatingNotes = [...embedds];
    const index = updatingNotes.findIndex((noteA) => {
      return noteA.id === note.id;
    });
    updatingNotes[index] = note;
    setEmbedds(updatingNotes);
  };

  const deleteEmbedd = (id: number) => {
    const deleteNotes = [...embedds];
    const index = deleteNotes.findIndex((note) => {
      return note.id === id;
    });
    deleteNotes.splice(index, 1);
    setEmbedds(deleteNotes);
  };

  return (
    <>
      {openModal && (
        <div className="embeddModal">
          <input placeholder="Enter a link you would like to embed" type="text" onChange={(e) => setCurrLink(e.target.value)} />
          <button onClick={() => {
            setOpenModal(!openModal)
            setEmbedds([...embedds, { x: 50, y: 50, id: Math.random(), value: currLink }])}} className="embeddButton">Embed!</button>
        </div>
      )}
      <div className='main-container'>
        {open && (
          <div className='button-list'>
            <button onClick={() => setOpenModal(!openModal)}>Embed a link</button>
            <button
              onClick={() => {
                setNotes([...notes, newNote]);
              }}
            >
              Add a note
            </button>
            <button onClick={() => setShow(!show)}>{`${show ? 'Hide' : 'show'} Notes`}</button>
          </div>
        )}
        <div className="flip">
          <button onClick={() => SetOpen(!open)}>
            <div className="front">Get Noted!</div>
            <div className="back">Get Noted!</div>
          </button>
        </div>
      </div>
      {show &&notes.map((note: Inote, index: number) => {
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
      {embedds.map((embedd: Iembedd, index: number) => {
        return (
          <Embedd
            key={index}
            id={embedd.id}
            value={embedd.value}
            x={embedd.x}
            y={embedd.y}
            updateEmbedd={updateEmbedd}
            deleteEmbedd={deleteEmbedd}
          />
        );
      })}
    </>
  );
}
