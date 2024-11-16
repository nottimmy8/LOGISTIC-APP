import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Service from "./components/servicee/Service";
import Howtosend from "./components/howtosend/Howtosend";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <Hero />
        <Service />
        <Howtosend />
      </div>
    </div>
  );
};

export default App;
