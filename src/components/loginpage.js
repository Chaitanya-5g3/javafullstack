import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      background: '#e0f7fa',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
    box: {
      background: 'white',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      textAlign: 'center',
    },
    button: {
      backgroundColor: '#00b9f5',
      color: 'white',
      padding: '12px 24px',
      border: 'none',
      borderRadius: '5px',
      fontSize: '18px',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#009edc',
    },
  };

  const handleLogin = () => {
    navigate('/mobile'); // route to MobilePage component
  };

  return (
    <div style={styles.body}>
      <div style={styles.box}>
        <h2>Welcome to Paytm</h2>
        <p>Click to continue to login</p>
        <button
          style={styles.button}
          onClick={handleLogin}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
