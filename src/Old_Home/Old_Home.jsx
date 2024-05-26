import React from "react";
import Main from "./components/Main/Main";
import Side from "./components/Side/Side";

export default function Home() {
  return (
    <>
      <div className="layout">
        <Main />
        <Side />
      </div>
    </>
  );
}
