import React from "react";
import { NavLink } from "react-router-dom";

function NotPage() {
  return (
    <div className="bloc-404 full px-4 h-screen">
      <div className="max-w-[1200px] h-screen mx-auto flex items-center justify-center">
        <div className="w-full text-white bg-[rgba(0,0,0,0.7)] py-20 flex flex-col gap-4 items-center justify-center">
          <p className="xs:text-2xl md:text-3xl font-bold">Ooops !</p>
          <h1 className="xs:text-6xl md:text-8xl font-extrabold">
            4<span className="text-blue-500">0</span>4
          </h1>
          <p className="xs:text-xl md:text-2xl">Page introuvable !</p>
          <div className="w-full flex justify-center mt-8">
            <NavLink to={"/"}>
              <button className="btn text-base font-medium p-3 bg-[#4b93ce88] rounded-md">
                Revenir à la page d'accueil
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotPage;
