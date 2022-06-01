import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import './PagesLinks.css';

class InitPagesLinks extends React.Component {

  static propTypes = {
    initState: PropTypes.object.isRequired,
};

  render() {
    
    return (
      <div className="header">
        <NavLink to="/" className={obj => ("pageLink" + (obj.isActive ? " activePageLink" : ""))}>
          <img className="logo" src="https://www.optikakids.by/wp-content/themes/optikakids/img/logo1.png" alt="Company Logo" />
        </NavLink>
        <NavLink to="/" className={obj => ("pageLink" + (obj.isActive ? " activePageLink" : ""))}>Главная</NavLink>
        <NavLink to="/company" className={obj => ("pageLink" + (obj.isActive ? " activePageLink" : ""))}>О компании</NavLink>
        <NavLink to="/basket" className={obj => ("pageLink" + " button" + (obj.isActive ? " activePageLink" : ""))}>
          <span>Корзина(<b>{!this.props.initState.basket.length ? 0 : this.props.initState.basket.length}</b>)</span></NavLink>
      </div>
    );

  }

}

const mapStateToProps = function (state) {
  return {
      initState: state.basket,
  };
};

const PagesLinks = connect(mapStateToProps)(InitPagesLinks);
export default PagesLinks;
