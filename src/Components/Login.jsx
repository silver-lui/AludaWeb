import React, { useState } from 'react';
import "../Style/Login-Style.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase';


function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // The login function to process login data
    login({ email, password });
  };

  const login = async (credentials) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
        const user = userCredential.user;
    } catch (error) {
        console.error("Error signing in: ", error);
        alert("Invalid email or password");
    }
};

  return (
    <div className="App">
      <h2>Login Page</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}


export default App;
