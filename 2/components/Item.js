import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import './Item.css';

class InitItem extends React.Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    producer: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  };

  dataBaseName = 'GNR_React_Optik_Shop_GAME_DATA';
  dataBaseServerURL = "https://fe.it-academy.by/AjaxStringStorage2.php";
  updatePassword = null;
  data = [];

  state = {
    deleteItem: false,
  }

  componentDidMount() {
    this.updateBasket();
  }

  updateBasket() {
    this.updatePassword = Math.random();
    $.ajax({
      url: this.dataBaseServerURL, type: 'POST', cache: false, dataType: 'json', async: false,
      data: { f: 'LOCKGET', n: this.dataBaseName, p: this.updatePassword },
      success: this.lockGetReady, error: this.errorHandler
    }
    );
  }

  lockGetReady = (callresult) => {
    let product = this.props;
    console.log(callresult.result)
    if (product && callresult.result) {
      this.data = JSON.parse(callresult.result);
      if (this.data) {
        console.log('gfgg')
        this.data.push(product);
      }
    }
    console.log(this.data);
    $.ajax({
      url: this.dataBaseServerURL, type: 'POST', cache: false, dataType: 'json',
      data: { f: 'UPDATE', n: this.dataBaseName, v: JSON.stringify(this.data), p: this.updatePassword },
      success: console.log('success'), error: this.errorHandler
    });
  }

  updateReady(callresult) {
    console.log(callresult);
  }

  errorHandler(statusStr, errorStr) {
    console.log(statusStr + ' ' + errorStr);
  }

  deleteFromCart = () => {
    let deletedProduct = this.props;
    this.setState({ deleteItem: true });
    this.props.dispatch({ type: "deleteFromCart", payload: deletedProduct });
  }

  render() {

    return (
      <CSSTransition in={this.state.deleteItem} timeout={500} classNames="item">
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
      </CSSTransition>
    );
  }
};

const mapStateToProps = function (state) {
  return {};
};

const Item = connect(mapStateToProps)(InitItem);

export default Item;