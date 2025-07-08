import React, { useState } from 'react';

const ElectricityBill = () => {
  const [state, setState] = useState('');
  const [operator, setOperator] = useState('');
  const [billType, setBillType] = useState('Electricity Boards');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`State: ${state}\nOperator: ${operator}\nBill Type: ${billType}`);
  };

  // Inline CSS styles
  const styles = {
    container: {
      maxWidth: '400px',
      margin: '40px auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      background: '#f5f7fa',
    },
    fullWidth: {
      display: 'block',
      margin: '10px 0',
      width: '100%',
    },
    button: {
      background: 'green',
      color: 'white',
      padding: '10px',
      border: 'none',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <h2>Pay Electricity Bill</h2>
      <form onSubmit={handleSubmit}>
        <label style={styles.fullWidth}>
          <input
            type="radio"
            name="type"
            value="Electricity Boards"
            checked={billType === 'Electricity Boards'}
            onChange={(e) => setBillType(e.target.value)}
          />
          Electricity Boards
        </label>
        <label style={styles.fullWidth}>
          <input
            type="radio"
            name="type"
            value="Apartments"
            checked={billType === 'Apartments'}
            onChange={(e) => setBillType(e.target.value)}
          />
          Apartments
        </label>

        <input
          type="text"
          placeholder="Enter Your State"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
          style={styles.fullWidth}
        />

        <select
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
          required
          style={styles.fullWidth}
        >
          <option value="" disabled>Select Operator</option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Assam">Assam</option>
          <option value="Bihar">Bihar</option>
          <option value="Chhattisgarh">Chhattisgarh</option>
          <option value="Goa">Goa</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Haryana">Haryana</option>
          <option value="Sikkim">Sikkim</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Telangana">Telangana</option>
          <option value="Tripura">Tripura</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Uttarakhand">Uttarakhand</option>
          <option value="West Bengal">West Bengal</option>
        </select>

        <button type="submit" style={styles.button}>Proceed</button>
      </form>
    </div>
  );
};

export default ElectricityBill;
