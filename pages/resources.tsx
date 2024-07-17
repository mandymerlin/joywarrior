// pages/resources.tsx

import React from 'react';

const ResourcesPage: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px', backgroundColor: '#e9f1ff' }}>
   
      <h1 style={{ fontSize: '2em', color: '#0c4393' }}>Training Resources</h1>
      
      {/* Add more content as needed */}
      <div style={{ marginTop: '20px' }}>
        <button style={{ fontSize: '1.2em', backgroundColor: '#0c4393', color: '#e9f1ff', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>
          Visual Training Resources
        </button>
        <button style={{ fontSize: '1.2em', backgroundColor: '#0c4393', color: '#e9f1ff', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer', marginLeft: '10px' }}>
          Text Training Resources
        </button>
        <button style={{ fontSize: '1.2em', backgroundColor: '#0c4393', color: '#e9f1ff', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer', marginLeft: '10px' }}>
          Video Training Resources
        </button>
      </div>
    </div>
  );
};

export default ResourcesPage;
