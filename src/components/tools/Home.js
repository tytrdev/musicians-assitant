import React from 'react';
import {
  BrowserRouter as Router, Route,
} from 'react-router-dom';
import Dashboard from './Dashboard';
import NegativeHarmony from './NegativeHarmony';

import KieselBasses from '../kiesel/Bass';
import KieselGuitars from '../kiesel/Guitar';
import KieselListing from '../kiesel/Listing';

const Home = () => (
  <Router>
    <div className="flex Theory">
      <Route exact path="/tools" component={Dashboard} />
      <Route exact path="/tools/negative-harmony" component={NegativeHarmony} />
      <Route path="/tools/kiesel/bass/:id" component={KieselListing} />
      <Route path="/tools/kiesel/guitar/:id" component={KieselListing} />
      <Route exact path="/tools/kiesel/bass" component={KieselBasses} />
      <Route exact path="/tools/kiesel/guitar" component={KieselGuitars} />
    </div>
  </Router>
);

export default Home;
