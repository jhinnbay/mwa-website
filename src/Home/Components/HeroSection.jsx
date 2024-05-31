import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="mt-5 text-center flex flex-col justify-center items-center">
        <img src="/images/mwa_logo.png" alt="mwa_logo" />
        <h1
          className="text-[108px] font-black leading-relaxed eb-garamond"
          style={{
            color: "linear-gradient(180deg, #222225 0%, #15151B 100%)",
          }}
        >
          Mental Wealth Academy
        </h1>
        <p className="text-[#111827] text-2xl font-light roboto tracking-[22px]">
          The Future of DeFi & Education
        </p>
      </div>
    </>
  );
};

export default HeroSection;
