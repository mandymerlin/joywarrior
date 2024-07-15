"use client"
import React, { useState } from 'react';

export default function Home() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === 'volunteer') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  return (
    <div style={{
      position: 'relative',
      height: '80vh',
      backgroundColor: 'white',
      textAlign: 'center'
    }}>
      {!isAuthenticated ? (
        <form onSubmit={handleSubmit} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <input
            type="text"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
            style={{ padding: '10px', marginBottom: '10px', color: 'black' }}
          />
          <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>
            Submit
          </button>
        </form>
      ) : (
        <>
          <img src="images/swanlogo.jpg" alt="SWAN autism logo" style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '80%',
            maxHeight: '80%',
            zIndex: 0
          }} />
          <h1 style={{
            position: 'absolute',
            top: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'black',
            fontWeight: 'bold',
            zIndex: 1
          }}>Hello Swan Training</h1>
          <a
            href="pdf/Volunteerhandbook.pdf"
            target="_blank"
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#007bff',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '5px',
              textDecoration: 'none',
              zIndex: 1
            }}
          >
            Open Handbook
          </a>
        </>
      )}
    </div>
  );
}

