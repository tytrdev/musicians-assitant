import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => (
  <div className="flex welcome">
    <div className="welcome-banner">
      <span className="header">
        Welcome to Musicians Assitant!
      </span>

      <Link className="create-now" to="/tools">
        Check out the available tools
      </Link>
    </div>
  </div>
);

export default Welcome;
