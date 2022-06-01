import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ProductsList from '../components/ProductsList';

class InitPageAllProducts extends React.PureComponent {

  static propTypes = {
    initState: PropTypes.object.isRequired,
  };

  render() {
    
    return (
      <div>
        <ProductsList
          item={this.props.initState.products}
        />
      </div>
    );

  }

}

const mapStateToProps = function (state) {
  return {
    initState: state.basket,
  };
};

const Page_AllProducts = connect(mapStateToProps)(InitPageAllProducts);

export default Page_AllProducts;