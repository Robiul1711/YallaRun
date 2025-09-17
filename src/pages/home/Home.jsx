
import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import JoinSection from "@/components/home/JoinSection";
import LatestArticle from "@/components/home/LatestArticle";
import MeetOurCoaches from "@/components/home/MeetOurCoaches";
import Pricing from "@/components/home/Pricing";
import RunningEvent from "@/components/home/RunningEvent";
import React from "react";

const Home = () => {
  return (
    <div>
      <Banner />
      <About/>
      <RunningEvent/>
      <LatestArticle/>
      <MeetOurCoaches/>
      <Pricing/>
      <JoinSection/>
    </div>
  );
};

export default Home;
