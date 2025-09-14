// Está caindo em desuso, não consigo usrar hooks

import React from 'react';

class Test extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      message: "Hello, World!"
    };
  } 
  render() {
    return <div>{this.state.message}</div>;
  }
}
export default Test;