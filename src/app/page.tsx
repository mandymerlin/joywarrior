'use client';

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div
      style={{
        position: 'relative',
        height: '80vh',
        backgroundColor: '#ffe4e6', // Pastel pink background
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
        src="/images/Untitled design-2.jpg"
        alt="Centered Design"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: '80%',
          maxHeight: '60%',
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
        <Link href="pdf/Volunteerhandbook.pdf" target="_blank">
          <span
            style={{
              display: 'inline-block',
              backgroundColor: '#a7c7e7', // Pastel blue background for buttons
              color: '#ffe4e6', // Pastel pink text color for buttons
              padding: '10px 20px',
              borderRadius: '5px',
              textDecoration: 'none',
              border: '2px solid #ffe4e6', // Pastel pink border
            }}
          >
            Volunteer Handbook
          </span>
        </Link>
        <Link href="/training">
          <span
            style={{
              display: 'inline-block',
              backgroundColor: '#a7c7e7', // Pastel blue background for buttons
              color: '#ffe4e6', // Pastel pink text color for buttons
              padding: '10px 20px',
              borderRadius: '5px',
              textDecoration: 'none',
              border: '2px solid #ffe4e6', // Pastel pink border
            }}
          >
            Training
          </span>
        </Link>
        <Link href="/contact">
          <span
            style={{
              display: 'inline-block',
              backgroundColor: '#a7c7e7', // Pastel blue background for buttons
              color: '#ffe4e6', // Pastel pink text color for buttons
              padding: '10px 20px',
              borderRadius: '5px',
              textDecoration: 'none',
              border: '2px solid #ffe4e6', // Pastel pink border
            }}
          >
            Contact
          </span>
        </Link>
      </div>
    </div>
  );
}
