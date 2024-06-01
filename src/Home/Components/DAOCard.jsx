import React from "react";

const DAOCard = () => {
  return (
    <>
      <div className="bg-DAOcard max-w-[775px] h-[413px] p-9">
        <h2 className="text-4xl text-white font-semibold">
          Get involved and shape <br />
          The Academy’s future.
        </h2>
        <p className="text-2xl text-white font-medium mt-8">
          The DAO is a key component of the ecosystem and it is the consensus
          mechanism for defining the resolutions of MWA’s Organization.
          Participate in the DAO and make your voice heard.
        </p>
        <div className="mt-10 flex gap-8">
            <button className="py-4 px-6 rounded-xl bg-white text-[#7B81D6] font-semibold">JOIN OUR DISCORD</button>
            <button className="py-4 px-6 rounded-xl border border-white bg-transparent text-white font-semibold">READ OUR DOCS</button>
        </div>
      </div>
    </>
  );
};

export default DAOCard;
