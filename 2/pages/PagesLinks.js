import React from 'react';
import { NavLink } from 'react-router-dom';

import './PagesLinks.css';

class PagesLinks extends React.Component {

  render() {

    return (
      <div className="header">
        <NavLink to="/" className={obj => ("pageLink" + (obj.isActive ? " activePageLink" : ""))}>
          <img className="logo" src="https://www.optikakids.by/wp-content/themes/optikakids/img/logo1.png" alt="Company Logo" />
        </NavLink>
        <NavLink to="/" className={obj => ("pageLink" + (obj.isActive ? " activePageLink" : ""))}>Главная</NavLink>
        <NavLink to="/company" className={obj => ("pageLink" + (obj.isActive ? " activePageLink" : ""))}>О компании</NavLink>
        <NavLink to="/basket" className={obj => ("pageLink" + " button" + (obj.isActive ? " activePageLink" : ""))}>
          <img src = "../cart-arrow-down-solid.svg"></img>
          <span>Корзина</span></NavLink>
      </div>
    );

  }

}

export default PagesLinks;
