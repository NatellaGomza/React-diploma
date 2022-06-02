import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CategoryWrapper from '../components/CategoryWrapper';

class InitPageAbout extends React.PureComponent {

  static propTypes = {
    initState: PropTypes.object.isRequired,
};

  render() {
    
    return (
      <CategoryWrapper
        header={this.props.initState.header}
        categories={this.props.initState.categoryInfo}
      />
      );
  }

}

const mapStateToProps = function (state) {
  return {
      initState: state.basket,
  };
};

const Page_About = connect(mapStateToProps)(InitPageAbout);

export default Page_About;