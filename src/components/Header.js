import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="app-bar">
    <Link to="/" className="logo-link">
      <i className="fa fa-music"></i>
    </Link>

    <Link to="/" className="brand-link">
      Musicians Assitant
    </Link>
  </div>
);

export default Header;
