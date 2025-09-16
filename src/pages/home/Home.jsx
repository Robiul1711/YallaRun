
import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import RunningEvent from "@/components/home/RunningEvent";
import React from "react";

const Home = () => {
  return (
    <div>
      <Banner />
      <About/>
      <RunningEvent/>
    </div>
  );
};

export default Home;
