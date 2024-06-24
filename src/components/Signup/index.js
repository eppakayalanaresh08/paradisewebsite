import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./index.css"

function Signup({ onSignup }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    if (username && password) {
      onSignup({ username, password });
      navigate('/signin');
    }
  };

  const handleSignins = () =>{
    navigate('/signin');
  }

  return (
    <div className="signup-container">
      <h2>Sign up</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Sign up</button>
      <button onClick={handleSignins}>Sign in</button>
    </div>
  );
}

export default Signup;
