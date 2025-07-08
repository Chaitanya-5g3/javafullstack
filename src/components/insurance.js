import React, { useState } from 'react';

const InsurancePayment = () => {
  const [policyNumber, setPolicyNumber] = useState('');
  const [insurer, setInsurer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Policy No: ${policyNumber}\nInsurer: ${insurer}`);
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f7fa',
      padding: '20px',
      minHeight: '100vh',
    },
    header: {
      textAlign: 'center',
    },
    formBox: {
      background: 'white',
      padding: '20px',
      borderRadius: '10px',
      width: '300px',
      margin: '20px auto',
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
    },
    button: {
      backgroundColor: '#00baf2',
      color: 'white',
      border: 'none',
      padding: '10px',
      width: '100%',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2>Pay LIC / Insurance Premium</h2>
      </div>
      <form onSubmit={handleSubmit} style={styles.formBox}>
        <label>Policy Number:</label>
        <input
          type="text"
          value={policyNumber}
          onChange={(e) => setPolicyNumber(e.target.value)}
          placeholder="Enter Policy Number"
          required
          style={styles.input}
        />

        <label>Insurer:</label>
        <input
          type="text"
          value={insurer}
          onChange={(e) => setInsurer(e.target.value)}
          placeholder="Enter Insurer Name"
          required
          style={styles.input}
        />

        <button type="submit" style={styles.button}>Pay Now</button>
      </form>
    </div>
  );
};

export default InsurancePayment;
