import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="Footer">
    <p className="copyright">
      <Link to="/" className="brand-link">
        <i className="fa fa-copyright"></i>
        Musicians Assitant, 2018
      </Link>
    </p>
  </div>
);

export default Footer;
