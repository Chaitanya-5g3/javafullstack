import React, { useState } from 'react';

const MobileRecharge = () => {
  const [mobile, setMobile] = useState('');
  const [amount, setAmount] = useState('');
  const [operator, setOperator] = useState('');
  const [type, setType] = useState('prepaid');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle recharge logic here
    alert(`Recharge: ${type}, Mobile: ${mobile}, Operator: ${operator}, Amount: ₹${amount}`);
  };

  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f2f6ff',
      padding: '20px',
      minHeight: '100vh',
    },
    container: {
      maxWidth: '500px',
      margin: 'auto',
      backgroundColor: 'white',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0px 0px 10px #ccc',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginTop: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    button: {
      backgroundColor: '#00baf2',
      color: 'white',
      padding: '10px',
      marginTop: '10px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      width: '100%',
    },
    operators: {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      marginTop: '20px',
    },
    operatorImg: {
      width: '50px',
      height: '50px',
      margin: '10px',
    },
    footer: {
      paddingTop: '20px',
      textAlign: 'center',
    },
    hr: {
      marginTop: '40px',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h2>Recharge or Pay Mobile Bill</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="radio"
              name="type"
              value="prepaid"
              checked={type === 'prepaid'}
              onChange={() => setType('prepaid')}
            />
            {' '}Prepaid
          </label>
          {' '}
          <label>
            <input
              type="radio"
              name="type"
              value="postpaid"
              checked={type === 'postpaid'}
              onChange={() => setType('postpaid')}
            />
            {' '}Postpaid
          </label>

          <input
            type="text"
            placeholder="Mobile Number"
            style={styles.input}
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />

          <select
            style={styles.input}
            value={operator}
            onChange={(e) => setOperator(e.target.value)}
            required
          >
            <option value="" disabled>Select Operator</option>
            <option value="airtel">Airtel</option>
            <option value="bsnl">BSNL</option>
            <option value="jio">Jio</option>
            <option value="mtnl">MTNL DOLPHIN</option>
            <option value="vi">VI</option>
          </select>

          <input
            type="number"
            placeholder="Amount"
            style={styles.input}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />

          <button type="submit" style={styles.button}>Proceed to Recharge</button>
        </form>

        <h3>Select an Operator</h3>
        <div style={styles.operators}>
          <img
            src="https://cdn.iconscout.com/icon/free/png-128/free-airtel-logo-icon-download-in-svg-png-gif-file-formats--telecommunication-company-indian-companies-pack-logos-icons-2249151.png?f=webp"
            alt="Airtel"
            style={styles.operatorImg}
          />
          <img
            src="https://e7.pngegg.com/pngimages/357/522/png-clipart-bharat-sanchar-nigam-limited-prepay-mobile-phone-home-business-phones-mobile-phones-internet-airtel-customer-care-text-logo-thumbnail.png"
            alt="BSNL"
            style={styles.operatorImg}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Reliance_Jio_Logo.svg/500px-Reliance_Jio_Logo.svg.png"
            alt="Jio"
            style={styles.operatorImg}
          />
          <img
            src="https://bsmedia.business-standard.com/_media/bs/img/article/2020-09/07/full/1599467987-9877.png"
            alt="VI"
            style={styles.operatorImg}
          />
        </div>
      </div>

      <hr style={styles.hr} />
      <footer style={styles.footer}>
        <p>© 2025 Paytm</p>
        <div>
          <a href="#">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsXw07xN8Bk4X8E3D3ZS8rTpMn5dg8wOeY1pdVOEypTpX7YR5k0ZJse9k8lZ9OykJpIQ&usqp=CAU"
              alt="Facebook"
              style={{ width: '25px', marginTop: '10px' }}
            />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default MobileRecharge;
