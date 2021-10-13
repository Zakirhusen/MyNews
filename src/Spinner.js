import React, { Component } from "react";
import loader1 from "./image/loader.gif";

export default class Spinner extends Component {
  render() {
    return (
      <div className="my-2 text-center">
        <img src={loader1} alt="dfsf" />
      </div>
    );
  }
}
