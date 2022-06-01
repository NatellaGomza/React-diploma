import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Product from './Product';
import './ProductsList.css';

class InitProductList extends React.PureComponent {

  static propTypes = {
    item: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        producer: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        price: PropTypes.number,
      })
    ),
    initState: PropTypes.object.isRequired,
  };

  render() {

    let itemInBasket = this.props.initState.basket.map(el => el.id);
    let item = this.props.item.map(el => {
      let isItemInBasket = false;

      for (let i = 0; i < itemInBasket.length; i++) {
        if (itemInBasket[i] === el.id) {
          isItemInBasket = true;
        }
      }

      return <Product key={el.id} info={el} isItemInBasket={isItemInBasket} />
    });

    return (
      <div className='wrapper'>
        {item}
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    initState: state.basket,
  };
};

const ProductsList = connect(mapStateToProps)(InitProductList);

export default ProductsList;