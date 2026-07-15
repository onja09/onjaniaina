import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { projets } from "../constant";
import AutreProjet from "./AutreProjet";
import { Link } from "react-router-dom";

function Projet() {
  return (
    <div id="projets" className="w-full">
      <div className="Hero2 h-[80vh] w-full flex items-center justify-center">
        <div className="max-w-[300px]">
          <h1 className="text-4xl text-white font-bold">Projets</h1>
        </div>
      </div>
      <div className="xs:w-full lg:max-w-[1200px] mx-auto px-6 xs:py-14 md:py-24">
        <div className="w-full flex flex-col justify-center gap-5">
          <h2 className="text-3xl text-slate-700 font-semibold mb-4 pb-4 border-b border-b-slate-200 relative after:absolute after:-bottom-[2px] after:left-0 after:w-20 after:h-1 after:bg-blue-500">
            Pojets sur github
          </h2>
          <p className="max-w-5xl flex justify-start">
            Voici quelques parmi les projets que j’ai réalisés pendant tous mes
            parcours, ces projets sont disponibles sur github, alors je vous
            invite à les constater.
          </p>
          <div className="w-full flex items-center xs:justify-center smlx:justify-between flex-wrap gap-4">
            {projets.map((item) => (
              <div
                key={item._id}
                className="xs:w-80 sml:w-60 sml:h-56 rounded-md relative overflow-hidden bg-blue-500 group"
              >
                <div className="w-full h-full scale-75 xs:translate-y-0 sml:-translate-y-3  group-hover:scale-100 duration-700">
                  <img
                    className="w-80 h-64 mx-auto object-cover object-center opacity-100 group-hover:opacity-50 group-hover:object-cover duration-700"
                    src={item.img}
                    alt="image"
                  />
                </div>
                <h3 className="absolute text-white w-full text-center py-3 font-semibold -top-16 left-0 group-hover:top-16 duration-300 px-3 uppercase rounded-t-3xl backdrop-blur-sm rounded-b-md italic">
                  {item.titre}
                </h3>
                <div className="w-full flex items-center justify-center absolute -bottom-60 left-0 group-hover:bottom-10 duration-700">
                  <a
                    href={item.url}
                    className="text-lg text-slate-300 font-semibold border-none py-1 px-3 rounded-md bg-blue-950 cursor-pointer flex items-center gap-2 shadow-xl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    view{" "}
                    <FaArrowRight className="-rotate-45 skew-x-12 skew-y-12 text-sm" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <AutreProjet />
        </div>
      </div>
    </div>
  );
}

export default Projet;
