import React, { useState } from 'react';

const FastagRecharge = () => {
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Vehicle Number: ${vehicleNumber}\nAmount: ₹${amount}`);
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f7fa',
      padding: '20px',
      minHeight: '100vh',
    },
    formBox: {
      background: 'white',
      padding: '20px',
      borderRadius: '10px',
      width: '300px',
      margin: '0 auto',
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
      width: '100%',
      padding: '10px',
      cursor: 'pointer',
    },
    heading: {
      textAlign: 'center',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>FASTag Recharge</h2>
      <form onSubmit={handleSubmit} style={styles.formBox}>
        <label>Vehicle Number:</label>
        <input
          type="text"
          value={vehicleNumber}
          onChange={(e) => setVehicleNumber(e.target.value)}
          placeholder="Enter vehicle number"
          required
          style={styles.input}
        />

        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          required
          style={styles.input}
        />

        <button type="submit" style={styles.button}>Recharge</button>
      </form>
    </div>
  );
};

export default FastagRecharge;
