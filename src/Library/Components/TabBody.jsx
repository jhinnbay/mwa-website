import React from "react";
import SideSection from "./SideSection";

const TabBody = ({ children }) => {
  return (
    <>
      <div className="flex items-start h-full">
        <div className="w-full">{children}</div>
        <SideSection />
      </div>
    </>
  );
};

export default TabBody;
