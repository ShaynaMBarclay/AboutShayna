//import { useState } from 'react'
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AboutMe from "./assets/pages/AboutMe";
import Blog from "./assets/pages/Blog";
import Contact from "./assets/pages/Contact";
import HomePage from "./assets/pages/HomePage";
import Projects from "./assets/pages/Projects";
import Skills from "./assets/pages/Skills";
import Footer from "./assets/components/Footer";
import Navbar from "./assets/components/Navbar";
import SkillBadge from "./assets/components/SkillBadge";
//import { useEffect, useState } from "react";
//import axios from "axios";

function App() {
  return (
    <>
    <Navbar className="navbar" />

    <main>
    <h1>Shayna's Resume</h1>
    
        <Routes>
          <Route path= "/" element={<HomePage />} />
          <Route path= "/about-me" element={<AboutMe />} />
          <Route path= "/blog" element={<Blog />} />
          <Route path= "/contact" element={<Contact />} />
          <Route path = "/projects" element={<Projects />} />
          <Route path = "/skills" element={<Skills />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
