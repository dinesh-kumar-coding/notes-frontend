import "./App.css";
import { useState } from "react";
import NotesPage from "./components/NotesPage";
import AuthPage from "./components/AuthPage";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  function handleLogin(newToken) {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  }

  function handleLogout() {
    localStorage.removeItem("token");
    setToken(null);
  }

  return (
    <div>
      {token ? (
        <NotesPage token={token} onLogout={handleLogout} />
      ) : (
        <AuthPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
