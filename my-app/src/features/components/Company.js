import React from 'react';

import './Company.css';

// class Company extends React.PureComponent {

//   static propTypes = {
//     header: PropTypes.string.isRequired,
//     text: PropTypes.string.isRequired,
//   };

//   render() {

//     return (
//       <div className="company">
//         <h1>{this.props.header}</h1>
//         <p>{this.props.text}</p>
//       </div>
//     )
//     ;

//   }

// }

// export default Company;

export default function Company(props) {
  return (
    <div className="company">
      <h1>{props.header}</h1>
      <p>{props.text}</p>
    </div>
  );
}
