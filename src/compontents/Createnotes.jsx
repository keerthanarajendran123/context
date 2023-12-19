import React, { useState } from "react";
import { useNoteContext } from "./NotesContext";

function Createnotes() {
  const { addNote } = useNoteContext();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleAddNote = (e) => {
    e.preventDefault();
    if (title.trim() !== "" && content.trim() !== "") {
      addNote({
        id: Date.now(), 
        title,
        content,
        lastUpdate: "Just now",
      });
      setTitle("");
      setContent("");
    } else {
      alert("Please enter both title and content for the note.");
    }
  };

  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Add a note</h2>
              <form onSubmit={handleAddNote}>
                <div className="form-group">
                  <label htmlFor="noteTitle"></label>
                  <input
                    type="text"
                    className="form-control"
                    id="noteTitle"
                    placeholder="Title"
                    value={title}
                    onChange={handleTitleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="noteContent"></label>
                  <textarea
                    className="form-control"
                    id="noteContent"
                    rows="4"
                    placeholder="Take a note..."
                    value={content}
                    onChange={handleContentChange}
                  ></textarea>
                  <button type="submit" className="btn btn-primary">Add notes</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Createnotes;
