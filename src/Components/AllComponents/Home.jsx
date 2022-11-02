import React, { useContext } from "react";
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

const Home = () => {
  const { theme } = useContext(ThemeBgContext);
  return (
    <div className="relative">
      <div className="fixed right-4 bottom-2 z-20">
        <PopUpButton></PopUpButton>
      </div>
      <div className={theme === "light" ? "bg-white" : "bg-dark"}>
        <WrapperContainer navHead>
          <Navbar></Navbar>
          <Header></Header>
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
