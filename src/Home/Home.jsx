import React from "react";
import TableContent from "./Components/TableContent";
import HeroSection from "./Components/HeroSection";
import Cards from "./Components/Cards";
import FourButtons from "../CommonComponents/FourButtons";
import CommunitySection from "./Components/CommunitySection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <TableContent />
      <Cards />
      <FourButtons />
      <CommunitySection />
    </>
  );
};

export default Home;
