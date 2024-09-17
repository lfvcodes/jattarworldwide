import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import Contact from "../components/landing/Contact";
import About from "../components/landing/AboutUs";
import Our from "../components/landing/Ourservice";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export const Inicio = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

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
