import React, { useEffect, useState } from "react";
import CustomModal from "../../CommonComponents/CustomModal";
import { starIcon } from "./SVG";
import { ClipLoader } from "react-spinners";

const MemberShipCard = ({ isOpen, setIsOpen }) => {
  const [Loading, setLoading] = useState(false);

  const handleLoading = () => {
    setLoading(true);
  };

  useEffect(() => {
    if (Loading) {
      setTimeout(() => {
        setLoading(false);
        setIsOpen(false);
      }, 3000);
    }
  }, [Loading, setIsOpen]);

  return (
    <>
      <CustomModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        ModalWidth={"w-[1390px]"}
      >
        <div className="flex flex-col items-center w-full text-center pt-10 px-10 pb-2">
          <h2 className="text-[42px] font-medium text-[#454545]">
            NFT MEMBERSHIP CARD
          </h2>
          <div className="mt-4 w-fit border border-[#D3D3D3] bg-[#FFFFFF14] py-2 px-4 rounded-[20px] flex items-center gap-2">
            {starIcon} A Lifetime of Leaning & Experience
          </div>
          <h3 className="mt-4 text-[32px] font-medium text-[#454545]">
            Price: $20 (0.002 ETH)
          </h3>
          <img
            src="/images/LibraryCard.png"
            alt="LibraryCard"
            className="mt-4"
          />
          {!Loading ? (
            <button
              onClick={handleLoading}
              className="min-w-[340px] rounded-md h-10 text-white mt-24"
              style={{
                background: "linear-gradient(180deg, #222225 0%, #15151B 100%)",
              }}
            >
              <p>Purchase Library Card</p>
            </button>
          ) : (
            <ClipLoader color="#36d7b7" className="mt-24 " />
          )}
          <span className="mt-14 h-1 w-32 bg-[#454545] rounded-2xl" />
        </div>
      </CustomModal>
    </>
  );
};

export default MemberShipCard;
