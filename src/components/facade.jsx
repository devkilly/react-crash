import React, { Component } from "react";
import PrimarySearchAppBar from "./appBar.jsx";
import Counters from "./counters.jsx";

class Facade extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div>
          <PrimarySearchAppBar />
        </div>
        <div>
          <Counters />
        </div>
      </React.Fragment>
    );
  }
}
export default Facade;
