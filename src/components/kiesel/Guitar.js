import React, { Component } from 'react';
import _ from 'lodash';
import Kiesel from '../../services/Kiesel';

class Guitars extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guitars: [],
    };

    this.getGuitars();
    
    // Register event methods
  }

  async getGuitars() {
    const guitars = await Kiesel.guitars();
    
    console.log(guitars);

    this.setState({
      guitars,
    });
  }

  getGuitarContent(guitar) {
    return (
      <div className="kiesel-bass">
        <img src={guitar.imageUrl} />
      </div>
    )
  }

  render() {
    const guitars = _.map(this.state.guitars, this.getGuitarContent);

    return (
      <div className="flex columns">
        <h3>Kiesel Guitar Listings</h3>

        <div className="flex kiesel-basses">
          { guitars }
        </div>
      </div>
    );
  }
}

export default Guitars;
