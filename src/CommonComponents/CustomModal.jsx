import React from "react";
import { closeIcon } from "./svgs";

const CustomModal = ({ isOpen, setIsOpen, children }) => {
  return (
    <>
      <div className={` ${isOpen === true ? "block" : "hidden"}`}>
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="p-20 flex flex-col justify-center items-center fixed inset-0 z-10 w-full min-h-full">
          <div className="relative bg-[#E4E4F0] rounded-lg w-full">
            {children}
            <span
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 cursor-pointer"
            >
              {closeIcon}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomModal;
