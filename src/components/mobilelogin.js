
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MobileLogin = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const validateAndGo = () => {
    const cleaned = mobileNumber.replace(/\D/g, '');

    if (cleaned.length !== 10) {
      alert('Please enter a valid 10-digit mobile number.');
    } else {
      navigate('/dashboard'); // Replace with your actual route
    }
  };

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
    input: {
      padding: '10px',
      fontSize: '16px',
      width: '220px',
      marginBottom: '15px',
    },
    button: {
      backgroundColor: '#00b9f5',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.box}>
        <h2>Enter Your Mobile Number</h2>
        <input
          type="text"
          value={mobileNumber}
          onChange={handleChange}
          placeholder="Enter 10-digit Mobile Number"
          style={styles.input}
        />
        <br />
        <button style={styles.button} onClick={validateAndGo}>
          Proceed
        </button>
      </div>
    </div>
  );
};

export default MobileLogin;
