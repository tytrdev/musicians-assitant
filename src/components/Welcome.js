import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => (
  <div className="flex welcome">
    <div className="welcome-banner">
      <span className="header">
        Welcome to Musicians Assitant!
      </span>

      <button className="create-now">
        <Link to="/theory">
          Check out the theory listings
        </Link>
      </button>
    </div>
  </div>
);

export default Welcome;
