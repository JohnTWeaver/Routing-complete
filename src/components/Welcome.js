// import React, { Component } from "react";
// import { render } from "@testing-library/react";

// class Welcome extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//     };
//   }
//   //   props.match.params.name
//   render() {
//     return <h1>Hello , {this.props.name}</h1>;
//   }
// }

// export default Welcome;

import React from "react";

export default ({
  match: {
    params: { id },
  },
}) => <h1>Welcome {id}</h1>;
