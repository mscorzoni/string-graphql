import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';
import faTh from '@fortawesome/fontawesome-free-solid/faTh';
import LoadMoreCards from './LoadMoreCards';
import FormatMoney from '../../lib/formatMoney';



const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    products(orderBy: createdAt_DESC){
      id
      name 
      description
      price
      brand {
        name
      }
      wood {
        name
      }
    }
  }
`;

class Shop extends Component {

  state = {
    grid: ''
  }

  handleGrid= () => {
    this.setState({
        grid: !this.state.grid ? 'grid_bars':''
    })
  }
  render() {
    return (
      <Query query={ALL_PRODUCTS_QUERY}>
        {({ data, loading, error }) => {
          if(loading) return <p>Loading...</p>
          if(error) return <p>Error ...</p>
          return (
            <div className="container">
              <div className="shop_wrapper">
                <div className="right">
                  <div className="shop_options">
                    <div className="shop_grids clear">
                      <div
                          className={`grid_btn ${this.state.grid ? '' : 'active' }`}
                        >
                          <FontAwesomeIcon icon={faTh}/>
                        </div>
                        <div
                            className={`grid_btn ${!this.state.grid ? '' :  'active'}`}
                        >
                          <FontAwesomeIcon icon={faBars} />
                        </div>
                      </div>
                    </div>
                      
                  <div className={{ clear: 'both' }}>
                      <LoadMoreCards 
                          grid={ this.state.grid }
                          products={data.products}
                      />
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </Query>
    );
  }
}

export default Shop;