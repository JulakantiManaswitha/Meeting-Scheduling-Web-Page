
import React from "react";
import BottomSection from "./components/BottomSection";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";

 

const App = () => {

  return (
    <div className="bg-blue-full w-full h-screen">

      <Nav />

      <HeroSection />

      <Section1 />

      <Section2 />

      <Section3 />

      <Section4 />

      <Feedback />

      <BottomSection />

      <Footer />
      </div>
  )
  }
export default App;


