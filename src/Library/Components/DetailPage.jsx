import React from "react";
import { backButton, cardDownloadIcon } from "./SVG";

const DetailPage = ({ detailPageOpen, setDetailPageOpen }) => {
  return (
    <>
      <div
        className={`h-[910px] w-full p-4 bg-[#E4E4F0] absolute top-0
     left-0 rounded-bl-2xl overflow-y-auto overflow-x-hidden ${detailPageOpen == true ? "block" : "hidden"}`}
      >
        <div className="flex items-center justify-between">
          <button type="button" onClick={() => setDetailPageOpen(false)}>
            {backButton}
          </button>
          <h2 className="w-1/3 text-2xl font-bold text-center">
            Mental Wealth DAO Whitepaper
          </h2>
          <div></div>
        </div>
        <div>
          <img
            src="/images/card1.png"
            alt="card"
            className="px-40 mt-9 h-auto w-full"
          />
          <div className="mt-5 bg-[#0000001A] rounded-2xl w-full h-full text-center px-2 py-6">
            <p>Created By: Mental Wealth DAO</p>
            <p className="mt-5">
              The Blueprint for Mental Wealth Academy is based on 3 years of
              research in cryptography, smart contracts, and consumer psychology
              in web3. An educational platform with a focus on niche viral
              learning techniques designed by James Q. Marsh.
            </p>
          </div>
        </div>
        <div>
          <button className="w-full bg-[#96C6FF] flex justify-center items-center gap-2.5 p-2.5 mt-3 rounded-md border border-black">
            {cardDownloadIcon}Download
          </button>
          <button className="w-full bg-white flex justify-center items-center gap-2.5 p-2.5 mt-3 rounded-md border border-black">
            CID: <span>CID: 0x23345</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
