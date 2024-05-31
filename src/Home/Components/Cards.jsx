import React from "react";

const Cards = () => {
  return (
    <>
      <div className="relative mb-5">
        <ul className="relative z-10 mx-auto flex justify-center gap-5 flex-wrap">
          <li className=" bg-earth rounded-t-xl">
            <div className="max-w-[450px] h-[400px] roboto">
              <h2 className="text-white text-[42px] font-bold px-7 pt-7">
                Buy Membership <br />
                Get Tokens
              </h2>
              <div className="mt-14 border-t border-[#9C9C9C] backdrop-blur-xl">
                <p className="text-white leading-tight text-base px-5 pt-3.5 pb-14">
                  NFT Membership to break into the buzzing NFT and DAO token
                  scene. Forget sitting on the sidelines - it's your ticket to
                  own unique digital art, vote on the stuff that matters, and
                  scoop up hot perks. Grab a membership, score some tokens and
                  let's rock the digital world together! Get in - it's go time.
                </p>
              </div>
            </div>
          </li>
          <li className="max-w-[450px] h-[400px] roboto bg-forest rounded-t-xl">
            <h2 className="text-white text-[42px] font-bold px-7 pt-7">
              Decentralized
              <br />
              Ownership
            </h2>
            <div className="mt-14 border-t border-[#9C9C9C] backdrop-blur-xl">
              <p className="text-white leading-tight text-base px-5 pt-3.5 pb-14">
                No bosses, no hierarchy - review, manage, and decide
                collaboratively. Get your words heard and actions noticed. It's
                not just about consuming content, it's about curating it too!
                Step into this cyber-cool reality with us. Ready to create and
                manage on your own rules? Here's your chance!
              </p>
            </div>
          </li>
          <li className="max-w-[450px] h-[400px] roboto bg-smoke rounded-t-xl">
            <h2 className="text-white text-[42px] font-bold px-7 pt-7">
              Interactive <br />
              Learning
            </h2>
            <div className="mt-14 border-t border-[#9C9C9C] backdrop-blur-xl">
              <p className="text-white leading-tight text-base  px-5 pt-3.5 pb-3">
                Experience a unique way of learning with our interactive modules
                designed to suit your pace. Delve into discussions,
                problem-solve in a supportive environment, and share your
                journey with a community as curious as you. Plus, as you grow,
                so do the rewards - our incentivized system means your progress
                equals perks. It's not just about knowledge, it's a rewarding
                experience. Dive in and let's learn together.
              </p>
            </div>
          </li>
        </ul>
        <div className="hidden md:block absolute left-20 -top-20">
          <img src="/images/home-bg3.png" alt="bg" />
        </div>
        <div className="absolute right-0 -top-72 ">
          <img src="/images/home-bg2.png" alt="bg" />
        </div>
      </div>
    </>
  );
};

export default Cards;
