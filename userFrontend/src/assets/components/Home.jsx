import React from "react";
import Hero from "./home/Hero";
import RoomTypes from "./home/RoomTypes";
import Testimonials from "./home/Testimonials";
import OffersHero from "./home/OffersHero";
import SubscribeInfo from "./home/SubscribeInfo";

const Home = () => {
  return (
    <>
      <Hero />
      <RoomTypes />
      <OffersHero />
      <Testimonials />
      <SubscribeInfo />
    </>
  );
};

export default Home;
