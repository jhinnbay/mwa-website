import React, { useState } from "react";
import { motion } from "framer-motion";
import TabBody from "./TabBody";
import { book, sparkles, world } from "./SVG";
import LibraryCards from "./LibraryCards";
import EventCards from "./EventCards";
import Table from "../../Old_Home/components/Side/Table";

const NavLinks = () => {
  const [tab, setTab] = useState("library");
  const libraryTabs =
    "w-1/3 flex justify-center items-center border border-[#0d0d19] rounded-t-3xl p-4 text-xs font-semibold border-b-0 cursor-pointer";

  return (
    <>
      <div className="mx-4 mb-4">
        <div className="w-full flex">
          <div
            onClick={() => setTab("library")}
            className={
              `${libraryTabs} bg-[#46BF7E] ` +
              (tab === "library" ? "active" : "")
            }
          >
            <span>Library&nbsp;</span> {book}
          </div>
          <div
            onClick={() => setTab("event")}
            className={
              `${libraryTabs} bg-black ` + (tab === "event" ? "active" : "")
            }
          >
            <span className="text-white">Events&nbsp;</span> {world}
          </div>
          <div
            onClick={() => setTab("dao")}
            className={
              `${libraryTabs} bg-[#FF596D] ` + (tab === "dao" ? "active" : "")
            }
          >
            <span>DAO&nbsp;</span> {sparkles}
          </div>
        </div>
        {tab === "library" && (
          <div
            className="rounded-b-2xl border border-[#0d0d19]"
            style={{
              background:
                "-webkit-gradient(linear, left top, left bottom, from(#f5f5ff), to(#e1e1fe))",
              background: "linear-gradient(180deg, #f5f5ff 0%, #e1e1fe 100%)",
            }}
          >
            <TabBody>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                exit={{ opacity: 0 }}
                className="relative"
              >
                <LibraryCards />
              </motion.div>
            </TabBody>
          </div>
        )}
        {tab === "event" && (
          <div
            className="rounded-b-2xl border border-[#0d0d19]"
            style={{
              background:
                "-webkit-gradient(linear, left top, left bottom, from(#f5f5ff), to(#e1e1fe))",
              background: "linear-gradient(180deg, #f5f5ff 0%, #e1e1fe 100%)",
            }}
          >
            <TabBody>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                exit={{ opacity: 0 }}
              >
                <EventCards />
              </motion.div>
            </TabBody>
          </div>
        )}
        {tab === "dao" && (
          <div
            className="rounded-b-2xl border border-[#0d0d19]"
            style={{
              background:
                "-webkit-gradient(linear, left top, left bottom, from(#f5f5ff), to(#e1e1fe))",
              background: "linear-gradient(180deg, #f5f5ff 0%, #e1e1fe 100%)",
            }}
          >
            <TabBody>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                exit={{ opacity: 0 }}
              >
                <div className="mt-40">{Table()}</div>
              </motion.div>
            </TabBody>
          </div>
        )}
      </div>
    </>
  );
};

export default NavLinks;
