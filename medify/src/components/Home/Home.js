import React from "react";
import { HeaderContainer } from "./HomeStyle";
import SectionOne from "../Section/SectionOne/SectionOne";
import SectionFour from "../Section/SectionFour/SectionFour";
import SectionThree from "../Section/SectionThree/SectionThree";
import SectionFive from "../Section/SectionFive/SectionFive";
import SectionSix from "../Section/SectionSix/SectionSix";
import SectionSeven from "../Section/SectionSeven/SectionSeven";
import SectionEight from "../Section/SectionEight/SectionEight";
import SectionNine from "../Section/SectionNine/SectionNine";
import SectionTen from "../Section/SectionTen/SectionTen";
import SectionEleven from "../Section/SectionEleven/SectionEleven";

const Home = () => {
  return (
    <HeaderContainer>
      <div className='container'>
        <SectionOne />
      </div>
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <SectionNine />
      <SectionTen />
      <SectionEleven />
    </HeaderContainer>
  );
};

export default Home;
