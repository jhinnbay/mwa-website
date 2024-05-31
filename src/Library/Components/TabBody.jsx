import React from "react";
import SideSection from "./SideSection";
import FourButtons from "../../CommonComponents/FourButtons";

const TabBody = ({ children }) => {
  return (
    <>
      <FourButtons />
      <div className="flex items-start h-full">
        <SideSection />
        <div className="w-full">{children}</div>
      </div>
    </>
  );
};

export default TabBody;
