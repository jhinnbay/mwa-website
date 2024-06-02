import React from "react";
import { BackArrow, HintIcon, PinkToy } from "./HomeSvg";

const TokenSwapping = () => {
  return (
    <>
      <div className="max-w-[570px] w-full bg-[#1A2428] border-4 border-[#44DFE9] rounded-xl">
        <div className="flex items-center justify-between px-4 py-8 border-b-2 border-[#44DFE9]">
          <div className="flex items-center gap-2.5 text-base font-semibold text-white">
            {BackArrow} <p>Token Swapping</p> {HintIcon}
          </div>
          <button className="roboto p-2.5 border-2 border-[#44DFE9] rounded-xl text-white text-base">
            Contract Details
          </button>
        </div>
        <div className="py-5 px-6">
          <div className="py-5 px-4 border-2 border-[#44DFE9] rounded-2xl bg-[#333c40]">
            <h2 className="text-2xl font-medium text-[#9D9D9D]">
              $ACADMY Price
            </h2>
            <p className="mt-3 text-4xl font-medium text-white">
              $<span>12.31</span>
            </p>
          </div>

          <div className="flex justify-between items-center mt-5 py-5 px-4 border-2 border-white rounded-2xl">
            <div>
              <h2 className="text-2xl font-medium text-[#9D9D9D]">
                Market Cap
              </h2>
              <p className="mt-3 text-4xl font-medium text-white">
                $<span>161.36M</span>
              </p>
            </div>
            <div className="w-1 h-auto bg-white" />
            <div>
              <h2 className="text-2xl font-medium text-[#9D9D9D]">
                Circulating Supply
              </h2>
              <p className="mt-3 text-4xl font-medium text-white">
                $<span>77.4M</span>
              </p>
            </div>
          </div>
          <div className="mt-3">
            <h2 className="text-2xl font-medium text-[#9D9D9D]">You Pay</h2>
            <div className="mt-2.5 border-2 border-white rounded-2xl relative">
              <input
                type="number"
                className="bg-transparent text-white text-4xl font-medium px-6 py-3"
                placeholder="0.0"
              />
              <span className="absolute bottom-2.5 right-3 bg-white text-black text-2xl font-medium rounded-2xl px-3 py-1.5 cursor-pointer">
                ETH
              </span>
            </div>
          </div>
          <div className="mt-3">
            <h2 className="text-2xl font-medium text-[#9D9D9D]">You Receive</h2>
            <div className="mt-2.5 border-2 border-white rounded-2xl relative">
              <input
                type="number"
                className="bg-transparent text-white text-4xl font-medium px-6 py-3"
                placeholder="0.0"
              />
              <span className="absolute bottom-2.5 right-3 bg-white text-black text-2xl font-medium rounded-2xl px-3 py-1.5 cursor-pointer">
                ACADMY
              </span>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex items-center gap-3 text-2xl font-medium text-[#9D9D9D]">
              {PinkToy} <span>234.2342</span> Held
            </div>
            <div className="mt-2 flex justify-between items-center text-2xl font-medium text-[#9D9D9D]">
              <span>Pay</span>
              <span>0.3 ETH ($35 USD)</span>
            </div>
            <div className="flex justify-between items-center text-2xl font-medium text-[#9D9D9D]">
              <span>Receive</span>
              <span>100 $ACADMY</span>
            </div>
            <div className="flex justify-center mt-8">
            <button type="button" className="w-full h-[75px] max-w-[475px] bg-white rounded-2xl">SWAP</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TokenSwapping;
