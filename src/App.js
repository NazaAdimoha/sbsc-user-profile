import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Content from './pages/Content';
import ProtectedRoute from './components/common/ProtectedRoute';

import Home from './pages/Home';
import Geolocation from './pages/menus/Geolocation';
import UserAccount from './pages/UserAccount';
import AllUsers from './pages/allUsers/AllUsers';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/content' element={<ProtectedRoute children={<Content />} />} />
        <Route path="/geolocation" element={<ProtectedRoute children={<Geolocation />} />} />
        <Route path="/useraccount" element={<ProtectedRoute children={<UserAccount />} />} />
        <Route path="/allusers" element={<ProtectedRoute children={<AllUsers />} />} />
        
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
