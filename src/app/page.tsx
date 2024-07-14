export default function Home() {
  return (
    <div style={{
      position: 'relative',
      height: '80vh',
      backgroundColor: 'white',
      border: '1px solid red',
      textAlign: 'center'
    }}>
      <img src="images/swanlogo.jpg" alt="SWAN autism logo" style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '80%', // Adjust the maximum width as needed
        maxHeight: '80%', // Adjust the maximum height as needed
        zIndex: 0
      }} />
      <h1 style={{
        position: 'absolute',
        top: '10%', // Adjust the top position of the text
        left: '50%',
        transform: 'translateX(-50%)',
        color: 'black',
        fontWeight: 'bold', //
        zIndex: 1
      }}>Hello Swan Training</h1>
      <a
        href="pdf/Volunteerhandbook.pdf" // Replace with the path to your PDF handbook
        target="_blank" // Open link in a new tab
        style={{
          position: 'absolute',
          bottom: '20px', // Adjust the bottom position of the link
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#007bff',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          textDecoration: 'none',
          zIndex: 1
        }}
      >
        Open Handbook
      </a>
    </div>
  );
}
