import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Service from "./components/Service";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <Hero />
        <Service />
      </div>
    </div>
  );
};

export default App;
