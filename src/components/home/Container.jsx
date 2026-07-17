import React, { useState } from "react";
import { bannerItem } from "../../constant";
import Slider from "react-slick";
import ButtonTelechargement from "../action/ButtonTelechargement";
import Apropos from "./Apropos";
import Etudes from "./Etudes";
import Projets from "./Projets";
import ContactUse from "./ContactUse";
import { motion } from "framer-motion";

function Container({ handleClose, handlePop, imaPop }) {
  // SLIDE
  const [dotActive, setDotActive] = useState(0);
  const Settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },

    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "90%",
          left: "0",
          transform: "translate(-50% 50%)",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="bloc-dot"
          style={{
            width: "160px",
          }}
        >
          <ul
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {dots}
          </ul>
        </div>
      </div>
    ),
    customPaging: (i) => (
      <div className={i === dotActive ? "is-dot" : "not-dot"}>{}</div>
    ),
  };
  return (
    <div className="page-container">
      <div className="bloc-container w-full h-full">
        <div className="w-full h-full">
          <Slider {...Settings}>
            {bannerItem.map((item) => (
              <div
                key={item._id}
                className="w-full h-[100vh] relative overflow-hidden"
              >
                <div className="w-full h-full">
                  <img
                    className="w-full h-full object-cover object-center"
                    src={item.img}
                    alt=""
                  />
                </div>
                <div className="bloc-desc md:max-w-[1200px] w-full z-50 h-full absolute top-0 left-[50%] xs:px-5 px-0 translate-x-[-50%] flex items-center justify-center text-slate-900">
                  <div className="p-6 relative flex flex-col gap-3 rounded-sm">
                    <motion.h1
                      initial={{ opacity: 0, y: -30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      transition={{ duration: 1, bounce: 0.4 }}
                      className="title-hero font-titleFont xs:text-xl md:text-4xl max-w-[500px] m-auto text-center text-white"
                    >
                      Bonjour, je suis RAFETISON Onjaniaina Herilala
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      transition={{ duration: 1, bounce: 0.4 }}
                      className="param xs:max-w-full md:max-w-[450px] m-auto xs:text-base md:text-lg font-normal text-center text-white"
                    >
                      Développeur web confirmé, passionné par la création de
                      sites modernes et d’applications performantes.
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      transition={{ duration: 1, bounce: 0.4 }}
                      className="bloc-btn mt-2 flex justify-center"
                    >
                      <ButtonTelechargement />
                    </motion.div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <Apropos
        handlePop={handlePop}
        imaPop={imaPop}
        handleClose={handleClose}
      />
      <Etudes />
      <Projets />
      <ContactUse />
    </div>
  );
}

export default Container;
