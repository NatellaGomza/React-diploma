import React from 'react';
import { NavLink } from 'react-router-dom';

import './PagesLinks.css';

class PagesLinks extends React.Component {

  render() {

    return (
      <div class="header">
        <NavLink to="/" className={obj => ("pageLink" + (obj.isActive ? " activePageLink" : ""))}>
          <img src="https://www.optikakids.by/wp-content/themes/optikakids/img/logo1.png" alt="Company Logo" />
        </NavLink>
        <NavLink to="/" className={obj => ("pageLink" + (obj.isActive ? " activePageLink" : ""))}>Главная</NavLink>
        <NavLink to="/company" className={obj => ("pageLink" + (obj.isActive ? " activePageLink" : ""))}>О компании</NavLink>
        <NavLink to="/clients" className={obj => ("pageLink" + (obj.isActive ? " activePageLink" : ""))}>Клиенты</NavLink>
      </div>
    );

  }

}

export default PagesLinks;
