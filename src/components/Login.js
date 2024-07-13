// Login.js
import React from 'react';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';

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
      <h1>Login</h1>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
}

export default Login;
