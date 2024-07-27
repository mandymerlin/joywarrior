'use client';
import React, { useState } from 'react';
import Link from 'next/link';

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
          <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#e9f1ff', color: '#0c4393',  border: '2px solid #0c4393', borderRadius: '5px' }}>
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
            fontSize: '2em', 
            zIndex: 1
          }}>Hello and welcome to Swan Training</h1>
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '20px',
            zIndex: 1
          }}>
            <Link href="pdf/Volunteerhandbook.pdf" target="_blank">
              <span style={{
                display: 'inline-block',
                backgroundColor: '#6990f3',
                color: '#e9f1ff',
                padding: '10px 20px',
                borderRadius: '5px',
                textDecoration: 'none'
              }}>
                Volunteer Handbook
              </span>
            </Link>
            <Link href="/training">
              <span style={{
                display: 'inline-block',
                backgroundColor: '#6990f3',
                color: '#e9f1ff',
                padding: '10px 20px',
                borderRadius: '5px',
                textDecoration: 'none'
              }}>
                Training
              </span>
            </Link>
            <Link href="/contact">
              <span style={{
                display: 'inline-block',
                backgroundColor: '#6990f3',
                color: '#e9f1ff',
                padding: '10px 20px',
                borderRadius: '5px',
                textDecoration: 'none'
              }}>
                Contact
              </span>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}


