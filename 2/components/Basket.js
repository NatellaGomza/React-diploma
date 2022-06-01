import React from 'react';
import { addToBasket } from './events';
import { deleteFromBasket } from './events';
import { connect } from 'react-redux';

import Item from './Item';
import './Basket.css'

class InitBasket extends React.PureComponent {

    dataBaseName = 'GNR_React_Optik_Shop_GAME_DATA';
    dataBaseServerURL = "https://fe.it-academy.by/AjaxStringStorage2.php";
    updatePassword = null;
    data = [];
    item = null;
    deletedProduct= null;

    componentDidMount = () => {
        this.readStorage();
        deleteFromBasket.addListener("deleteProduct", this.deleteProduct);
        addToBasket.addListener("newProduct", this.addProductToBasket);
        
    };

    deleteProduct = (deleteProduct) => {
        this.deletedProduct = deleteProduct;
        console.log(this.deletedProduct);
        this.deleteItemFromBasket();
    }

    addProductToBasket = (newProduct) => {
        this.item = newProduct;
        this.updateBasket();
        this.readStorage();
    }

    updateBasket() {
        this.updatePassword = Math.random();
        $.ajax({
            url: this.dataBaseServerURL, type: 'POST', cache: false, dataType: 'json', async: false,
            data: { f: 'LOCKGET', n: this.dataBaseName, p: this.updatePassword },
            success: this.lockGetReady, error: this.errorHandler
        });
    }

    lockGetReady = (callresult) => {
        let product = this.item;
        if (product && callresult.result) {
            this.data = JSON.parse(callresult.result);
            if (this.data) {
                this.data.push(product);
            }
        }

        $.ajax({
            url: this.dataBaseServerURL, type: 'POST', cache: false, dataType: 'json',
            data: { f: 'UPDATE', n: this.dataBaseName, v: JSON.stringify(this.data), p: this.updatePassword },
            success: this.updateReady, error: this.errorHandler
        });
    }

    deleteItemFromBasket () {
        $.ajax({
            url: this.dataBaseServerURL, type: 'POST', cache: false, dataType: 'json', async: false,
            data: { f: 'LOCKGET', n: this.dataBaseName, p: this.updatePassword },
            success: this.lockGetDeletedReady, error: this.errorHandler
        });
    }

    lockGetReady = (callresult) => {
        let product = this.deletedProduct;
        if (product && callresult.result) {
            this.data = JSON.parse(callresult.result).filter(el => {
                return el.id !=product;
            });
            if (this.data) {
                this.data.push(product);
            }
        }

        $.ajax({
            url: this.dataBaseServerURL, type: 'POST', cache: false, dataType: 'json',
            data: { f: 'UPDATE', n: this.dataBaseName, v: JSON.stringify(this.data), p: this.updatePassword },
            success: console.log('dsfd'), error: this.errorHandler
        });
    }

    readStorage() {
        console.log('fdgf')
        $.ajax({
            url: this.dataBaseServerURL, type: 'POST', cache: false, dataType: 'json', async: false,
            data: { f: 'READ', n: this.dataBaseName },
            success: this.saveResult, error: this.errorHandler
        });
    }

    saveResult = (callresult) => {
        let newProduct = JSON.parse(callresult.result);
        this.props.dispatch({ type: "addToCart", payload: newProduct });
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

        // let items = this.props.initState.basket.map(el =>
        //     <Item key={el.id}
        //         id={el.id}
        //         producer={el.producer}
        //         model={el.model}
        //         url={el.url}
        //         price={el.price}
        //     />
        // )

        // let totalPrise = this.props.initState.basket.map(el => el.price);
        // let sum = totalPrise.reduce(function (sum, current) {
        //     return sum + current;
        // }, 0);

        return (
            <div></div>
            // <div>
            //     <h1 className="basketHeader">Товары в корзине</h1>
            //     {(!!items.length) ? <div>{items}</div> : <p>Корзина пуста</p>}
            //     {(!!items.length) &&
            //         <div className="result">
            //             <div className="resultText">Итого:</div>
            //             <div className="sum">{sum + " y.e"}</div>
            //         </div>}
            // </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {};
};

const Basket = connect(mapStateToProps)(InitBasket);

export default Basket;