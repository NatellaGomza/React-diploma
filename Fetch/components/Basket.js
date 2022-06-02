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
    updateBasket() {
        this.updatePassword = Math.random();

        let postRequestBeforeUpdate = new URLSearchParams();
        postRequestBeforeUpdate.append('f', 'LOCKGET');
        postRequestBeforeUpdate.append('n', this.dataBaseName);
        postRequestBeforeUpdate.append('p', this.updatePassword);

        fetch(this.dataBaseServerURL, { method: 'post', body: postRequestBeforeUpdate })
            .then(response => response.json())
            .then(data => this.lockGetReady(data))
            .catch(error => { console.log(error); });
    }

    lockGetReady(callresult) {
        console.log(callresult);
        if (this.item && callresult.result) {
            this.data = JSON.parse(callresult.result);
            if (this.data) {
                this.data.push(this.item);
            }
        }

        if (this.deletedProduct && callresult.result) {
            console.log(this.data);
            this.data = JSON.parse(callresult.result);
            if (this.data) {
                this.data = this.data.filter(el => {
                    console.log(el);
                    return el.id !== this.deletedProduct
                }
                );
                console.log(this.data);
            }
        }

        let postRequestUpdate = new URLSearchParams();
        postRequestUpdate.append('f', 'UPDATE');
        postRequestUpdate.append('n', this.dataBaseName);
        postRequestUpdate.append('p', this.updatePassword);
        postRequestUpdate.append('v', this.data);// вот тут нужно первый раз положить пустой массив


        fetch(this.dataBaseServerURL, { method: 'post', body: postRequestUpdate })
            .then(response => response.json())
            .then(data => this.saveResult(data))
            .catch(error => { console.log(error); });

        this.deletedProduct = null;
    }


    // fetch(ajaxHandlerScript, { method: 'post', body: sp })
    // .then( response => response.json() )
    // .then( data => { lockGetReady; } )
    // .catch( error => { console.error(error); } );

    // updateBasket = async () => {
    //     this.updatePassword = Math.random();

    //     let postRequestBeforeUpdate = new URLSearchParams();
    //     postRequestBeforeUpdate.append('f', 'LOCKGET');
    //     postRequestBeforeUpdate.append('n', this.dataBaseName);
    //     postRequestBeforeUpdate.append('p', this.updatePassword);


    //     const response = await isoFetch(this.dataBaseServerURL, { method: 'post', body: postRequestBeforeUpdate });
    //     if (!response.ok) {
    //         this.fetchError("fetch error " + response.status);
    //     }
    //     else {
    //         const data = await response.json();
    //         console.log("fetch update");
    //         this.lockGetReady(data);
    //     }
    // };

    // lockGetReady = async (callresult) => {
    //     console.log(callresult.result);
    //     if (this.item && callresult.result) {
    //         this.data = JSON.parse(callresult.result);
    //         if (this.data) {
    //             this.data.push(this.item);
    //         }
    //     }

    //     if (this.deletedProduct && callresult.result) {
    //         console.log(this.data);
    //         this.data = JSON.parse(callresult.result);
    //         if (this.data) {
    //             this.data = this.data.filter(el => {
    //                 console.log(el);
    //                 return el.id !== this.deletedProduct
    //             }
    //             );
    //             console.log(this.data);
    //         }
    //     }
    //     console.log(this.data);
    //     let postRequestUpdate = new URLSearchParams();
    //     postRequestUpdate.append('f', 'UPDATE');
    //     postRequestUpdate.append('n', this.dataBaseName);
    //     postRequestUpdate.append('p', this.updatePassword);
    //     postRequestUpdate.append('v', this.data);// вот тут нужно первый раз положить пустой массив


    //     const updateResponse = await isoFetch(this.dataBaseServerURL, { method: 'post', body: postRequestUpdate });
    //     console.log(updateResponse);
    //     if (!updateResponse.ok) {
    //         this.fetchError("fetch error " + response.status);
    //     }
    //     else {
    //         const data = await updateResponse.json();
    //         console.log(data);
    //         this.saveResult(data);
    //     }

    //     this.deletedProduct = null;
    // }

    readStorage() {
        let postRequestUpdate = new URLSearchParams();
        postRequestUpdate.append('f', 'READ');
        postRequestUpdate.append('n', this.dataBaseName);
        postRequestUpdate.append('p', this.updatePassword);

        fetch(this.dataBaseServerURL, { method: 'post', body: postRequestUpdate })
            .then(response => response.json())
            .then(data => this.saveResult(data))
            .catch(error => {console.log(error); });
    }

    saveResult(callresult) {
        console.log(callresult.result)
        let newProduct = JSON.parse(callresult.result);
        this.props.dispatch({ type: "addToCart", payload: newProduct });
    }

    deleteFromCart = () => {
        let deletedProduct = this.props;
        this.setState({ deleteItem: true });
        this.props.dispatch({ type: "deleteFromCart", payload: deletedProduct });
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