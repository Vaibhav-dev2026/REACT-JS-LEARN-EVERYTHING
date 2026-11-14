import React,{ useState } from 'react'

function NoteForm({addNote}){
    const [title,settitle]=useState("");
    const [content,setContent]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        const newNote={
            id:Date.now(),
            title,
            content
        }
        addNote(newNote);
        settitle("");
        setContent("");
    }


  return (
    <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Note title' value={title} onChange={(e)=>settitle(e.target.value)} />
        <textarea placeholder='Note content' value={content} onChange={(e)=>setContent(e.target.value)} />
        <button type="submit">Add Note</button>
    </form>
  )
}


export default NoteForm
