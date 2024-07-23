// src/app/training/page.tsx
import React from 'react';
import styles from './TrainingPage.module.css';

const TrainingPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Training</h1>
      <p>Please choose how you learn best: Visual, text or video</p>
    </div>
  );
};

export default TrainingPage;
