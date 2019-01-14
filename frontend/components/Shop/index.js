import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';
import faTh from '@fortawesome/fontawesome-free-solid/faTh';

class Shop extends Component {

  state = {
    grid: ''
  }

  render() {
    return (
      <div className="right">
        <div className="shop_options">
          <div
            className={`grid_btn ${this.state.grid ? '' : 'active' }`}
          >
            <FontAwesomeIcon icon={faTh}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Shop;