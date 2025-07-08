import React from 'react';
import { Link } from 'react-router-dom';

const AllProducts = () => {
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
    },
    grid: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      justifyContent: 'center',
      padding: '20px',
    },
    card: {
      background: '#f0f0f0',
      padding: '20px',
      borderRadius: '8px',
      width: '180px',
      textAlign: 'center',
    },
    link: {
      textDecoration: 'none',
      color: 'black',
      fontWeight: 'bold',
    }
  };

  return (
    <div style={styles.container}>
      <h2>All Products</h2>
      <div style={styles.grid}>
        <div style={styles.card}>
          <Link to="/recharge" style={styles.link}>Mobile Recharge</Link>
        </div>
        <div style={styles.card}>
          <Link to="/electricity" style={styles.link}>Electricity Bill</Link>
        </div>
        <div style={styles.card}>
          <Link to="/dth" style={styles.link}>DTH Recharge</Link>
        </div>
        <div style={styles.card}>
          <Link to="/fastag" style={styles.link}>FASTag</Link>
        </div>
        <div style={styles.card}>
          <Link to="/insurance" style={styles.link}>LIC / Insurance</Link>
        </div>
        <div style={styles.card}>
          <Link to="/loan" style={styles.link}>Loan EMI</Link>
        </div>
        <div style={styles.card}>
          <Link to="/metro" style={styles.link}>Metro Card Recharge</Link>
        </div>
        <div style={styles.card}>
          <Link to="/cylinder" style={styles.link}>Book Cylinder</Link>
        </div>
        <div style={styles.card}>
          <Link to="/bus" style={styles.link}>Bus Tickets</Link>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
