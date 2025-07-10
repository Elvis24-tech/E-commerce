import React from 'react';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} ReactShop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;