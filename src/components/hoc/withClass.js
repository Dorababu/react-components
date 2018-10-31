import React, { Component } from 'react';

// const withClass = (WrappedCompoenent, className) => {
//   return (props) => (
//     <div className={className}>
//       <WrappedCompoenent {...props} />
//     </div>
//   )
// }
const withClass = (WrappedCompoenent, className) => {
  const WClass = class withClass extends Component {
    render() {
      return (
        <div className={className}>
          <WrappedCompoenent ref={this.props.fref} {...this.props} />
        </div>
      )
    }
  }

  return React.forwardRef((props, ref) => {
    return <WClass {...props} fref = {ref} />
  })
}



export default withClass;