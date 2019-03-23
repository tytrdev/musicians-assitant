import React, { Component } from 'react';
import _ from 'lodash';
import Kiesel from '../../services/Kiesel';
import { Link } from 'react-router-dom';

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

    this.setState({
      basses,
    });
  }

  getBassContent(bass) {
    console.log(bass.serialNumber);
    const serialNumber = bass.serialNumber.replace(/S\/N:/g, '').trim();
    const listingUrl = `/kiesel/bass/${serialNumber}`;

    return (
      <Link className="create-now" to={listingUrl}>
        <div className="kiesel-bass">
          <img src={bass.imageUrl} />
        </div>
      </Link>
    )
  }

  render() {
    const basses = _.map(this.state.basses, this.getBassContent);

    return (
      <div className="flex columns">
        <h3>Kiesel Bass Listings</h3>

        <div className="flex kiesel-basses">
          { basses }
        </div>
      </div>
    );
  }
}

export default Basses;
