import React from "react";
import Navbar from "./Navbar";

const AppComponent = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
        <div>{children}</div>
      </div>
    </>
  );
};

export default AppComponent;
