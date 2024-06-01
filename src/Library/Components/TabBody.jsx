import React from "react";
import SideSection from "./SideSection";
import FourButtons from "../../CommonComponents/FourButtons";

const TabBody = ({ children }) => {
  return (
    <>
      <FourButtons />
      <div className="flex items-start h-full">
        <SideSection />
        <div className="w-full">
        <h2 className="text-5xl font-semibold mb-2">Library</h2>
        <div className="w-full">{children}</div>
        </div>
      </div>
    </>
  );
};

export default TabBody;
