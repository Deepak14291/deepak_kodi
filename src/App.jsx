import { Route, Routes, useLocation } from "react-router-dom";

import { Homepage } from "./pages/Homepage"
import { Skills } from "./pages/Skills";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Projects } from "./pages/Projects";
import { Experience } from "./pages/Experience";

import { Mazda } from "./pages/projects/Mazda";
import { Tesla } from "./pages/projects/Tesla";
import AboutMore from "./pages/AboutMore";
import WeatherVista from "./pages/projects/WeatherVista";
import ScrollToTop from "./components/ScrollToTop";
import { MetroEvents } from "./pages/projects/MetroEvents";
import PageWrapper from "./components/ui/PageWrapper";
import { AnimatePresence } from 'framer-motion';
import { AppNav } from "./components/AppNav";
import Lenis from 'lenis'


function App() {
  const location = useLocation();
  new Lenis({
    autoRaf: true,
  });

  return (
    <>

      <ScrollToTop />
      <AppNav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname} >
          <Route index element={<PageWrapper><Homepage /></PageWrapper>}></Route>
          <Route path="about" element={<PageWrapper><About /></PageWrapper>}></Route>
          <Route path="about/readmore" element={<PageWrapper><AboutMore /></PageWrapper>}></Route>
          <Route path="experience" element={<PageWrapper><Experience /></PageWrapper>}></Route>
          <Route path="skills" element={<PageWrapper><Skills /></PageWrapper>}></Route>
          <Route path="projects" element={<PageWrapper><Projects /></PageWrapper>}></Route>
          <Route path="projects/mazda" element={<Mazda />} ></Route>
          <Route path="projects/tesla" element={<Tesla />} ></Route>
          <Route path="projects/weather-vista" element={<WeatherVista />} ></Route>
          <Route path="projects/metro-events" element={<MetroEvents />} ></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Routes>
      </AnimatePresence>

    </>
  )
}

export default App
