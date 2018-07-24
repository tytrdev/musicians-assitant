import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => (
  <div className="flex columns Dashboard">
    <h1>Theory Listings</h1>
    <ul>
      <li>
        <Link to="/theory/negative-harmony">
          <i className="fa fa-music"></i>
          Negative Harmony
        </Link>
      </li>
    </ul>
  </div>
);

export default Dashboard;
