import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavDropDown from "./NavDropDown";

const Navbar = () => {
  const [connect, setConnect] = useState(false);
  return (
    <>
      <nav className="h-[100px] px-5 py-6 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link to='/' className="flex items-center gap-3">
            <img src="/images/logo2.svg" alt="logo" width={50} height={50} />
            <h2 className="text-base font-bold">Mental Wealth Academy</h2>
          </Link>
          <div className="w-[375px] bg-white px-3 py-2 rounded-lg flex items-center gap-2">
            <img
              src="/images/search-icon.svg"
              alt="searchIcon"
              width={20}
              height={20}
            />
            <input
              type="search"
              placeholder="Search"
              className="text-sm w-full"
            />
          </div>
        </div>
        <div>
          <ul className="flex items-center gap-4 text-sm font-medium">
            <li className="py-2.5 px-4">
              <Link to="#">E-Books</Link>
            </li>
            <li className="py-2.5 px-4">
              <Link to="#">Host an Event</Link>
            </li>
            <li className="py-2.5 px-4">
              <Link to="#">Community</Link>
            </li>
            <li>
              {!connect && (
                <button
                  className="flex items-center gap-2.5 py-4 px-5 border border-black rounded-lg"
                  style={{
                    boxShadow:
                      "0px 2px 0px 0px #ACACAC80 inset, 0px -4px 0px 0px #15151540 inset",
                  }}
                  onClick={() => setConnect(true)}
                >
                  Sync Account
                  <img
                    src="/images/world-icon.svg"
                    alt="www"
                    width={16}
                    height={16}
                  />
                </button>
              )}
              {connect && <NavDropDown />}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
