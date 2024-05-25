import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Whitepaper from "./Whitepaper/Whitepaper";

export default function App() {
  return (
    <>
      <div className="main">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/whitepaper" element={<Whitepaper />} />
        </Routes>
      </div>
    </>
  );
}
