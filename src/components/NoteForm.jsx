import { useState } from "react";

function NoteForm({ onCreate }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (title.trim() === "") return;
    onCreate(title, content);
    setTitle("");
    setContent("");
  }

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input
        type="text"
        placeholder="Note title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <textarea
        placeholder="Note content"
        value={content}
        onChange={(event) => setContent(event.target.value)}
      ></textarea>

      <button type="submit">Add Note</button>
    </form>
  );
}

export default NoteForm;