import React from 'react';
import PropTypes from 'prop-types';

import './Category.css';

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

        console.log(this.props.info);
        return (
            <div className='item'>
                <img src={this.props.info.url} alt={this.props.info.model} />
                <span className="header-round">{this.props.info.producer}</span>
                <span className="desk-round">{this.props.info.model}</span>
            </div>
        );
    }

}

export default Product;