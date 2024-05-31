import React from "react";
import TableContent from "./Components/TableContent";
import HeroSection from "./Components/HeroSection";
import Cards from "./Components/Cards";
import FourButtons from "../CommonComponents/FourButtons";

const Home = () => {
  return (
    <>
      <HeroSection />
      <TableContent />
      <Cards />
      <FourButtons />
    </>
  );
};

export default Home;
