import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import ProdImg from './ProdImg';
import PageTop from '../utils/PageTop';
import ProdNfo from './ProdNfo'



const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!){
    product(where: { id: $id }){
      id
      name 
      description
      price
      frets
      brand {
        name
      }
      wood {
        name
      }
    }
  }
`;


class ProductPage extends Component {
  render() {
    return (
      <Query query={SINGLE_PRODUCT_QUERY} variables={{ id: this.props.id }}>
        {({ error, loading, data }) => {
          const product = data.product
          return (
            <div>
              <PageTop
                title="Product detail" 
              />
              <div className="container">
                <div className="product_detail_wrapper">
                  <div className="left">
                    <div style={{ width: '500px' }} >
                      <ProdImg 
                          detail={product}
                      />
                    </div>
                  </div>
                    <div className="right">
                      <ProdNfo detail={product} />
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

export default ProductPage;