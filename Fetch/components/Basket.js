import React from 'react';
import { addToBasket } from './events';
import { deleteFromBasket } from './events';
import { connect } from 'react-redux';
import isoFetch from 'isomorphic-fetch';

import './Basket.css'

class InitBasket extends React.PureComponent {

    dataBaseName = 'GNR_Optik_Shop_GAME_DATA';
    dataBaseServerURL = "https://fe.it-academy.by/AjaxStringStorage2.php";
    updatePassword = null;
    data = [];
    item = null;
    deletedProduct = null;

    componentDidMount = () => {
        this.readStorage();
        deleteFromBasket.addListener("deleteProduct", this.deleteProduct);
        addToBasket.addListener("newProduct", this.addProductToBasket);
    };

    deleteProduct = (deleteProduct) => {
        this.deletedProduct = deleteProduct;
        console.log(this.deletedProduct);
        this.updateBasket();
        this.readStorage();
    }

    addProductToBasket = (newProduct) => {
        this.item = newProduct;
        this.updateBasket();
    }

    updateBasket = async () => {
        this.updatePassword = Math.random();

        let postRequestBeforeUpdate = new URLSearchParams();
        postRequestBeforeUpdate.append('f', 'LOCKGET');
        postRequestBeforeUpdate.append('n', this.dataBaseName);
        postRequestBeforeUpdate.append('p', this.updatePassword);


        const response = await isoFetch(this.dataBaseServerURL, { method: 'post', body: postRequestBeforeUpdate });
        if (!response.ok) {
            this.fetchError("fetch error " + response.status);
        }
        else {
            const data = await response.json();
            console.log(data);
            this.lockGetReady(data);
        }
    };

    lockGetReady = async (callresult) => {
        console.log(callresult);
        if (this.item && callresult.result) {
            this.data = JSON.parse(callresult.result);
            if (this.data) {
                this.data.push(this.item);
            }
        }

        if (this.deletedProduct && callresult.result) {
            console.log(this.data);
            this.data = [...JSON.parse(callresult.result)];
            if (this.data) {
                this.data = this.data.filter(el => {
                    console.log(el);
                    return el.id !== this.deletedProduct
                }
                );
                console.log(this.data);
            }
        }
        console.log(this.data);
        let postRequestUpdate = new URLSearchParams();
        postRequestUpdate.append('f', 'UPDATE');
        postRequestUpdate.append('n', this.dataBaseName);
        postRequestUpdate.append('p', this.updatePassword);
        postRequestUpdate.append('v', this.data);


        const response = await isoFetch(this.dataBaseServerURL, { method: 'post', body: postRequestUpdate });
        if (!response.ok) {
            this.fetchError("fetch error " + response.status);
        }
        else {
            const data = await response.json();
            console.log(data);
            this.saveResult(data);
        }

        this.deletedProduct = null;
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
        console.log(callresult.result)
        let newProduct = JSON.parse(callresult.result);
        this.props.dispatch({ type: "addToCart", payload: newProduct });
    }

    updateReady(callresult) {
        console.log(callresult);
    }

    errorHandler(statusStr, errorStr) {
        alert("Ошибка обращения к серверу, повторите попытку позже");
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