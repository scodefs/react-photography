import React from "react";
import Hero from "./sections/Hero";
import Button from "./components/Button";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Services from "./sections/Services";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="">
      <Hero />
      <NavBar />
      <About />
      <Portfolio />
      <Services />
    </div>
  );
};

export default App;
