import React from "react";
import { FaTimes } from "react-icons/fa";
import { allList } from "../../constant";
import { NavLink } from "react-router-dom";

function HeaderLeft({ nav, setNav }) {
  return (
    <div className={nav ? "openBlocHeaderLeft" : "blocHeaderLeft"}>
      <div className="w-[200px] h-screen bg-slate-200 p-2 flex flex-col gap-3 z-50 relative">
        <button
          onClick={() => setNav(false)}
          className="absolute top-1 -right-8 bg-slate-700 hover:bg-red-500 border border-slate-300 p-1 text-white cursor-pointer"
        >
          <FaTimes />
        </button>
        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto">
          <img
            className="w-full h-full object-cover"
            src="./img/img1.jpg"
            alt=""
          />
        </div>
        <div className="w-full max-h-full border border-slate-100">
          {allList.map((item) => (
            <div key={item.id} className="sousbloc relative py-1 px-2">
              <NavLink
                to={item.route}
                onClick={() => setNav(false)}
                className={({ isActive }) =>
                  isActive ? "isactive" : "isnotactive"
                }
              >
                <div className="bloctitle cursor-pointer w-full py-2 px-1">
                  <h1 className="text-base">{item.title}</h1>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeaderLeft;
