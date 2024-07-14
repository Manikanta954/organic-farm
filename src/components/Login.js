// Login.js
import React from 'react';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
// src/components/Login.js
import './Login.css';


function Login() {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
        <center>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login with Google</button></center>
    </div>
  );
}

export default Login;
