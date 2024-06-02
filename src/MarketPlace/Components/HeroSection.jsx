import React, { useState } from "react";
import { HintIcon, UploadIcon } from "./svg";
import EventModal from "../../Library/Components/EventModal";

const HeroSection = () => {

    const [isFileOpen, setIsFileOpen] = useState(false);

    const handleFileModalCLose = () => {
      setIsFileOpen(false);
    };

  return (
    <>
      <div className="mt-5">
        <div className="w-32 h-1 bg-[#454545] mx-auto mt-7 rounded-xl" />
        <div className="flex justify-between items-center">
          <div className="max-w-[650px]">
            <h2 className="eb-garamond text-[72px] font-bold">
              Writer’s Marketplace
            </h2>
            <p>
              Writer’s marketplace is a place to upload books as a writer and
              sell them digitally create number of copies, the platform is your
              publisher, zero fees, all royalties are yours.
            </p>
          </div>
          <div className="max-w-[430px] text-center">
            <h2 className="eb-garamond text-4xl font-semibold flex justify-center items-baseline gap-1">
              Are you writer?{HintIcon}
            </h2>
            <p className="mt-3 roboto text-2xl font-light">
              Join the movement by uploading and selling your work to our
              marketplace.
            </p>
            <button
              onClick={() => setIsFileOpen(true)}
              className="mt-3 w-full border border-black bg-[#E4E4F0] flex justify-center items-center gap-1 p-2.5 rounded-md"
            >
              {UploadIcon}Upload Book
            </button>
          </div>
        </div>
      </div>
      {isFileOpen && (
        <EventModal isOpen={isFileOpen} setIsOpen={handleFileModalCLose} />
      )}
    </>
  );
};

export default HeroSection;
