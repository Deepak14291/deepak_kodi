import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Homepage } from "./pages/Homepage"
import { Skills } from "./pages/Skills";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Projects } from "./pages/Projects";
import { Experience } from "./pages/Experience";

import { Mazda } from "./pages/projects/Mazda";
import { Tesla } from "./pages/projects/Tesla";
import AboutMore from "./pages/AboutMore";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="about/readmore" element={<AboutMore />}></Route>

          <Route path="experience" element={<Experience />}></Route>
          <Route path="skills" element={<Skills />}></Route>
          <Route path="projects" element={<Projects />}>

          </Route>
          <Route path="projects/mazda" element={<Mazda />} ></Route>
          <Route path="projects/tesla" element={<Tesla />} ></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
