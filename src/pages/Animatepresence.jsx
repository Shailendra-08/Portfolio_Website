import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Resume from "./components/Resume";

function AnimateRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Resume />} />

      </Routes>
    </AnimatePresence>
  );
}

export default AnimateRoutes;
