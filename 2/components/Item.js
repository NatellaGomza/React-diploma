import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.Component {

    static propTypes = {
        id:PropTypes.number.isRequired,
        producer: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    };
  
    render() {
        console.log(this.props)
      return (
        <div>
            <div>{this.props.producer}</div>
            <div>{this.props.model}</div>
            <div>{this.props.url}</div>
        </div>
      );
    }
  };
  
  export default Item;