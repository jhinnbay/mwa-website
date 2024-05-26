import React, { useState } from "react";

import { motion } from "framer-motion";
import {
  globeIcon,
  lightBulb,
  searchFill,
  searchIcon,
} from "../../../Base/Svg";
import Table from "./Table";

export default function Tab() {
  const [tab, setTab] = useState("dark");
  return (
    <div className="introTab">
      <div className="introTab__head">
        <div
          onClick={() => setTab("dark")}
          className={"introTab__button dark " + (tab === "dark" ? "active" : "")}
        >
          <span>Our Library</span> {searchFill}
        </div>
        <div
          onClick={() => setTab("blue")}
          className={
            "introTab__button blue " + (tab === "blue" ? "active" : "")
          }
        >
          <span>Our Token</span> {lightBulb}
        </div>
        <div
          onClick={() => setTab("red")}
          className={
            "introTab__button red " + (tab === "red" ? "active" : "")
          }
        >
          <span>Academia</span> {globeIcon}
        </div>
      </div>
      {tab === "dark" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          exit={{ opacity: 0 }}
          className="introTab__body "
        >
          <div className="introTab__body-title">
            <h6>Our Academia</h6>
            <p>IPFSL00KUPCIDCRYPTO</p>
          </div>
          <div className="introTab__body-content">
            <Table />
          </div>
        </motion.div>
      )}
      {tab === "blue" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          exit={{ opacity: 0 }}
          className="introTab__body "
        >
          <div className="introTab__body-title">
            <h6>Our Academia</h6>
          </div>
          <div className="introTab__body-content">
            <Table />
          </div>
        </motion.div>
      )}
      {tab === "red" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          exit={{ opacity: 0 }}
          className="introTab__body "
        >
          <div className="introTab__body-title">
            <h6>Our Academia</h6>
          </div>
          <div className="introTab__body-content">
            <div className="search__wrapper">
              <div className="search">
                <div className="search__inner">
                  <input
                    type="search"
                    placeholder="Search our catalog with AI"
                  />
                  <button type="button">{searchIcon}</button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
