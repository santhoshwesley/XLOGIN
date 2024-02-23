import React, { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "user" && password === "password") {
      setMessage("Welcome, " + username + "!");
    } else {
      setMessage("Invalid username or password");
    }
  };

  return (
    <div className="App">
      <h1>Login Page</h1>
      {message ? (
        <div className="message">{message}</div>
      ) : (
        <>
          {" "}
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username :</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password :</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>{" "}
        </>
      )}
    </div>
  );
}

export default App;
