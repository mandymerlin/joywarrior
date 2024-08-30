// src/app/training/page.tsx
import React from 'react';
import Link from 'next/link';
import styles from './TrainingPage.module.css';

const TrainingPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.buttonsContainer}>
        <Link href="/Audible" className={styles.button}>
          Audible
        </Link>
        <Link href="/practical" className={styles.button}>
          Practical
        </Link>
        <Link href="/text" className={styles.button}>
          Text
        </Link>
        <Link href="/Video" className={styles.button}>
          Video
        </Link>
      </div>
    </div>
  );
};

export default TrainingPage;