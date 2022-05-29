import React from 'react';
import { NavLink } from 'react-router-dom';

import './PageAbout.css';

class Page_About extends React.PureComponent {

  render() {

    return (
      <div class="photoWrapper">
        <h1>Детские очки для зрения</h1>
        <NavLink to="optika/opravy-2-3-goda">
          <img src="https://www.optikakids.by/wp-content/uploads/2021/12/round_baby_silicone.jpg" alt="Детские очки для малышей" />
          <span class="header-round">ДЕТСКИЕ ОЧКИ ДЛЯ МАЛЫШЕЙ</span>
          <span class="desk-round">от 0 до 3-х лет</span>
        </NavLink>
        <NavLink to="optika/dlya-devochek">
          <img src="https://www.optikakids.by/wp-content/uploads/2021/12/round_girl.jpg" alt="Очки для девочек" />
          <span class="header-round">ОЧКИ ДЛЯ ДЕВОЧЕК</span>
          <span class="desk-round">от 4-х до 12 лет</span>
        </NavLink>
        <NavLink to="optika/dlya-malchikov">
          <img src="https://www.optikakids.by/wp-content/uploads/2021/12/round_boy_22.jpg" alt="Очки для мальчиков" />
          <span class="header-round">ОЧКИ ДЛЯ МАЛЬЧИКОВ</span>
          <span class="desk-round">от 4-х до 12 лет</span>
        </NavLink>
        <NavLink to="optika/dlya-podrostkov">
          <img src="https://www.optikakids.by/wp-content/uploads/2021/12/round_girl_chb.jpg" alt="Стильные очки для подростков" />
          <span class="header-round">СТИЛЬНЫЕ ОЧКИ ДЛЯ ПОДРОСТКОВ</span>
          <span class="desk-round">от 13-ти до 18 лет</span>
        </NavLink>
      </div>
    );

  }

}

export default Page_About;
