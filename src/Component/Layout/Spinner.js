import React from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <>
      <img
        src={spinner}
        alt="Loader"
        style={{ display: "block", width: "200px", margin: "auto" }}
      />
    </>
  );
};


export default Spinner;
