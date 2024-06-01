import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Whitepaper from "./Whitepaper/Whitepaper";
import AppComponent from "./CommonComponents/AppComponent";
import Library from "./Library/Library";
import OldHome from "./Old_Home/Old_Home";
import Marketplace from "./MarketPlace/Marketplace";

export default function App() {
  return (
    <>
      <div className="main">
        <Routes>
          <Route
            path="/old-home"
            element={
              <AppComponent>
                <OldHome />
              </AppComponent>
            }
          />
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
          <Route
            path="/library"
            element={
              <AppComponent>
                <Library />
              </AppComponent>
            }
          />
          <Route
            path="/marketplace"
            element={
              <AppComponent>
                <Marketplace />
              </AppComponent>
            }
          />
        </Routes>
      </div>
    </>
  );
}
