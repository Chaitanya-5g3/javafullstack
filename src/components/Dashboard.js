// src/pages/Dashboard.js
import React, { useState } from 'react';
 // Create this file next

const Dashboard = () => {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const mobile = e.target.mobile.value;
    const otp = e.target.otp.value;

    if (mobile.length === 10 && otp) {
      alert("Login successful! Redirecting...");
      // You can redirect using React Router if needed
    } else {
      alert("Please enter valid mobile number and OTP.");
    }
  };

  return (
    <>
      <div className="navbar">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnLdvgkpAXltE6tSixsAEofMuPyhxliD6ihQ&s" alt="Paytm Logo" className="logo" />
        <ul className="nav-links">
          <li className="dropdown">Ticket Booking
            <ul className="dropdown-menu">
              <li>Movie Tickets</li>
              <li>Train Tickets</li>
              <li>Flight Tickets</li>
              <li>Bus Tickets</li>
            </ul>
          </li>
          <li className="dropdown">Recharge & Bills
            <ul className="dropdown-menu">
              <li><a href="/mobile_recharge">Mobile Recharge</a></li>
              <li><a href="/electricity">Electricity Bill</a></li>
              <li><a href="/dth">DTH Recharge</a></li>
              <li>Municipal Bill</li>
              <li>Water Bill</li>
              <li>Gas & Cylinder</li>
              <li><a href="/loan">Loan EMI</a></li>
              <li><a href="/insurance">Insurance Premium</a></li>
              <li>Challan</li>
            </ul>
          </li>
          <li className="dropdown">Payments & Services
            <ul className="dropdown-menu">
              <li>Credit cards</li>
              <li>Personal Loan</li>
              <li>Credit reports</li>
              <li>Online payments</li>
              <li>Paytm gold</li>
            </ul>
          </li>
          <li className="dropdown">Paytm for Business
            <ul className="dropdown-menu">
              <li>Online Payments</li>
              <li>Offline Payments</li>
              <li>Business software</li>
              <li>Business Lending</li>
              <li>Insurance</li>
            </ul>
          </li>
          <li className="dropdown">Company
            <ul className="dropdown-menu">
              <li>About</li>
              <li>Blog</li>
              <li>Latest News</li>
              <li>Contact Us</li>
              <li>Customer Care</li>
              <li>Careers</li>
            </ul>
          </li>
        </ul>
        <button className="sign-in" onClick={openPopup}>Sign In</button>
      </div>

      {showPopup && (
        <div className="popup" onClick={(e) => { if (e.target.className === 'popup') closePopup(); }}>
          <div className="popup-content">
            <span className="close-btn" onClick={closePopup}>&times;</span>
            <h2>Sign In</h2>
            <form onSubmit={handleLogin}>
              <label htmlFor="mobile">Mobile Number:</label>
              <input type="text" id="mobile" name="mobile" placeholder="Enter your mobile number" required />

              <label htmlFor="otp">OTP:</label>
              <input type="text" id="otp" name="otp" placeholder="Enter OTP" required />

              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      )}

      <div className="banner">
        <h2>Fly into summer with Flat 15% Off</h2>
      </div>

      <div className="container">
        <div className="section">
          <h3>Recharges</h3>
          <div className="cards">
            <div className="card"><a href="/mobile_recharge">Mobile Recharge</a></div>
            <div className="card"><a href="/fastag">FASTag Recharge</a></div>
            <div className="card"><a href="/dth">DTH Recharge</a></div>
          </div>
        </div>

        <div className="section">
          <h3>Bill Payments</h3>
          <div className="cards">
            <div className="card"><a href="/electricity">Electricity Bill</a></div>
            <div className="card"><a href="/insurance">LIC / Insurance</a></div>
            <div className="card"><a href="/loan">Loan EMI</a></div>
            <div className="card"><a href="/products">View All Products</a></div>
          </div>
        </div>
      </div>

      <div className="promo">
        <p>Do <strong>Mobile Recharge</strong> and Win ₹100 cashback. Promo: TAKEITALL</p>
        <button>Recharge Now →</button>
      </div>

      <div className="upi-section">
        <h3>Pay anyone directly from your bank account.</h3>
        <p>Make contactless & secure payments in-stores or online using Paytm UPI or Directly from your Bank account.</p>
        <img src="appstore_badges.png" alt="App Store Badges" style={{ marginTop: '10px' }} />
      </div>
    </>
  );
};

export default Dashboard;
