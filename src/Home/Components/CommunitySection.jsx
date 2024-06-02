import React from "react";
import DAOCard from "./DAOCard";
import TokenSwapping from "./TokenSwapping";

const CommunitySection = () => {
  return (
    <>
    <div className="mx-10">
      <h2 className="eb-garamond text-5xl font-bold my-10">Community Activities</h2>
      <div className="mb-10 flex justify-between">
        <DAOCard />
        <TokenSwapping />
      </div>
    </div>
    </>
  );
};

export default CommunitySection;
