import React from "react";
import Tab from "./Tab";
import Chat from "./Chat";
import Faq from "./Faq";

export default function Side() {
  return (
    <div className="layoutSide">
      <Tab />
      <Chat />
      <Faq />
 
    </div>
  );
}
