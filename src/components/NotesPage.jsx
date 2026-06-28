import { useEffect, useState } from "react";
import NoteForm from "./NoteForm";
import NoteItem from "./NoteItem";
import { getNotes, createNote, updateNote, deleteNote } from "../api/api.js";

function NotesPage({ onLogout, token }) {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState(null);

  async function loadNotes() {
    setLoading(true);
    setError("");
    try {
      const data = await getNotes(token);
      setNotes(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleCreate(title, content) {
    try {
      const newNote = await createNote(token, title, content);
      setNotes((prev) => [...prev, newNote]);
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteNote(token, id);
      setNotes((prev) => prev.filter((note) => note._id !== id));
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleUpdate(id, title, content) {
    try {
      const updated = await updateNote(token, id, title, content);
      setNotes((prev) => prev.map((note) => (note._id === id ? updated : note)));
      setEditingId(null);
    } catch (err) {
      setError(err.message);
    }
  }

  useEffect(() => {
    loadNotes();
  }, [token]);

  if (loading) {
    return <p className="loading-msg">Loading your notes...</p>;
  }

  return (
    <div>
      <header>
        <h1>My Notes</h1>
        <button onClick={onLogout}>Logout</button>
      </header>

      {error && <p className="error-msg">{error}</p>}

      <NoteForm onCreate={handleCreate} />

      {notes?.length === 0 ? (
        <p className="empty-msg">You don't have any notes yet. Create one!</p>
      ) : (
        <ul>
          {notes?.map((note) => (
            <NoteItem
              key={note._id}
              note={note}
              isEditing={editingId === note._id}
              onStartEdit={(id) => setEditingId(id)}
              onCancelEdit={() => setEditingId(null)}
              onSave={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default NotesPage;