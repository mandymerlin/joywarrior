



import React from 'react';
import { AppProps } from 'next/app';
import '../styles/global.css'; 
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div style={{ backgroundColor: '#e9f1ff', minHeight: '100vh' }}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;