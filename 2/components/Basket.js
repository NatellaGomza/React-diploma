import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Item from './Item';

import './Basket.css'

class BasketItems extends React.PureComponent {

    static propTypes = {
        initState: PropTypes.array.isRequired,
    };

    render() {

        let items = this.props.initState.map(el =>
            <Item key={el.id}
                id={el.id}
                producer={el.producer}
                model={el.model}
                url={el.url}
                price={el.price}
            />
        )

        let totalPrise = this.props.initState.map(el => el.price);
        let sum = totalPrise.reduce(function (sum, current) {
            return sum + current;
        }, 0);

        console.log(sum);
        return (
            <div>
                <h1 className="basketHeader">Товары в корзине</h1>
                {(!!items.length) ? <div>{items}</div> : <p>Корзина пуста</p>}
                {(!!items.length) &&
                    <div className="result">
                        <div className="resultText">Итого:</div>
                        <div className="sum">{sum + " y.e"}</div>
                    </div>}
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        initState: state.basket,
    };
};

const Basket = connect(mapStateToProps)(BasketItems);

export default Basket;
