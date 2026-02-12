import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Registration from './pages/Register.jsx';
import User from './pages/User.jsx';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [nightMode, setNightMode] = useState(false);

  // Add or remove 'night' class on body
  useEffect(() => {
    if (nightMode) {
      document.body.classList.add('night');
    } else {
      document.body.classList.remove('night');
    }
  }, [nightMode]);

  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <h1>React Registration App</h1>

        {/* Night mode toggle */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <button onClick={() => setNightMode(!nightMode)}>
            {nightMode ? 'Switch to Light Mode' : 'Switch to Night Mode'}
          </button>
        </div>

        {/* Navigation */}
        <nav>
          <Link to="/register">Register</Link>
          <Link to="/users">Users</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/register" element={<Registration users={users} setUsers={setUsers} />} />
          <Route path="/users" element={<User />} />
          <Route path="*" element={<Registration users={users} setUsers={setUsers} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
