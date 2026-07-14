import React from "react";
import { FaEnvelope, FaGithub, FaPhone } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { allList } from "../../constant";

function Footer() {
  return (
    <div className="bloc-footer">
      <div className="w-full px-6 py-12 bg-slate-900">
        <div className="max-w-[1200px] mx-auto flex xs:flex-col lg:flex-row xs:gap-8 lg:gap-4 xs:justify-center lg:justify-between">
          <div className="bloc-logo max-w-full w-[500px]">
            <NavLink to="/">
              <div className="logo-foot bg-blue-500 w-64 h-32 pl-9 flex items-center justify-center text-2xl text-slate-800 relative">
                <div className="-ml-8 flex items-center">
                  <span className="-mt-6 text-5xl">Onja</span>
                  <span className="mt-10 -ml-6 text-4xl text-white">
                    niaina
                  </span>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="w-full max-w-[600px] flex xs:flex-col md:flex-row xs:gap-8 md:gap-4 xs:justify-between xs:pl-0 lg:pl-12">
            <div className="">
              <h3 className="text-white font-bold mb-5 underline underline-offset-2">
                Menu
              </h3>
              <ul className="w-full grid grid-cols-2 gap-3 text-base text-slate-800 font-semibold">
                {allList.map((item) => (
                  <NavLink key={item.id} to={item.route}>
                    <li className="text-white">{item.title}</li>
                  </NavLink>
                ))}
              </ul>
            </div>
            <div className="">
              <h3 className="text-white font-bold mb-5 underline underline-offset-2">
                Coordonnées
              </h3>
              <ul className="flex flex-col gap-4 mb-5 text-base text-slate-600 font-semibold overflow-hidden">
                <li>
                  <div className="text-base text-slate-800">
                    <a
                      href="tel:034 85 897 35"
                      target="__blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-[6px] rounded-full bg-slate-50 cursor-pointer envelop">
                          <FaPhone
                            href="tel:034 85 897 35"
                            className="fa_envelop w-[13px] h-[13px] text-slate-800"
                          />{" "}
                        </div>
                        <span className="italic text-white text-sm">
                          034 85 897 35
                        </span>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="text-base text-slate-800">
                    <a
                      href="mailto:onjalahe@gmail.com"
                      target="__blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-[6px] rounded-full bg-slate-50 cursor-pointer envelop">
                          <FaEnvelope
                            href="mailto:onjalahe@gmail.com"
                            className="fa_envelop w-[13px] h-[13px] text-slate-800"
                          />{" "}
                        </div>
                        <span className="italic text-white text-sm">
                          onjalahe@gmail.com
                        </span>
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-14 bg-slate-900 border-t-2 border-white p-2 flex items-center justify-center gap-3">
        <div className="w-20 h-full">
          <img className="w-full h-full" src="./img/mada.png" alt="" />
        </div>
        <p className="text-sm text-white font-semibold tracking-wide">
          Create by{" "}
          <a
            href="mailto:onjalahe@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>onjalahe@gmail.com</span>
          </a>
        </p>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-xl text-white" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
