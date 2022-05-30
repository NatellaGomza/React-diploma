import React from 'react';

import ProductsList from '../components/ProductsList';

import appData from '../appData';

class Page_AllProducts extends React.PureComponent {
          
  render() {

    return (
        <ProductsList
        item={appData.products}
      />
    );
    
  }

}
    
export default Page_AllProducts;