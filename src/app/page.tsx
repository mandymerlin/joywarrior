
"use client"

import React, { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';

export default function Home() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
      backgroundColor: '#e9f1ff',
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
          <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#e9f1ff', color: '#0c4393', border: 'none', borderRadius: '5px' }}>
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
            color: '#0c4393',
            fontWeight: 'bold',
            fontSize: '2em', // Adjusted font size to 2em
            zIndex: 1
          }}>Hello and welcome to Swan Training</h1>
          <a
            href="pdf/Volunteerhandbook.pdf"
            target="_blank"
            style={{
              position: 'absolute',
              bottom: '60px', // Adjusted bottom position for handbook button
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#0c4393',
              color: '#e9f1ff',
              padding: '10px 20px',
              borderRadius: '5px',
              textDecoration: 'none',
              zIndex: 1
            }}
          >
            Volunteer Handbook
          </a>
          <Link href="/resources">
            <div style={{
              position: 'absolute',
              bottom: '10px', // Adjusted bottom position for resources button
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#0c4393',
              color: '#e9f1ff',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer', // Added cursor style for better UX
              textDecoration: 'none',
              zIndex: 1
            }}>
              Training Resources
            </div>
          </Link>
        </>
      )}
    </div>
  );
}

