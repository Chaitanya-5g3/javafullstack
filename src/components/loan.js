import React, { useState } from 'react';

const LoanEMIPayment = () => {
  const [loanAccount, setLoanAccount] = useState('');
  const [bankName, setBankName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Loan Account: ${loanAccount}\nBank Name: ${bankName}`);
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
        <h2>Pay Loan EMI</h2>
      </div>
      <form onSubmit={handleSubmit} style={styles.formBox}>
        <label>Loan Account No:</label>
        <input
          type="text"
          value={loanAccount}
          onChange={(e) => setLoanAccount(e.target.value)}
          placeholder="Enter Loan Account Number"
          required
          style={styles.input}
        />

        <label>Bank Name:</label>
        <input
          type="text"
          value={bankName}
          onChange={(e) => setBankName(e.target.value)}
          placeholder="Enter Bank Name"
          required
          style={styles.input}
        />

        <button type="submit" style={styles.button}>Proceed to Pay</button>
      </form>
    </div>
  );
};

export default LoanEMIPayment;
