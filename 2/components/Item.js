import React from 'react';
import PropTypes from 'prop-types';

import './Item.css';

class Item extends React.Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    producer: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  };

  render() {

    return (
      <div className="basketItemWrapper">
        <div>
          <img src={this.props.url}></img>
        </div>
        <div className="itemInBasket">{this.props.producer}</div>
        <div className="itemInBasket">{this.props.model}</div>
        <div className="itemInBasket">{this.props.price + " y.e"}</div>
        <div className="itemInBasket"><button className="deleteButton">Удалить из корзины</button>
        </div>
      </div>
    );
  }
};

export default Item;