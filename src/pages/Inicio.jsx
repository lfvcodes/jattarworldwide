import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import Contact from "../components/landing/Contact";
import About from "../components/landing/AboutUs";
import Our from "../components/landing/Ourservice";
export const Inicio = () => {
  return (
    <div>
      <Nav />
      <br />
      <br />
      <Hero />
      <Features />
      <Contact />
      <About />
      <Our />
      <Footer />
    </div>
  );
};

export default Inicio;
