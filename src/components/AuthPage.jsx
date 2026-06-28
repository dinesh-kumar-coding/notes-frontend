import { useState } from "react";
import { loginUser, signupUser } from "../api/api.js";

function AuthPage({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    try {
      if (isLogin) {
        const data = await loginUser(email, password);
        onLogin(data.token);
      } else {
        await signupUser(email, password);
        setIsLogin(true);
      }
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="auth-card">
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      {error && <p className="error-msg">{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
      <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          type="button"
          className="btn-text"
          onClick={() => {
            setIsLogin((prev) => !prev);
            setError("");
          }}
        >
          {!isLogin ? "Login" : "Sign Up"}
        </button>
      </p>
    </form>
  );
}

export default AuthPage;