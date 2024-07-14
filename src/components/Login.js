import React, { useState, useEffect } from 'react';
import { auth, provider } from '../firebase';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import './Login.css';

function Login() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      console.log(result.user);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {user ? (
          <div className="user-info">
            <img src={user.photoURL} alt="Profile" className="profile-pic" />
            <h2>{user.displayName}</h2>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <h1>Login</h1>
            <button onClick={handleLogin}>
              <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google icon" />
              Login with Google
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
