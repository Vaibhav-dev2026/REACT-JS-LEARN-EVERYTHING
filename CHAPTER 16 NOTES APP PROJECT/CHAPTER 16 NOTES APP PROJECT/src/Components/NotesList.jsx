import NoteItem from "./NoteItem"

function NotesList({notes,deleteNote}){

return(

<div>

{
notes.map(note=>(
 <NoteItem key={note.id} note={note} deleteNote={deleteNote}/>
))
}

</div>

)

}

export default NotesList