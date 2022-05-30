import React from 'react';
import PropTypes from 'prop-types';

import Category from './Category';

import './CategoryWrapper.css';

class CategoryWrapper extends React.PureComponent {

  static propTypes = {
    header: PropTypes.string.isRequired,
    categories:PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      header: PropTypes.string.isRequired,
      age: PropTypes.string.isRequired,
    })
    ),
  };
  
  render() {

    let category=this.props.categories.map( el => 
    <Category key={el.id} info={el}  />
    );

    return (
      <div className='categoryWrapper'>
        <h1>{this.props.header}</h1>
        <div className='categories'>
          {category}
        </div>
      </div>
    )
    ;

  }

}

export default CategoryWrapper;
