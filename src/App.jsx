import "./App.css";
import { Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
    <Navbar />

    <main>
        <Routes>
          <Route path= "/" element={<HomePage />} />
          <Route path= "/about-me" element={<AboutMe />} />
          <Route path= "/contact" element={<Contact />} />
          <Route path = "/projects" element={<Projects />} />
          <Route path = "/skills" element={<Skills />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
