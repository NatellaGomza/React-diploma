import React from 'react';

import Company from '../components/Company';

let companyDescription = require('../about.json')

class Page_Company extends React.PureComponent {

  render() {
    return (
        <Company header={companyDescription.header}
          text={companyDescription.text} />
    );

  }

}

export default Page_Company;
