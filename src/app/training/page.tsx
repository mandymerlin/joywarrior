// src/app/training/page.tsx
import React from 'react';
import styles from './TrainingPage.module.css';

const TrainingPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src="/images/JOY.jpg" alt="Joyful Learning" className={styles.image} />
    </div>
  );
};

export default TrainingPage;
