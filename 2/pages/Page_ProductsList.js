import React from 'react';
import { useParams } from "react-router-dom";

import ProductsList from '../components/ProductsList';

import appData from '../appData';

const withRouter = Component => props => {
  const params = useParams();
  return <Component {...props} params={params} />;
};

class Page_ProductsList extends React.PureComponent {

  render() {

    let productId = this.props.params.item;
    let productData;

    if (productId === "vse-modeli") {
      console.log(appData.products)
      productData = appData.products;
    } else {
      productData = appData.products.filter(el => el.category == productId);
    }
    
    console.log(productData);
    return (
      <ProductsList
        item={productData}
      />
    );

  }

}

export default withRouter(Page_ProductsList);
