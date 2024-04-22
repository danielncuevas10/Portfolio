import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

import React, { useEffect } from 'react';



function App() {

  useEffect(() => {
    document.title = "Daniel Navarrete";
  }, []); // This useEffect hook will run once when the component mounts


  return (
    <div className="App">
    <Navbar/>
    <Hero/>
    <Skills/>
    <About/>
    <Work/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
