import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthBody from './authLayout/AuthBody';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<AuthBody />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
