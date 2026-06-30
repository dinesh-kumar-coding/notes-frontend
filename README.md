<div align="center">

# ✍️ Notes App

### A full-stack notes app with user accounts and private, persistent notes

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

**[Live App](https://notes-frontend-din-dev.vercel.app/) · [Backend Repo](https://github.com/dinesh-kumar-coding/notes-backend)**

</div>

---

## 🌟 What makes this different

This is a **real, multi-user app** — not a local to-do list. You sign up, log in, and your notes are *yours*: stored in a cloud database, private to your account, and waiting for you when you come back.

```
🔑 Sign up & log in        →  your own account
👤 Private notes            →  only you see your notes
💾 Saved to the cloud       →  survives refreshes & devices
✏️ Full editing             →  create, edit, and delete inline
🚪 Stay logged in           →  token persists across refreshes
```

---

## ✨ Features

- **User accounts** — sign up and log in with a clean, toggleable auth form
- **Private notes** — each user sees only their own notes
- **Full CRUD** — create, read, update (inline editing!), and delete notes
- **Persistent sessions** — stays logged in across refreshes via stored token
- **Live sync** — every change saves to the backend and cloud database
- **Clean component structure** — organized into components and an API layer
- **Warm, cozy UI** — a notebook-inspired design that fits the app

---

## 🗺️ How it works

```
┌─────────────┐      ┌──────────────────┐      ┌─────────────┐
│  This App   │─────▶│   Notes API      │─────▶│  MongoDB    │
│  (React)    │◀─────│ (Express + JWT)  │◀─────│  (Atlas)    │
└─────────────┘      └──────────────────┘      └─────────────┘
  stores token,        verifies token,           stores notes
  sends it with        returns only               per user
  each request         your notes
```

When you log in, the app receives a token and stores it. Every request to load or change notes sends that token, so the backend knows who you are and returns only *your* data.

**Project structure:**
```
src/
├── App.jsx                # auth state + routing between pages
├── api/
│   └── api.js             # all server calls live here (the API layer)
└── components/
    ├── AuthPage.jsx       # login / signup form
    ├── NotesPage.jsx      # the main notes view
    ├── NoteForm.jsx       # create-a-note form
    └── NoteItem.jsx       # a single note (view + edit modes)
```

---

## 🛠️ Tech Stack

| Layer | Tech |
|-------|------|
| UI | React (hooks + functional components) |
| Build | Vite |
| Data fetching | Fetch API (centralized in an API layer) |
| Backend | [Express + MongoDB + JWT](https://github.com/dinesh-kumar-coding/notes-backend) |
| Hosting | Vercel |

---

## 🧠 What I learned building this

- **Frontend authentication** — handling login, storing a token, and gating the UI on whether the user is logged in
- **Token persistence** — keeping users logged in across refreshes with browser storage
- **Authenticated requests** — attaching the token to every protected API call
- **Inline editing** — switching a single item between view and edit modes with its own local state
- **State placement** — deciding when state belongs in a parent vs. a child component
- **The API layer pattern** — centralizing all server communication in one file so components stay focused on UI and state
- **Connecting a frontend to a custom backend** — the full round trip from a click to the database and back
- **Full-stack deployment** — frontend and backend deployed separately, talking to a shared cloud database

---

## 🚀 Running locally

```bash
npm install
```

Create a `.env` file in the root:
```env
VITE_API_URL=http://localhost:3000
```
(Point this at your local backend, or your deployed backend URL.)

```bash
npm run dev
```

> ⚙️ Requires the [backend](https://github.com/dinesh-kumar-coding/notes-backend) running (locally or deployed) for accounts and notes to work.

---

<div align="center">

**Built as part of my journey into full-stack development** 🌱

[Live App](https://notes-frontend-din-dev.vercel.app/) · [Backend Repo](https://github.com/dinesh-kumar-coding/notes-backend)

</div>
