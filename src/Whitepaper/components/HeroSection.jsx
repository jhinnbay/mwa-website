import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <div
        className="pt-10 pb-6"
        style={{
          background: "linear-gradient(180deg, #222225 0%, #15151B 100%)",
        }}
      >
        <div className="space-y-6 max-w-[668px] mx-auto text-white text-center">
          <h1 className="text-[56px] cinzel-decorative font-bold">
            Mental Wealth Academy
          </h1>
          <p className="text-xl font-medium inter">
            A digital academia that offers community events, e-courses,
            resources, and a wealth of knowledge by utilizing Polygon &
            Chainlink’s Blockchain Technology.
          </p>
          <button className="b612-mono text-2xl py-5 px-6 border border-[#A579A685] rounded-lg">Mint Whitepaper</button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
