import React from "react";
import SideSection from "./SideSection";

const TabBody = ({ children }) => {
  return (
    <>
      <div className="flex items-start h-[110vh]">
        <div className="w-full">{children}</div>
        <SideSection />
      </div>
    </>
  );
};

export default TabBody;
