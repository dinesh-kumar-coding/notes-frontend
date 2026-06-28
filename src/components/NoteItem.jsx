import { useState } from "react";

function NoteItem({note, isEditing, onStartEdit, onCancelEdit, onSave, onDelete}){
  const [editTitle, setEditTitle] = useState(note.title);
  const [editContent, setEditContent] = useState(note.content);

  if(isEditing){
    return(
      <li>
        <input type="text"
          value={editTitle}
          onChange={(event)=>setEditTitle(event.target.value)} />

        <textarea value={editContent}
          onChange={(event)=> setEditContent(event.target.value)}></textarea>

        <button onClick={()=> onSave(note._id, editTitle, editContent)}>Save</button>
        <button onClick={()=> onCancelEdit()}>Cancel</button>
      </li>
    )
  }

  return(
    <li>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={()=> onStartEdit(note._id)} className="btn-danger">Edit</button>
      <button onClick={()=> onDelete(note._id)} className="btn-text">Delete</button>
    </li>
  )
}

export default NoteItem;