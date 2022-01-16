import React from "react";
//Styling CSS
import './container.style.css'

const Container = (props) => {
  return <div className="main-container">{props.children}</div>;
};

export default Container;
