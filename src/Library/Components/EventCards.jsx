import React from "react";
import {
  audioIcon,
  connectIcon,
  helpIcon,
  pagesIcon,
  subjectIcon,
} from "./SVG";
import {
  InPerson,
  NonFiction,
  eCourses,
  resources,
  virtual,
} from "./constraint";

const EventCards = () => {
  return (
    <div className="p-4 h-[110vh] overflow-x-hidden overflow-y-auto">
      {/* virtual */}
      <div>
        <h2 className="mt-6 text-5xl font-semibold text-[#8E8E93] text-end">
          Virtual
        </h2>
        <ul className="mt-10 flex justify-center flex-wrap items-center gap-10">
          {virtual.map((item, index) => (
            <li key={index} className="min-w-[300px]">
              <div
                className="bg-[#848AA840] border border-[#090909] p-1.5 rounded-lg"
                style={{ boxShadow: "0px 4px 0px 0px #000000" }}
              >
                <img
                  src={item.cardImage}
                  alt={item.title}
                  className="w-full object-cover h-[208px]"
                />
                <div className="px-3">
                  <div className="mt-2.5 flex items-center justify-between">
                    <h3 className="text-sm truncate">{item.title}</h3>
                    <span>{helpIcon}</span>
                  </div>
                </div>
                <ul className="mt-2.5 w-full grid grid-cols-3">
                  {item.date && (
                    <li className="flex flex-col justify-center items-center">
                      <span>{pagesIcon}</span>
                      <p className="text-[8px]">{item.date}</p>
                    </li>
                  )}
                  {item.ipfs && (
                    <li className="flex flex-col justify-center items-center">
                      <span>{pagesIcon}</span>
                      <p className="text-[8px]">{item.ipfs}</p>
                    </li>
                  )}
                  {item.arweave && (
                    <li className="flex flex-col justify-center items-center">
                      <span>{pagesIcon}</span>
                      <p className="text-[8px]">{item.arweave}</p>
                    </li>
                  )}
                  {item.audio && (
                    <li className="flex flex-col justify-center items-center">
                      <span>{audioIcon}</span>
                      <p className="text-[8px]">{item.audio}</p>
                    </li>
                  )}
                  {item.pages && (
                    <li className="flex flex-col justify-center items-center">
                      <span>{pagesIcon}</span>
                      <p className="text-[8px]">{item.pages}</p>
                    </li>
                  )}
                  {item.subject && (
                    <li className="flex flex-col justify-center items-center">
                      <span>{subjectIcon}</span>
                      <p className="text-[8px]">{item.subject}</p>
                    </li>
                  )}
                </ul>
              </div>
              <div>
                <button className="w-full bg-black text-white flex justify-center items-center gap-2.5 p-2.5 mt-3 rounded-md border border-black">
                  {connectIcon}Connect
                </button>
                <button className="w-full bg-white flex justify-center items-center gap-2.5 p-2.5 mt-3 rounded-md border border-black">
                  CID: <span>{item.CID}</span>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* In-Person */}
      <div>
        <h2 className="mt-6 text-5xl font-semibold text-[#8E8E93] text-end">
          In-Person
        </h2>
        <ul className="mt-10 flex justify-center flex-wrap items-center gap-10">
          {InPerson.map((item, index) => (
            <li key={index} className="min-w-[300px]">
              <div
                className="bg-[#848AA840] border border-[#090909] p-1.5 rounded-lg"
                style={{ boxShadow: "0px 4px 0px 0px #000000" }}
              >
                <img
                  src={item.cardImage}
                  alt={item.title}
                  className="w-full object-cover h-[208px]"
                />
                <div className="px-3">
                  <div className="mt-2.5 flex items-center justify-between">
                    <h3 className="text-sm truncate">{item.title}</h3>
                    <span>{helpIcon}</span>
                  </div>
                </div>
                <ul className="mt-2.5 w-full grid grid-cols-3">
                  {item.date && (
                    <li className="flex flex-col justify-center items-center">
                      <span>{pagesIcon}</span>
                      <p className="text-[8px]">{item.date}</p>
                    </li>
                  )}
                  {item.ipfs && (
                    <li className="flex flex-col justify-center items-center">
                      <span>{pagesIcon}</span>
                      <p className="text-[8px]">{item.ipfs}</p>
                    </li>
                  )}
                  {item.arweave && (
                    <li className="flex flex-col justify-center items-center">
                      <span>{pagesIcon}</span>
                      <p className="text-[8px]">{item.arweave}</p>
                    </li>
                  )}
                  {item.audio && (
                    <li className="flex flex-col justify-center items-center">
                      <span>{audioIcon}</span>
                      <p className="text-[8px]">{item.audio}</p>
                    </li>
                  )}
                  {item.pages && (
                    <li className="flex flex-col justify-center items-center">
                      <span>{pagesIcon}</span>
                      <p className="text-[8px]">{item.pages}</p>
                    </li>
                  )}
                  {item.subject && (
                    <li className="flex flex-col justify-center items-center">
                      <span>{subjectIcon}</span>
                      <p className="text-[8px]">{item.subject}</p>
                    </li>
                  )}
                </ul>
              </div>
              <div>
                <button className="w-full bg-black text-white flex justify-center items-center gap-2.5 p-2.5 mt-3 rounded-md border border-black">
                  {connectIcon}Connect
                </button>
                <button className="w-full bg-white flex justify-center items-center gap-2.5 p-2.5 mt-3 rounded-md border border-black">
                  CID: <span>{item.CID}</span>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EventCards;
