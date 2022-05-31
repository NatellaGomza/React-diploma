import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Item from './Item';

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
            />
        )
        console.log({ items });
        return (
            <div>{items}</div>
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
