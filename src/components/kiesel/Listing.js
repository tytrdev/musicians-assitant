import React, { Component } from 'react';
import _ from 'lodash';
import Kiesel from '../../services/Kiesel';

class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getListing();
  }

  async getListing() {
    const listing = await Kiesel.listing('placeholder');

    // Spread listing out onto state
    this.setState({
      ...listing,
    });
  }

  render() {
    return (
      <div className="flex columns">
        <h3>Kiesel Instrument Listing</h3>

        <div className="flex kiesel-basses">
          { this.state.price }
        </div>
      </div>
    );
  }
}

export default Listing;
