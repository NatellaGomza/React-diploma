import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteFromBasket } from './events';

import './Item.css';

class InitItem extends React.Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    producer: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  };

  state = {
    deleteItem: false,
  }

  deleteFromCart = () => {      
    let deletedProduct = this.props.id;
    deleteFromBasket.emit("deleteProduct", deletedProduct);
}

  render() {

    return (
        <div className="basketItemWrapper">
          <div>
            <img src={this.props.url}></img>
          </div>
          <div className="itemInBasket">{this.props.producer}</div>
          <div className="itemInBasket">{this.props.model}</div>
          <div className="itemInBasket">{this.props.price + " y.e"}</div>
          <div className="itemInBasket"><button className="deleteButton" onClick={this.deleteFromCart}>Удалить из корзины</button>
          </div>
        </div>
    );
  }
};

const mapStateToProps = function (state) {
  return {};
};

const Item = connect(mapStateToProps)(InitItem);

export default Item;