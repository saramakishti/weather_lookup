import React from "react";

const Title = (props) => {
  return (
    <h1
      style={{
        color: "white",
      }}
    >
      {props.children}
    </h1>
  );
};

export default Title;
