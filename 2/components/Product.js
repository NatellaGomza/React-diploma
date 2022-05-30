import React from 'react';
import PropTypes from 'prop-types';

import './Product.css';

class Product extends React.PureComponent {

    static propTypes = {
        info: PropTypes.shape({
            id: PropTypes.number.isRequired,
            producer: PropTypes.string.isRequired,
            model: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
        }),
    };

    render() {
        return (
            <div className='item'>
                <img src={this.props.info.url} alt={this.props.info.model} />
                <span className="producer">{this.props.info.producer}</span>
                <span className="model">{this.props.info.model}</span>
                {/* <input type="button" className="addingButton" value="Добавить в корзину"></input> */}
                <button className="addingButton">Добавить в корзину</button>
            </div>
        );
    }

}

export default Product;