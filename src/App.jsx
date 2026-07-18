import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import "./css/app.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./page/Home";
import Apropos from "./page/Apropos";
import Experiences from "./page/Experiences";
import Blog from "./page/Blog";
import Projet from "./page/Projet";
import AllProjets from "./page/AllProjets";
import Boxes3dBackground from "./page/miniprojet/Boxes3dBackground";
import Compteur from "./page/miniprojet/Compteur";
import Navigation from "./page/miniprojet/Navigation";
import AutoText from "./page/miniprojet/AutoText";
import ButtonRipple from "./page/miniprojet/ButtonRipple";
import DragAndDrop from "./page/miniprojet/DragAndDrop";
import HoverBoard from "./page/miniprojet/HoverBoard";
import Incrementation from "./page/miniprojet/Incrementation";
import FormWave from "./page/miniprojet/FormWave";
import Message from "./page/Message";
import ScrollToTop from "./components/scrollToTop";
import NotPage from "./page/NotPage";
// import AOS from "aos";
// import "aos/dist/aos.css";

function App() {
  const ref = useRef();
  const handleMode = () => {
    ref.current.classList.toggle("change");
  };
  const [imaPop, setimaPop] = useState("");
  const handlePop = (e) => {
    setimaPop(e.target.src);
    document.body.classList.add("is-imapop");
  };

  const handleClose = () => {
    setimaPop("");
    document.body.classList.remove("is-imapop");
  };
  // useEffect(() => {
  //   AOS.init();
  // }, []);
  return (
    <div ref={ref} className="bodyFont w-full text-[#111] max-w-full mx-auto">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout handleMode={handleMode} />}>
          <Route
            index
            element={
              <Home
                handlePop={handlePop}
                imaPop={imaPop}
                handleClose={handleClose}
              />
            }
          />
          <Route
            path="/apropos"
            element={
              <Apropos
                handlePop={handlePop}
                imaPop={imaPop}
                handleClose={handleClose}
              />
            }
          />
          <Route path="/experiences-etudes" element={<Experiences />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projets" element={<Projet />} />
          <Route path="/contact" element={<Message />} />
          <Route element={<AllProjets />}>
            <Route path="/backgound3d" element={<Boxes3dBackground />} />
            <Route path="/compteur" element={<Compteur />} />
            <Route path="/navigation" element={<Navigation />} />
            <Route path="/auto-text-effet" element={<AutoText />} />
            <Route path="/button-ripple-effet" element={<ButtonRipple />} />
            <Route path="/drag-and-drop" element={<DragAndDrop />} />
            <Route path="/hover-board" element={<HoverBoard />} />
            <Route path="/incrementing" element={<Incrementation />} />
            <Route path="/form-input-wave" element={<FormWave />} />
          </Route>
        </Route>
        <Route path="*" element={<NotPage />} />
      </Routes>
    </div>
  );
}

export default App;
