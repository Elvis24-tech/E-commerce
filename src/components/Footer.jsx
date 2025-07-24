import React from 'react';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Shop With Us. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;