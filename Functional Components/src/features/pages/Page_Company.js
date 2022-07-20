import React from 'react';

import Company from '../components/Company';

function Page_Company() {
  console.log("render pagecompany");
  const companyDescription = require('../about.json')

  return (
    <Company header={companyDescription.header}
      text={companyDescription.text} />
  );
}

export default Page_Company;