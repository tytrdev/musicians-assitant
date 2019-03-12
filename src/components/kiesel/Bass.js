import React, { Component } from 'react';
import _ from 'lodash';
import Kiesel from '../../services/Kiesel';

class Basses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      basses: [],
    };

    this.getBasses();
    
    // Register event methods
  }

  async getBasses() {
    const basses = await Kiesel.basses();

    console.log(basses);

    this.setState({
      basses,
    });
  }
  
  eventMethod() {

  }

  getBassContent(bass) {
    return <p>Bass</p>;
  }

  render() {
    const basses = _.map(this.state.basses, this.getBassContent);

    return (
      <div className="flex columns">
        <h3>Kiesel Bass Listings</h3>

        { basses }
      </div>
    );
  }
}

export default Basses;
