import React from "react";
import "./App.css";
import Avatar from "./sections/Avatar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutMe from "./sections/AboutMe";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";

function App() {
  return (
    <>
      <Header />
      <Avatar />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
      </>
  );
}

export default App;
