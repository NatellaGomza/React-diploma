import React from 'react';
import PropTypes from 'prop-types';

import Product from './Product';

class ProductsList extends React.PureComponent {

  static propTypes = {
    item: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        producer: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
      })
    ),
  };

  render() {

    console.log(this.props.item);
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
