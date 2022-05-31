import React from 'react';

import ProductsList from '../components/ProductsList';

import appData from '../appData';

class Page_AllProducts extends React.PureComponent {
          
  render() {

    return (
      <div>
        <ProductsList
        item={appData.products}
      />
      </div>
    );
    
  }

}
    
export default Page_AllProducts;