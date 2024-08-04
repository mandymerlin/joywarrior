// src/app/training/page.tsx
import React from 'react';
import Link from 'next/link';
import styles from './TrainingPage.module.css';

const TrainingPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src="/images/JOY.jpg" alt="Joyful Learning" className={styles.image} />
      <div className={styles.buttonsContainer}>
        <Link href="/video" className={styles.button}>
          Video
        </Link>
        <Link href="/text" className={styles.button}>
          Text
        </Link>
        <Link href="/practical" className={styles.button}>
          Practical
        </Link>
      </div>
    </div>
  );
};

export default TrainingPage;
