// src/pages/DTHRecharge.js
import React from 'react';

const DTHRecharge = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2 style={{ textAlign: 'center' }}>DTH Recharge</h2>
      <div style={{ background: 'white', padding: '20px', borderRadius: '10px', width: '300px', margin: 'auto' }}>
        <label>DTH Operator:</label>
        <select style={{ width: '100%', padding: '10px' }}>
          <option>-- Select Operator --</option>
          <option>Airtel Digital TV</option>
          <option>Tata Play</option>
          <option>Dish TV</option>
          <option>Sun Direct</option>
        </select>
        
        <label>Subscriber ID:</label>
        <input type="text" placeholder="Enter Subscriber ID" style={{ width: '100%', padding: '10px', marginTop: '10px' }} />
        
        <label>Amount:</label>
        <input type="number" placeholder="Enter Amount" style={{ width: '100%', padding: '10px', marginTop: '10px' }} />

        <button style={{ background: '#00baf2', color: 'white', border: 'none', padding: '10px', marginTop: '10px', width: '100%' }}>
          Recharge Now
        </button>
      </div>
    </div>
  );
};

export default DTHRecharge;
