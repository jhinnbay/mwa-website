import React, { useState } from "react";
import {
  audioIcon,
  cardDownloadIcon,
  helpIcon,
  pagesIcon,
  subjectIcon,
} from "./SVG";
import { NonFiction, eCourses, resources } from "./constraint";
import DetailPage from "./DetailPage";

const BookCards = () => {
  const [detailPageOpen, setDetailPageOpen] = useState(false);

  const handleDetailPage = () => {
    setDetailPageOpen(!detailPageOpen);
  };
  return (
    <>
      <div
        className={`p-4 h-[910px] relative overflow-y-auto overflow-x-hidden}`}
      >
        {/* NON-Fiction */}
        <div>
          <h2 className="mt-6 text-5xl font-semibold text-[#8E8E93] text-start">
            Non-Fiction
          </h2>
          <ul className="mt-10 flex justify-center flex-wrap items-center gap-10">
            {NonFiction.map((item, index) => (
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
                  <button
                    onClick={handleDetailPage}
                    className="w-full bg-[#46BF7E] flex justify-center items-center gap-2.5 p-2.5 mt-3 rounded-md border border-black"
                  >
                    {cardDownloadIcon}Download
                  </button>
                  <button className="w-full bg-white flex justify-center items-center gap-2.5 p-2.5 mt-3 rounded-md border border-black">
                    CID: <span>{item.CID}</span>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* E-Courses */}
        <div>
          <h2 className="mt-6 text-5xl font-semibold text-[#8E8E93] text-start">
            E-Courses
          </h2>
          <ul className="mt-10 flex justify-center flex-wrap items-center gap-10">
            {eCourses.map((item, index) => (
              <li key={index} className="min-w-[300px]">
                <div
                  className="bg-[#BFC2B1] border border-[#090909] p-1.5 rounded-lg"
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
                  <button
                    onClick={handleDetailPage}
                    className="w-full bg-[#46BF7E] flex justify-center items-center gap-2.5 p-2.5 mt-3 rounded-md border border-black"
                  >
                    {cardDownloadIcon}Download
                  </button>
                  <button className="w-full bg-white flex justify-center items-center gap-2.5 p-2.5 mt-3 rounded-md border border-black">
                    CID: <span>{item.CID}</span>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* Resources */}
        <div>
          <h2 className="mt-6 text-5xl font-semibold text-[#8E8E93] text-start">
            Resources
          </h2>
          <ul className="mt-10 flex justify-center flex-wrap items-center gap-10">
            {resources.map((item, index) => (
              <li key={index} className="min-w-[300px]">
                <div
                  className="bg-[#BFC2B1] border border-[#090909] p-1.5 rounded-lg"
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
                  <button
                    onClick={handleDetailPage}
                    className="w-full bg-[#8B81FF] flex justify-center items-center gap-2.5 p-2.5 mt-3 rounded-md border border-black"
                  >
                    {cardDownloadIcon}Download
                  </button>
                  <button className="w-full bg-white flex justify-center items-center gap-2.5 p-2.5 mt-3 rounded-md border border-black">
                    CID: <span>{item.CID}</span>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* Articles */}
        <div>
          <h2 className="mt-6 text-5xl font-semibold text-[#8E8E93] text-start">
            Scientific Articles
          </h2>
          <ul className="mt-10 flex justify-center flex-wrap items-center gap-10">
            {resources.map((item, index) => (
              <li key={index} className="min-w-[300px]">
                <div
                  className="bg-[#BFC2B1] border border-[#090909] p-1.5 rounded-lg"
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
                  <button
                    onClick={handleDetailPage}
                    className="w-full bg-[#96C6FF] flex justify-center items-center gap-2.5 p-2.5 mt-3 rounded-md border border-black"
                  >
                    {cardDownloadIcon}Download
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
      <DetailPage
        detailPageOpen={detailPageOpen}
        setDetailPageOpen={setDetailPageOpen}
      />
    </>
  );
};

export default BookCards;
