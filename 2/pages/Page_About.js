import React from 'react';

import CategoryWrapper from '../components/CategoryWrapper';

import appData from '../appData';

class Page_About extends React.PureComponent {

  render() {
    return (
      <CategoryWrapper
        header={appData.header}
        categories={appData.categoryInfo}
      />
      );
  }

}

export default Page_About;