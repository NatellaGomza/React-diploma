import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToBasket } from './events';

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
        isItemInBasket: PropTypes.bool.isRequired,
    };

    addToCart = () => {      
        let newProduct = this.props.info;
        addToBasket.emit("newProduct", newProduct);
    }

    render() {

        return (
            <div className='item'>
                <img src={this.props.info.url} alt={this.props.info.model} />
                <span className="producer">{this.props.info.producer}</span>
                <span className="model">{this.props.info.model}</span>
                <span className="model">{this.props.info.price + " y.e"}</span>
                {(!this.props.isItemInBasket) ? <button className="addingButton" onClick={this.addToCart}>Добавить в корзину</button> : <button className="addingButton" disabled>Уже в корзине</button>}
            </div>
        );
    }

}

const mapStateToProps = function (state) {
    return {};
};

const Product = connect(mapStateToProps)(AddProduct);

export default Product;