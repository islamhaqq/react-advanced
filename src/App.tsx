import React, { useContext, useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { UserContext, UserProvider } from './UserContext';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ProfilePage from './ProfilePage';

function App() {
  return (
      <UserProvider>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/profile">Profile</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </UserProvider>
  );
}

export default App;
