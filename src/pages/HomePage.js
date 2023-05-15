import React from "react";
import Navbar from "../components/Navbar/Navbar";
import MainSection from "../components/MainSection/MainSection";
import CardSection from "../components/CardSection/CardSection";
import SharingSection from "../components/SharingSection/SharingSection";
import BannerSection from "../components/BannerSection/BannerSection";
import SupportSection from "../components/SupportSection/SupportSection";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <MainSection/>
      <CardSection/>
      <SharingSection/>
      <BannerSection/>
      <SupportSection/>
    </>
  );
};

export default HomePage;
