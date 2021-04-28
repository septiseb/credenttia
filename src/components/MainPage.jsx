import React from "react";
import MainSectionTop from "./Landing/MainSectionTop";
import MainSectionBottom from "./Landing/MainSectionBottom";
import Footer from "./Landing/Footer";
import Benefits from "./Landing/Benefits";

export default function MainPage(props) {

  const { showPopUpForm } = props 

  return (
    <>
      <MainSectionTop showPopUpForm={showPopUpForm} />
      <Benefits />
      <MainSectionBottom showPopUpForm ={showPopUpForm} />
      <Footer />
    </>
  );
}
