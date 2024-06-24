import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignin = (e) => {
    e.preventDefault();
    //  I'll assume the user is authenticated and redirect to the home page
    navigate('/');
  };

  return (
    <div className="auth-container">
      <h2>Signin</h2>
      <form onSubmit={handleSignin}>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Signin</button>
      </form>
    </div>
  );
};

export default Signin;
