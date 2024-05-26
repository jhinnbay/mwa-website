import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Whitepaper from "./Whitepaper/Whitepaper";
import AppComponent from "./CommonComponents/AppComponent";

export default function App() {
  return (
    <>
      <div className="main">
        <Routes>
          <Route
            path=""
            element={
              <AppComponent>
                <Home />
              </AppComponent>
            }
          />
          <Route
            path="/whitepaper"
            element={
              <AppComponent>
                <Whitepaper />
              </AppComponent>
            }
          />
        </Routes>
      </div>
    </>
  );
}
