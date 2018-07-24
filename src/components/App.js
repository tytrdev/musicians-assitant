import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter as Router, Route,
} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Welcome from './Welcome';
import Theory from './theory/Home';

const App = () => (
  <Router>
    <div className="flex columns">
      {/* Notification Container */}
      <ToastContainer
        className='toast-container'
        toastClassName="dark-toast"
        progressClassName='toast-progress'
      />

      <Header></Header>

      <div className="flex app-body">
        {/* Landing page for all users */}
        <Route exact path="/" component={Welcome} />
        <Route exact path="/welcome" component={Welcome} />
        <Route path="/theory" component={Theory} />
      </div>

      <Footer></Footer>
    </div>
  </Router>
);

export default App;
