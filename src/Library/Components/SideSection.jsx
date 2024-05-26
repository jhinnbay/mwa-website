import React from "react";
import { dots, download, filter, search, searchIcon } from "./SVG";

const SideSection = () => {
  return (
    <>
      <div className="max-w-[427px] h-full overflow-y-auto overflow-x-hidden w-full py-6 px-10 flex flex-col justify-center items-center border-l border-black">
        <img
          src="/images/logo2.svg"
          alt="logo"
          width={50}
          height={50}
          className="mx-auto"
        />
        <div className="ibm-plex-mono w-full mt-8 border-2 border-black px-4 py-2 rounded-md bg-white">
          <div className="flex items-center">
            <input
              type="search"
              placeholder="Search CID, Keyword or Author..."
              className="w-full h-[22px] text-sm font-medium placeholder:text-[#A8A9B2] "
            />
            {searchIcon}
          </div>
          <div className="mt-3 flex justify-end items-end">{dots}</div>
        </div>
        <div className="w-full ibm-plex-mono">
          <button className="w-full bg-[#29BFFF] flex justify-center items-center gap-2.5 p-2.5 mt-3 rounded-md border border-black">
            {filter}Filter
          </button>
          <button className="w-full bg-[#FFBE3F] flex justify-center items-center gap-2.5 p-2.5 mt-3 rounded-md border border-black">
            {search}Search
          </button>
          <div className="mt-3 flex w-full items-center gap-2 py-1 text-[8px] text-slate-600">
            <div className="h-px w-full bg-black" />
            OR
            <div className="h-px w-full bg-black" />
          </div>{" "}
          <button
            className="w-full flex justify-center items-center gap-2.5 p-2.5 mt-3 rounded-md border border-black"
            style={{
              background:
                "linear-gradient(90.74deg, #CDC4FB 0%, #A4FCF5 99.74%)",
            }}
          >
            {download}Upload Book
          </button>
          <button
            className="w-full flex justify-center items-center gap-2.5 p-2.5 mt-3 rounded-md text-white border border-black"
            style={{
              background: "linear-gradient(180deg, #222225 0%, #15151B 100%)",
            }}
          >
            Purchase Library Card
          </button>
        </div>
        <div className="mt-5 flex flex-col justify-center items-center">
            <img src="/images/tooltip.png" alt="tooltip" />
            <img src="/images/image.png" alt="robot" />
        </div>
      </div>
    </>
  );
};

export default SideSection;
