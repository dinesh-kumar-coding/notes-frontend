const API_URL = import.meta.env.VITE_API_URL;

export async function loginUser(email, password) {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || "Login failed");
  }
  return data;
}

export async function signupUser(email, password) {
  const response = await fetch(`${API_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || "Signup failed");
  }
  return data;
}

export async function getNotes(token) {
  const response = await fetch(`${API_URL}/notes`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || "Failed to fetch notes");
  }
  return data;
}

export async function createNote(token, title, content) {
  const response = await fetch(`${API_URL}/notes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title, content }),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || "Failed to create note");
  }
  return data;
}

export async function updateNote(token, id, title, content) {
  const response = await fetch(`${API_URL}/notes/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title, content }),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || "Failed to update note");
  }
  return data;
}

export async function deleteNote(token, id) {
  const response = await fetch(`${API_URL}/notes/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || "Failed to delete note");
  }
  return data;
}