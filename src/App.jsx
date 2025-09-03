import React from "react";
import Hero from "./sections/Hero";
import Button from "./components/Button";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Services from "./sections/Services";
import NavBar from "./components/NavBar";
import Testimonials from "./sections/Testimonials";

const App = () => {
  return (
    <div className="">
      <Hero />
      <NavBar />
      <About />
      <Portfolio />
      <Testimonials />
      <Services />
    </div>
  );
};

export default App;
