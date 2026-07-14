import React from "react";
import { FaFortAwesome, FaUniversity } from "react-icons/fa";
import { etudeItems } from "../constant";

function Etudes() {
  return (
    <div className="w-full h-full flex flex-col gap-8">
      <h2 className="text-3xl text-slate-700 font-semibold pb-4 border-b border-b-slate-200 relative after:absolute after:-bottom-[2px] after:left-0 after:w-24 after:h-1 after:bg-blue-500">
        Etudes et formations professionnels
      </h2>
      <div className="w-full flex xs:justify-center mdlx:justify-between flex-wrap gap-4">
        {etudeItems.map((item) => (
          <div key={item.id} className="list-exp group">
            {item.indice === "etude" ? (
              <FaUniversity className="text-4xl group-hover:text-white text-blue-500" />
            ) : (
              <FaFortAwesome className="text-4xl text-blue-500 group-hover:text-white" />
            )}
            <p className="text-base font-normal">{item.desc}</p>
            <span className="text-sm font-bold italic">{item.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Etudes;
