import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Product.css';

class AddProduct extends React.PureComponent {

    static propTypes = {
        info: PropTypes.shape({
            id: PropTypes.number.isRequired,
            producer: PropTypes.string.isRequired,
            model: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            price: PropTypes.number,
        }),
    };

    state = {
        inBasket: false,
    };

    addToCart = () => {
        let newProduct = this.props.info;
        this.props.dispatch({ type: "addToCart", payload: newProduct });

    }

    // dataBaseName = 'GNR_React_Optik_Shop_GAME_DATA';
    // dataBaseServerURL = "https://fe.it-academy.by/AjaxStringStorage2.php";
    // updatePassword = null;
    // data = [];
    // itemsForBasket = [];

    // addToCart = () => {
    //     this.updatePassword = Math.random();
    //     $.ajax({
    //         url: this.dataBaseServerURL, type: 'POST', cache: false, dataType: 'json', async: false,
    //         data: { f: 'LOCKGET', n: this.dataBaseName, p: this.updatePassword },
    //         success: this.lockGetReady, error: this.errorHandler
    //     });
    // }

    // lockGetReady = (callresult) => {
    //     let product = this.props.info;

    //     if (product) {
    //         this.data = JSON.parse(callresult.result);
    //         if (this.data) {
    //             this.data.push(product);
    //         }
    //     }

    //     $.ajax({
    //         url: this.dataBaseServerURL, type: 'POST', cache: false, dataType: 'json',
    //         data: { f: 'UPDATE', n: this.dataBaseName, v: JSON.stringify(this.data), p: this.updatePassword },
    //         success: this.refreshCart, error: this.errorHandler
    //     });
    // }

    // updateReady(callresult) {
    //     console.log(callresult);
    // }

    // errorHandler(statusStr, errorStr) {
    //     console.log(statusStr + ' ' + errorStr);
    // }

    render() {

        return (
            <div className='item'>
                <img src={this.props.info.url} alt={this.props.info.model} />
                <span className="producer">{this.props.info.producer}</span>
                <span className="model">{this.props.info.model}</span>
                <span className="model">{this.props.info.price + " y.e"}</span>
                {/* <input type="button" className="addingButton" value="Добавить в корзину"></input> */}
                <button className="addingButton" onClick={this.addToCart}>Добавить в корзину</button>
            </div>
        );
    }

}

const mapStateToProps = function (state) {
    // этому компоненту ничего не нужно из хранилища Redux
    return {};
};

// но этому компоненту нужен сам this.props.dispatch, и чтобы
// он появился, следует присоединить (connect) компонент к хранилищу Redux
const Product = connect(mapStateToProps)(AddProduct);

export default Product;

// export default Product;