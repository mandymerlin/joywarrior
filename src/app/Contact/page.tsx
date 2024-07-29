// src/app/contact/page.tsx
import React from 'react';
import styles from './ContactPage.module.css';

const ContactPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src="/images/contact.jpg" alt="contacts" className={styles.image} />
    </div>
  );
};

export default ContactPage;
