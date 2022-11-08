import React, { useContext, useRef } from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import WrapperContainer from "../WrapperContainer/WrapperContainer";
import MidFilterSection from "../MidSection/MidFilterSection";
import MidComponentParent from "../MidSection/MidComponentParent";
import TabsComponent from "../MidSection/TabsComponent";
import FurnitureFlow from "../MidSection/FurnitureFlow";
import NewsLetter from "../MidSection/NewsLetter";
import Cards from "../MidSection/Cards";
import Footer from "../Footer/Footer";
import PopUpButton from "../PopUpButton/PopUpButton";
import { ThemeBgContext } from "../ContextWrapper/ThemeContext";
import MobileNav from "../Navbar/MobileNav";

const Home = () => {
  const sectionTop = useRef();
  const { theme } = useContext(ThemeBgContext);
  const handleScroll = () => {
    sectionTop.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="relative">
      <MobileNav></MobileNav>
      <div>
        <PopUpButton handleScroll={handleScroll}></PopUpButton>
      </div>
      <div className={theme === "light" ? "bg-white" : "bg-dark"}>
        <WrapperContainer navHead>
          <Navbar></Navbar>
          <Header topRef={sectionTop}></Header>
        </WrapperContainer>
      </div>
      <div className="bg-gray-100 w-full">
        <WrapperContainer>
          <MidFilterSection></MidFilterSection>
          <MidComponentParent></MidComponentParent>
          <TabsComponent></TabsComponent>
          <FurnitureFlow></FurnitureFlow>
          <Cards></Cards>
          <NewsLetter></NewsLetter>
        </WrapperContainer>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};
export default Home;
