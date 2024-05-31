import React from "react";

const FourButtons = () => {
  return (
    <>
      <ul className="flex flex-wrap justify-around items-center gap-4 mb-5">
        <li>
          <button className="eb-garamond w-[333px] h-[107px] flex items-center justify-center gap-4 text-2xl font-bold text-white bg-[#454558] rounded-lg">
            <img src="/images/Blockchain.png" alt="Blockchain" />
            Education
          </button>
        </li>
        <li>
          <button className="eb-garamond w-[333px] h-[107px] flex items-center justify-center gap-4 text-2xl font-bold text-white bg-[#454558] rounded-lg">
            <img
              src="/images/PeopleWorkingTogether.png"
              alt="PeopleWorkingTogether"
            />
            DAO Membership
          </button>
        </li>
        <li>
          <button className="eb-garamond w-[333px] h-[107px] flex items-center justify-center gap-4 text-2xl font-bold text-white bg-[#454558] rounded-lg">
            <img src="/images/Cheque.png" alt="Cheque" />
            Financial Education
          </button>
        </li>
        <li>
          <button className="eb-garamond w-[333px] h-[107px] flex items-center justify-center gap-4 text-2xl font-bold text-white bg-[#454558] rounded-lg">
            <img src="/images/BlockBreaker.png" alt="BlockBreaker" />
            Crypto Library
          </button>
        </li>
      </ul>
    </>
  );
};

export default FourButtons;
