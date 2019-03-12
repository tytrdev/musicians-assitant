import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => (
  <div className="flex columns Dashboard">
    <h1>Tool Listings</h1>

    <hr />

    <h3>Gear</h3>

    <ul>
      <li>
        <Link to="/tools/kiesel/bass">
          <i className="fa fa-music"></i>
          Kiesel Bass Listings
        </Link>
      </li>

      <li>
        <Link to="/tools/kiesel/guitar">
          <i className="fa fa-music"></i>
          Kiesel Guitar Listings
        </Link>
      </li>
    </ul>

    <hr />

    <h3>Theory</h3>

    <ul>
      <li>
        <Link to="/tools/negative-harmony">
          <i className="fa fa-music"></i>
          Negative Harmony
        </Link>
      </li>
    </ul>
  </div>
);

export default Dashboard;
