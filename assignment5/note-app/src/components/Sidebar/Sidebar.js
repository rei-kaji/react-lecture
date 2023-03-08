import React from "react";
import "./Sidebar.css";

const Sidebar = (props) => {
  // console.log(props);

  //  4. Delete note by id
  const handleDelete = (id) => {
    props.setNotes((oldNotes) => {
      console.log(oldNotes);
      return oldNotes.filter((note) => note.id !== id);
    });
  };

  const noteElements = props.notes.map((note, index) => (
    <div key={index} className="note--elements">
      <div
        className={`note ${
          note.id === props.currentNote.id ? "selected-note" : ""
        }`}
        onClick={() => props.setCurrentNoteId(note.id)}
      >
        {/* 2. Add note summary titles  */}
        <h4 className="note--text">{note.body}</h4>
        <button
          onClick={() => {
            handleDelete(note.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  ));

  return (
    <section className="pane sidebar">
      <div className="sidebar--header">
        <h3 className="sidebar--header--title">Note</h3>
        <button className="sidebar--header--btn" onClick={props.newNote}>
          +
        </button>
      </div>
      {noteElements}
    </section>
  );
};

export default Sidebar;
