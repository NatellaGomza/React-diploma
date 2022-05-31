import React from 'react';
import PropTypes from 'prop-types';

import { addToBasketTable } from './events';
import Basket from '../components/Basket';

class BasketTable extends React.PureComponent {

    state = {
        basket: [],
    }

    componentDidMount = () => {
        console.log('1')
        addToBasketTable.addListener("newItem", this.addProductToBasketTable);
        //addToBasket.addListener('deleteClient', this.deleteClient);
    };

    componentWillUnmount = () => {
        console.log('2')
        addToBasketTable.removeListener("newItem", this.addProductToBasketTable);
        // addToBasket.addListener('deleteClient', this.deleteClient);
    };

    addProductToBasketTable = (newProduct) => {
        console.log(3);
        let newBasket = [...this.state.basket, newProduct]
        console.log(newProduct);
        this.setState({basket:newBasket});
    }

    render() {
       console.log(this.state.basket);
        return (
            <div className='categoryWrapper'>
                hello
            </div>
        );
    }
}

export default BasketTable;