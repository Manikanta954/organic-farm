import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Login from './components/Login';
import Navbar from './components/NavBar';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        {/* <Route path="/products" element={user ? <Products /> : <Navigate to="/login" />} /> */}
        <Route path="/cart" element={user ? <Cart /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
