// 5. Folder Structure (Professional)

// Small project structure:

// src
//  ├── components
//  │    ├── NoteForm.jsx
//  │    ├── NotesList.jsx
//  │    └── NoteItem.jsx
//  │
//  ├── App.jsx
//  ├── main.jsx
//  └── styles.css

// Explanation:

// App.jsx
// Main state management

// NoteForm.jsx
// Handles note creation

// NotesList.jsx
// Displays notes list

// NoteItem.jsx
// Single note component

// 6. Data Structure (Important)

// Each note should look like:

// {
//  id: 1,
//  title: "Learn React",
//  content: "Practice hooks",
// }

// We use unique id to manage notes.

// 7. Step-by-Step Project Logic

// Flow of the application:

// User types note
// ↓
// Clicks add note
// ↓
// React state updates
// ↓
// Notes list updates
// ↓
// UI re-renders


import { useState } from "react";
import NoteForm from "./Components/NoteForm";
import NotesList from "./Components/NotesList";

function App() {

const [notes,setNotes] = useState([]);

const addNote = (note) => {
setNotes([...notes,note]);
};

const deleteNote = (id)=>{
setNotes(notes.filter(note=>note.id!==id));
}

return(
<div>

<h1>Notes App</h1>

<NoteForm addNote={addNote}/>

<NotesList notes={notes} deleteNote={deleteNote}/>

</div>
)

}

export default App