import React from 'react';
import Product from '../components/Product';


const ProductPage = props => {
  return (
    <div>
      <Product id={props.query.id}/>
    </div>
  );
};

export default ProductPage;