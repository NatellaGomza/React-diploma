import React from 'react';
import { connect } from 'react-redux';

import ProductsList from '../components/ProductsList';

function InitPageAllProducts(props) {
  console.log("render pageallproducts");
  return (
    <ProductsList
      item={props.initState.products}
    />
  );
}

const mapStateToProps = function (state) {
  return {
    initState: state.basket,
  };
};

const Page_AllProducts = connect(mapStateToProps)(InitPageAllProducts);

export default Page_AllProducts;