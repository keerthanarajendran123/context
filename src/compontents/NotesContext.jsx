import React, { createContext, useState, useContext } from "react";

const NoteContext = createContext();

export function useNoteContext() {
  return useContext(NoteContext);
}

export function NoteProvider({ children }) {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Feedbacks",
      content: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur",
      lastUpdate: "5 days ago",
    },
    {
      id: 2,
      title: "Weekly Task",
      content: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur",
      lastUpdate: "2 weeks ago",
    },
    {
      id: 3,
      title: "Lyrics",
      content: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur",
      lastUpdate: "3 weeks ago",
    },
    {
      id: 4,
      title: "Full stack",
      content: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur",
      lastUpdate: "3 weeks ago",
    },
    {
      id: 5,
      title: "React",
      content: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur",
      lastUpdate: "5 weeks ago",
    },
  ]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (noteId) => {
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    setNotes(updatedNotes);
  };

  const editNote = (editedNote) => {
    const updatedNotes = notes.map((note) =>
      note.id === editedNote.id ? editedNote : note
    );
    setNotes(updatedNotes);
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {children}
    </NoteContext.Provider>
  );
}
