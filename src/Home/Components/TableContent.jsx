import React from "react";
import { Union } from "./HomeSvg";
import { Link } from "react-router-dom";

const TableContent = () => {
  return (
    <>
      <div className="mx-5 sm:mx-10 lg:mx-20 mt-14 pb-80 relative">
        <div className="flex justify-center items-center relative z-10">
          <Link to="library"
            className="max-w-[618px] w-full flex justify-center items-center gap-2.5 py-4 px-9 rounded-2xl text-white"
            style={{
              background:
                "linear-gradient(90.83deg, #44DFE9 0.21%, #444AE9 70.21%)",
              boxShadow: `
              0px 4px 4px 0px #00000040,
              0px 4px 0px 0px #FFFFFF40 inset,
              0px -6px 0px 0px #00000080 inset
              `,
            }}
          >
            JOIN THE ACADEMY {Union}
          </Link>
        </div>
        <div className="text-center relative z-10">
          <h3 className="eb-garamond my-10 text-[32px] font-bold leading-relaxed">
            Table of Content:
          </h3>
          <ul className="mt-4 space-y-12 text-lg leading-relaxed">
            <li>
              1. Delving Deep into The Academy Network: A Comprehensive Guide
            </li>
            <li>1.1 Understanding the Academy Network</li>
            <li>1.2 Legal Controversies and Copyright Issues</li>
            <li>1.3 Why The Mental Wealth Academy is Popular</li>
            <li>1.4 The Academy & Digital Freedom</li>
            <li>2. What is Inter-Planetary File Storage?</li>
            <li>3. Mental Wealth Academy Saves You Money On College Books</li>
            <li>4. How To Join The Community With Our Soul-Bound NFTs</li>
          </ul>
        </div>
          <div className="absolute top-0 lg:-top-40 right-28 z-0">
            <img src="/images/home-bg4.png" alt="bg" />
          </div>
          <div className="hidden lg:block absolute top-28 left-28 z-0">
            <img src="/images/home-bg1.png" alt="bg" />
          </div>
          <div className="hidden md:block absolute left-20 bottom-28 z-0">
            <img src="/images/home-bg3.png" alt="bg" />
          </div>
          <div className="absolute right-0 bottom-0 z-0">
            <img src="/images/home-bg2.png" alt="bg" />
          </div>
      </div>
    </>
  );
};

export default TableContent;
