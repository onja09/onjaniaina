import React from "react";
import { listProjet } from "../constant";
import { Link } from "react-router-dom";

function AutreProjet() {
  return (
    <div id="mini-projet" className="w-full h-full flex flex-col mt-10 gap-5">
      <h2 className="text-3xl text-slate-700 font-semibold mb-4 pb-4 border-b border-b-slate-200 relative after:absolute after:-bottom-[2px] after:left-0 after:w-20 after:h-1 after:bg-blue-500">
        Autres
      </h2>
      <div className="w-full flex items-center gap-6 flex-wrap">
        {listProjet.map((item) => (
          <div key={item.id} className="group">
            <Link className="flex justify-center flex-col" to={item.route}>
              <span className="text-slate-500 underline-offset-2 group-hover:underline">
                {item.desc}
              </span>
              <p className="cursor-pointer text-base text-slate-800 underline-offset-2 group-hover:underline italic">
                {item.title}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AutreProjet;
