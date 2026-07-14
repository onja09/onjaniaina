import React from "react";
import Experiences from "./../../page/Experiences";
import { FaAccusoft } from "react-icons/fa";
import { etuExperts, expehome } from "../../constant";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function Etudes() {
  return (
    <div className="bg-[#f7f7f7] w-full xs:py-14 md:py-24 px-6">
      <div className="line-et max-w-[1200px] mx-auto">
        <h2 className="afterTitle1 text-4xl text-center text-blue-400">
          Experiences et etudes
        </h2>
        <p className="max-w-[550px] text-center mx-auto mb-16">
          Développeur web formé en informatique, avec une expérience pratique
          acquise lors d'un stage et de plusieurs formations professionnelles.
        </p>
        <div className="bloc-list-item grid xs:grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 place-items-center gap-8">
          {expehome.map((item) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 1, bounce: 0.4 }}
              className="afterItem max-w-full group p-4"
              key={item.id}
            >
              {item.ico && (
                <div className="ico-item text-6xl mb-4 duration-500 group-hover:text-slate-200">
                  <div>
                    <img src={item.ico} className="ima-ico w-12 h-12" alt="" />
                  </div>
                </div>
              )}

              <div className="desc-etu group-hover:text-white duration-300">
                {item.entreprise && (
                  <h3 className="font-bold mb-2">{item.entreprise}</h3>
                )}
                <p className="mb-2">{item.desc}</p>
                <strong className="text-slate-500 duration-300 text-sm group-hover:text-white">
                  {item.date}
                </strong>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="btn1 w-full flex justify-center mt-8">
          <NavLink to={"/experiences-etudes"}>
            <button className="btn text-base w-[200px] font-medium p-3 bg-[#4b93ce88] rounded-md">
              En savoir plus
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Etudes;
