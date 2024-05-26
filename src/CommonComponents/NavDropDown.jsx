import React, { useEffect, useState } from "react";
import { ArrowDown, ArrowUp, clipBoard } from "./svgs";

const NavDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropDown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown if user clicks outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".relative")) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div className="relative inline-block text-left">
        <button
          type="button"
          className="inline-flex items-center gap-2 bg-[#fbfaf8] text-sm font-medium text-[#111827] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 py-2 px-5 rounded-lg"
          onClick={handleDropDown}
        >
          <img src="/images/profile.png" alt="profile" width={41} height={41} />
          Profile
          {isOpen ? ArrowDown : ArrowUp}
        </button>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute right-0 z-10 mt-2 w-80 origin-top-right divide-y divide-gray-100 rounded-md bg-[#fbfaf8] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-8`}
        >
          {/* User Info */}
          <div className="flex items-center justify-center gap-2">
            <img
              src="/images/profile.png"
              alt="profile"
              width={76}
              height={76}
            />
            <div className="text-sm font-medium">
              <p>User Name</p>
              <p className="flex items-center">
                0x986... &nbsp;<span className="cursor-pointer">{clipBoard}</span>
              </p>
            </div>
          </div>
          <div>
            <div
              className="mt-5"
              style={{
                border: "2px solid",
                borderImageSource:
                  "radial-gradient(47.86% 37566403.65% at 52.14% 98.52%, rgba(35, 35, 35, 0.28) 0%, rgba(129, 129, 129, 0) 100%)",
                borderImageSlice: 1, // Add this to ensure the border image is applied correctly
              }}
            />
            <ul className="mt-5 flex flex-col justify-center items-center space-y-4">
                <li>Profile</li>
                <li>Settings</li>
                <li>Collection</li>
                <li>Rewards</li>
                <li>Learn</li>
                <li>Contests</li>
                <li>Documentation</li>
            </ul>
            <div
              className="mt-5"
              style={{
                border: "2px solid",
                borderImageSource:
                  "radial-gradient(47.86% 37566403.65% at 52.14% 98.52%, rgba(35, 35, 35, 0.28) 0%, rgba(129, 129, 129, 0) 100%)",
                borderImageSlice: 1, // Add this to ensure the border image is applied correctly
              }}
            />
            <ul className="mt-5 flex flex-col justify-center items-center space-y-4">
                <li>Logout</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavDropDown;
