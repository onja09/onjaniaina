import React from "react";
import { FaBookmark } from "react-icons/fa";
import Etudes from "./Etudes";
import { experienceItems } from "../constant";

function Experiences() {
  return (
    <div id="experiences-etudes" className="w-full">
      <div className="Hero1 h-[80vh] w-full flex items-center justify-center">
        <div className="max-w-[400px]">
          <h1 className="text-4xl text-white font-bold text-center">
            Expériences et études
          </h1>
        </div>
      </div>
      <div className="blocExperience xs:w-full h-full lg:max-w-[1200px] mx-auto px-6 xs:py-14 md:py-24">
        <div className="w-full h-full flex flex-col gap-8">
          <h2 className="text-3xl text-slate-700 font-semibold pb-4 border-b border-b-slate-200 relative after:absolute after:-bottom-[2px] after:left-0 after:w-20 after:h-1 after:bg-blue-500">
            Mes expériences
          </h2>
          <div className="w-full flex xs:justify-center mdlx:justify-between flex-wrap gap-4">
            {experienceItems.map((item) => (
              <div key={item.id} className="list-exp group">
                <FaBookmark className="text-4xl text-blue-500 group-hover:text-white" />
                <h3 className="text-sm text-blue-500 font-bold group-hover:text-white">
                  {item.entreprise}
                </h3>
                <p className="text-base font-normal">{item.desc}</p>
                <span className="text-sm font-bold italic">{item.date}</span>
              </div>
            ))}
          </div>
          <div className=" xs:pb-10 mdl:mb-0">
            <Etudes />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
