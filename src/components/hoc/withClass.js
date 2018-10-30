import React, { Component } from 'react';

// const withClass = (WrappedCompoenent, className) => {
//   return (props) => (
//     <div className={className}>
//       <WrappedCompoenent {...props} />
//     </div>
//   )
// }
const withClass = (WrappedCompoenent, className) => {
  return class withClass extends Component {
    render() {
      return (
        <div className={className}>
          <WrappedCompoenent {...this.props} />
        </div>
      )
    }
  }
}



export default withClass;