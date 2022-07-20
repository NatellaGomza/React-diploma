import React from 'react';
import { addToBasket } from './events';
import { deleteFromBasket } from './events';
import { connect } from 'react-redux';

import './Basket.css'

class InitBasket extends React.PureComponent {

    dataBaseName = 'GNR_React_Shop_GAME_DATA';
    dataBaseServerURL = "https://fe.it-academy.by/AjaxStringStorage2.php";
    updatePassword = null;
    data = [];
    item = null;
    deletedProduct = null;

    componentDidMount = () => {
        console.log("dfd")
        this.readStorage();
        deleteFromBasket.addListener("deleteProduct", this.deleteProduct);
        addToBasket.addListener("newProduct", this.addProductToBasket);
    };

    deleteProduct = (deleteProduct) => {
        this.deletedProduct = deleteProduct;
        this.updateBasket();
    }

    addProductToBasket = (newProduct) => {
        this.item = newProduct;
        this.updateBasket();
    }

    updateBasket() {
        this.updatePassword = Math.random();

        let postRequestBeforeUpdate = new URLSearchParams();
        postRequestBeforeUpdate.append('f', 'LOCKGET');
        postRequestBeforeUpdate.append('n', this.dataBaseName);
        postRequestBeforeUpdate.append('p', this.updatePassword);

        fetch(this.dataBaseServerURL, { method: 'post', body: postRequestBeforeUpdate })
            .then(response => response.json())
            .then(data => this.lockGetReady(data))
            .catch(error => {alert("Ошибка сервера! Повторите попытку позднее!")});
    }

    lockGetReady(callresult) {
        console.log(callresult);
        if (callresult.error) {
            alert("Ошибка сервера! Повторите попытку позднее!");
        }
       
        if (this.item && callresult.result) {
            this.data = JSON.parse(callresult.result);
            if (this.data) {
                this.data.push(this.item);
            }
        }

        if (this.deletedProduct && callresult.result) {
            this.data = JSON.parse(callresult.result);
            if (this.data) {
                this.data = this.data.filter(el => {
                    return el.id !== this.deletedProduct
                });
            }
        }
        let postRequestUpdate = new URLSearchParams();
        postRequestUpdate.append('f', 'UPDATE');
        postRequestUpdate.append('n', this.dataBaseName);
        postRequestUpdate.append('p', this.updatePassword);
        postRequestUpdate.append('v', JSON.stringify(this.data));// вот тут нужно первый раз положить пустой массив

        fetch(this.dataBaseServerURL, { method: 'post', body: postRequestUpdate })
            .then(response => response.json())
            .then(data => this.updateRedux())
            .catch(error => alert("Ошибка сервера! Повторите попытку позднее!"));

        this.deletedProduct = null;
    }

    updateRedux () {
        this.props.dispatch({ type: "addToCart", payload: this.data });
        this.readStorage();
    }

    readStorage() {
        this.updatePassword = Math.random();

        let postRequestUpdate = new URLSearchParams();
        postRequestUpdate.append('f', 'READ');
        postRequestUpdate.append('n', this.dataBaseName);
        postRequestUpdate.append('p', this.updatePassword);

        fetch(this.dataBaseServerURL, { method: 'post', body: postRequestUpdate })
            .then(response => response.json())
            .then(data => this.readData(data))
            .catch(error => alert("Ошибка сервера! Повторите попытку позднее!"));
    }

    readData(data) {
        if (!data.result) {
            this.data = [];
            this.updateBasket();
        } else {
            this.data = JSON.parse(data.result);
            this.props.dispatch({ type: "addToCart", payload: this.data });
        }
    }

    render() {
        return (
            <div></div>
        )
    }
}

const mapStateToProps = function (state) {
    return {};
};

const Basket = connect(mapStateToProps)(InitBasket);

export default Basket;