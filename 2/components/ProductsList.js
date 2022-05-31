import React from 'react';
import PropTypes from 'prop-types';

import Product from './Product';
import './ProductsList.css';

class ProductsList extends React.PureComponent {

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
  };

  render() {

    let item = this.props.item.map(el =>
      <Product key={el.id} info={el} />
    );

    return (
      <div className='wrapper'>
        {item}
      </div>
    );
  }
}

export default ProductsList;
