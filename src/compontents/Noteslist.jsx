import React, { useState } from 'react';
import { useNoteContext } from './NotesContext';

function Noteslist() {
  const { notes, deleteNote, editNote } = useNoteContext();
  const [editMode, setEditMode] = useState(null);
  const [editedNote, setEditedNote] = useState({ id: '', title: '', content: ' '});

  const handleEditClick = (note) => {
    setEditMode(note.id);
    setEditedNote({
      id: note.id,
      title: note.title,
      content: note.content,
    });
  };

  const handleEditCancel = () => {
    setEditMode(null);
    setEditedNote({ id: '', title: '', content: '' });
  };

  const handleEditSave = (noteId) => {
    editNote({
      id: noteId,
      title: editedNote.title,
      content: editedNote.content,
    });
    setEditMode(null);
    setEditedNote({ id: '', title: '', content: ''});
  };

  const handleTitleChange = (e) => {
    setEditedNote({ ...editedNote, title: e.target.value });
  };

  const handleContentChange = (e) => {
    setEditedNote({ ...editedNote, content: e.target.value });
  };

  return (
    <div className="container">
      <h3 className="mb-3 notes">
        <span>
          <i className="fa-solid fa-file-lines"></i>
        </span>
        Notes
      </h3>
      <p className="mb-3 notes">Recently Viewed</p>     
      <div className="row noteslist">
        {notes.map((note) => (
          <div className="card mx-2 w-50" key={note.id} style={{height:'250px'}}>
            <div className="card-body">
              {editMode === note.id ? (
                <div>
                  <input
                    type="text"
                    className="form-control mb-2"
                    value={editedNote.title}
                    onChange={handleTitleChange}/>
                  <textarea
                    className="form-control mb-2"
                    rows="4"
                    value={editedNote.content}
                    onChange={handleContentChange}>
                  </textarea>
                  <button
                    className="btn btn-success btn-sm mr-2"
                    onClick={() => handleEditSave(note.id)}>
                    Save
                  </button>
                  <button
                    className="btn btn-danger btn-sm mr-2"
                    onClick={handleEditCancel}>
                    Cancel
                  </button>
                </div>
              ) : (
                <div>
                  <h5 className="card-title">
                    {note.title}
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <i
                        className="fa-solid fa-pencil mx-2"
                        onClick={() => handleEditClick(note)}></i>
                      <i
                        className="fa-solid fa-trash"
                        onClick={() => deleteNote(note.id)}></i>
                    </span>
                  </h5>
                  <p className="card-text">{note.content}</p>
                </div>
              )}
              <div className="card-text update">{note.lastUpdate}</div>
            </div>
          </div>
        ))}
      </div>  
    </div>
  );
}

export default Noteslist;
