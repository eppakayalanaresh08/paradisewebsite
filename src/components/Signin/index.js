import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Signup from '../Signup';
import "./index.css"

function Signin({ users, onSignin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignin = () => {
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      onSignin();
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  const onhandlesignup = () =>{
    navigate('/Signup');
  };

  return (
    <div className="signin-container">
      <h2>Sign in</h2>
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
      <button onClick={handleSignin}>Sign in</button>
      <h4 href="#" onClick={onhandlesignup} >Register or Signup</h4>
    </div>
  );
}

export default Signin;
