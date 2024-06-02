import React from "react";
import { Authors } from "./Constraint";
import { CirclePlusIcon, WalletIcon } from "./svg";

const FeatureAuthor = () => {
  return (
    <>
      <div className="mt-12">
        <h2 className="eb-garamond text-[#646464] text-6xl">
          Featured Author’s
        </h2>
        <div className="mb-10">
          <div className="float-right max-w-[660px] w-full ml-20 border-b border-x border-black rounded-2xl">
            <div className="flex justify-between items-center bg-[#1B1B1B] p-6 rounded-t-2xl border-b border-[#323232]">
              <h2 className="roboto font-medium text-white text-2xl ">
                Onboarding Checklist
              </h2>
              <img src="/images/ArrowDown.png" alt="arrow" />
            </div>
            <div className="flex justify-between px-6 py-4 bg-[#1B1B1B] text-white">
              <div>
                <h3 className="roboto text-2xl font-medium">
                  Get $WEALTH Tokens to upload
                  <br /> to the Marketplace
                </h3>
                <p className="roboto mt-3 text-lg font-medium">
                  Need help? Invite a friend for FREE tokens
                  <br /> or join our telegram to chat and get your
                  <br /> account set up.
                </p>
                <button className="roboto w-fit mt-3 px-3 py-1.5 bg-white rounded-lg flex justify-center items-center gap-2 text-black">
                  {CirclePlusIcon} Join Telegram
                </button>
              </div>
              <div className="mx-auto relative">
                <img
                  src="/images/mwa_logo.png"
                  alt="mwa"
                  width={150}
                  height={150}
                />
                <div className="roboto w-36 px-3 py-2.5 bg-white text-[#29BFFF] text-sm font-medium uppercase rounded-lg absolute bottom-10 left-0 right-0 mx-auto text-center">
                  <span>25</span>% COMPLETED
                </div>
              </div>
            </div>
            <div className="p-8">
              <ul className="space-y-3">
                <li className="group roboto px-2.5 py-6 bg-[#F4F5FE] flex items-center justify-between gap-6 rounded-xl font-medium text-lg border border-white hover:border-black">
                  <div className="flex justify-start items-center gap-6">
                    {WalletIcon} Choose A Crypto Wallet For Account
                  </div>
                  <button className="w-[120px] py-3 px-4 rounded-2xl bg-white group-hover:bg-black group-hover:text-white text-black border border-black">
                    Start
                  </button>
                </li>
                <li className="group roboto px-2.5 py-6 bg-[#F4F5FE] flex items-center justify-between gap-6 rounded-xl font-medium text-lg border border-white hover:border-black">
                  <div className="flex justify-start items-center gap-6">
                    {WalletIcon} Set-Up a Writer’s Profile
                  </div>
                  <button className="w-[120px] py-3 px-4 rounded-2xl bg-white group-hover:bg-black group-hover:text-white text-black border border-black">
                    Start
                  </button>
                </li>
                <li className="group roboto px-2.5 py-6 bg-[#F4F5FE] flex items-center justify-between gap-6 rounded-xl font-medium text-lg border border-white hover:border-black">
                  <div className="flex justify-start items-center gap-6">
                    {WalletIcon} Upload something you’ve written
                  </div>
                  <button className="w-[120px] py-3 px-4 rounded-2xl bg-white group-hover:bg-black group-hover:text-white text-black border border-black">
                    Start
                  </button>
                </li>
                <li className="group roboto px-2.5 py-6 bg-[#F4F5FE] flex items-center justify-between gap-6 rounded-xl font-medium text-lg border border-white hover:border-black">
                  <div className="flex justify-start items-center gap-6">
                    {WalletIcon} Connect with our community
                  </div>
                  <button className="w-[120px] py-3 px-4 rounded-2xl bg-white group-hover:bg-black group-hover:text-white text-black border border-black">
                    Start
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <ul className="h-[840px] mt-10 flex flex-wrap justify-between overflow-y-auto overflow-x-hidden">
            {Authors.map((item) => {
              return (
                <li key={item.key} className="max-w-[230px] mb-10">
                  <img src={item.bookImage} alt={item.bookImage} />
                  <h2 className="eb-garamond mt-3 text-4xl">{item.title}</h2>
                  <p className="roboto mt-3 text-2xl font-normal">
                    {item.author}
                  </p>
                  <div className="w-fit mt-3 px-3 py-0.5 roboto text-sm text-white bg-[#5F6FF9] rounded-2xl border border-[#ACE1E8]">
                    {item.price}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default FeatureAuthor;
