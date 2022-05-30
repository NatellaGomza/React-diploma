import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './Category.css';

class Category extends React.PureComponent {

  static propTypes = {
    info:PropTypes.shape({
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      header: PropTypes.string.isRequired,
      age: PropTypes.string.isRequired,
    }),
  };

  render() {
    console.log("fdgfd");
    return (
      <div className='photoWrapper'>
        <NavLink to={"optika" + this.props.info.url}>
          <img src={this.props.info.src} alt={this.props.info.name} />
          <span className="header-round">{this.props.info.header}</span>
          <span className="desk-round">{this.props.info.age}</span>
        </NavLink>
      </div>
    );
  }

}

export default Category;
