import React from "react";
import DAOCard from "./DAOCard";

const CommunitySection = () => {
  return (
    <>
    <div className="mx-10">
      <h2 className="eb-garamond text-5xl font-bold my-10">Community Activities</h2>
      <div className="">
        <DAOCard />
        {/* <img src="/images/Community-BG.png" alt="" /> */}
      </div>
    </div>
    </>
  );
};

export default CommunitySection;
