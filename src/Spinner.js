import React, { Component } from "react";
import loader1 from "./image/loader.gif";

const Spinner = () => {
    
  return (
    <div className="my-2 text-center">
      <img src={loader1} alt="" />
    </div>
  );
}

export default Spinner

