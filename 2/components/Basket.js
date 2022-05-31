import React from 'react';

import { addToBasket } from './events';
import { addToBasketTable } from './events';

class Basket extends React.PureComponent {

    state = {
        basket: null,
    }

    componentDidMount = () => {
        console.log("Basket build")
        addToBasket.addListener("newProduct", this.addProductToBasket);
    };

    // componentWillUnmount = () => {
    //     console.log("Basket unbuild")
    //     addToBasket.removeListener("newProduct", this.addProductToBasket);
    // };

    addProductToBasket = (newProduct) => {
        let newBasket = newProduct
        this.setState({basket:newBasket})
        console.log(newBasket);
        addToBasketTable.emit("newItem", newBasket);
    }

    render() {
        return (
            <div></div>
        )
    }

}

export default Basket;
