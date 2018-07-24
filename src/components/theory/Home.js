import React from 'react';
import {
  BrowserRouter as Router, Route,
} from 'react-router-dom';
import Dashboard from './Dashboard';
import NegativeHarmony from './NegativeHarmony';

const App = () => (
  <Router>
    <div className="flex Theory">
      <Route exact path="/theory" component={Dashboard} />
      <Route exact path="/theory/negative-harmony" component={NegativeHarmony} />
    </div>
  </Router>
);

export default App;
