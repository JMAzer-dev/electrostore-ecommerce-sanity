import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>&copy;2022 Electro Store - All rights reserved</p>
      <div style={{ display: 'flex', gap: 6 }}>
        <i className="icons product-card">
          <AiFillInstagram />
        </i>
        <i className="icons product-card">
          <AiOutlineTwitter />
        </i>
      </div>
    </div>
  );
};

export default Footer;
