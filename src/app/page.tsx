'use client';

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div
      style={{
        position: 'relative',
        height: '80vh',
        backgroundColor: '#ffffff', // white background
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          color: '#a7c7e7', // Pastel blue text color
          fontWeight: 'bold',
          fontSize: '2em',
          zIndex: 1,
        }}
      >
        Welcome to Joy Warrior
      </h1>

      {/* Centered Image */}
      <img
        src="/images/joydesign.jpg"
        alt="Centered Design"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: '90%',  // Increase maxWidth to 90%
          maxHeight: '70%', // Increase maxHeight to 70%
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '20px',
          zIndex: 1,
        }}
      >
        <Link href="/blog">
          <span
            style={{
              display: 'inline-block',
              backgroundColor: '#b3d9ff', // Pastel blue background for buttons
              color: '#ff7f7f', // Nicer pink text color for buttons
              padding: '10px 20px',
              borderRadius: '5px',
              textDecoration: 'none',
              border: '2px solid #ff7f7f', // Nicer pink border
            }}
          >
            Blog
          </span>
        </Link>
        <Link href="/recommendations">
          <span
            style={{
              display: 'inline-block',
              backgroundColor: '#b3d9ff', // Pastel blue background for buttons
              color: '#ff7f7f', // Nicer pink text color for buttons
              padding: '10px 20px',
              borderRadius: '5px',
              textDecoration: 'none',
              border: '2px solid #ff7f7f', // Nicer pink border
            }}
          >
            Recommendations
          </span>
        </Link>
        <Link href="/contact">
          <span
            style={{
              display: 'inline-block',
              backgroundColor: '#b3d9ff', // Pastel blue background for buttons
              color: '#ff7f7f', // Nicer pink text color for buttons
              padding: '10px 20px',
              borderRadius: '5px',
              textDecoration: 'none',
              border: '2px solid #ff7f7f', // Nicer pink border
            }}
          >
            Contact
          </span>
        </Link>
      </div>
    </div>
  );
}
