import "./App.css";
import Editor from "./components/Editor/Editor";
import Sidebar from "./components/Sidebar/Sidebar";
import Split from "react-split";
import "react-mde/lib/styles/css/react-mde-all.css";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
// import {data} from "./assets/data/noteData"

function App() {
  /*
  /* Challenge: 4 Features.
  /* 1. Sync notes with localStorage (save them into localStorage and read them from.)
  /* 2. Add note summary titles 
  /* 3. Move modified notes to the top of the list
  /* 4. Delete note by id 
  */

  const currentNotes = JSON.parse(localStorage.getItem("notes"));
  const [notes, setNotes] = useState(currentNotes ? currentNotes : []);
  console.log("currentNotes", currentNotes);

  //  1. Sync notes with localStorage (save them into localStorage and read them from.)
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const [currentNoteId, setCurrentNoteId] = useState(
    (notes[0] && notes[0].id) || ""
  );

  const createNewNote = () => {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here...",
    };
    setNotes((prev) => [newNote, ...prev]);
    setCurrentNoteId(newNote.id);
  };

  const findCurrentNote = () => {
    return (
      notes.find((note) => {
        return note.id === currentNoteId;
      }) || notes[0]
    );
  };

  const updateNote = (text) => {
    //   // 3. Move modified notes to the top of the list
    setNotes((oldNotes) => {
      const currentNote = oldNotes.find((note) => note.id === currentNoteId);
      const filteredNotes = oldNotes.filter(
        (note) => note.id !== currentNoteId
      );
      return [currentNote, ...filteredNotes].map((note) => {
        return note.id === currentNoteId ? { ...note, body: text } : note;
      });
    });

    // setNotes(
    //   (oldNotes) =>
    //     oldNotes.map((oldNote, index) => {
    //       if (oldNote.id === currentNoteId) {
    //         currentNoteIndex = index;
    //       }
    //       console.log("currentNoteIndex", currentNoteIndex);
    //       return oldNote.id === currentNoteId
    //         ? { ...oldNote, body: text }
    //         : oldNote;
    //     })
    // );
  };

  return (
    <main>
      {notes.length > 0 ? (
        <Split sizes={[20, 80]} direction="horizontal" className="split">
          <Sidebar
            notes={notes}
            currentNote={findCurrentNote()}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
            setNotes={setNotes}
            // deleteNote={}
          />
          {currentNoteId && notes.length > 0 && (
            <Editor currentNote={findCurrentNote()} updateNote={updateNote} />
          )}
        </Split>
      ) : (
        <div className="empty-notes">
          <h1>You have no notes</h1>
          <button onClick={createNewNote}>Create a new one</button>
        </div>
      )}
    </main>
  );
}

export default App;
