import React, { useRef, useState } from "react";
import {
  FaAngleDoubleUp,
  FaEnvelope,
  FaMoon,
  FaPhone,
  FaSun,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Message from "../../page/Message";

function HeaderTop({ handleMode }) {
  const [mode, setMode] = useState(false);
  const refMes = useRef();
  const handleMessage = () => {
    refMes.current.classList.add("fermer");
  };

  return (
    <div className="blocHeaderTop w-full h-10 flex items-center justify-between px-4  bg-slate-900 relative">
      <NavLink to="/">
        <div className="logoHover pl-9 flex items-center text-2xl text-slate-800 relative">
          <div className="bloclogo flex items-center -mb-[50px]">
            <span className="-mt-6">Onja</span>
            <span className="mt-3 -ml-3 text-lg text-white">niaina</span>
          </div>
        </div>
      </NavLink>
      <ul className="flex items-center xs:gap-3 md:gap-6 text-base text-slate-600 font-semibold overflow-hidden">
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
                    className="fa_envelop xs:w-[11px] xs:h-[11px] md:w-[13px] md:h-[13px] text-slate-800"
                  />{" "}
                </div>
                <span className="italic text-sm xs:hidden smlx:block">
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
                    className="fa_envelop xs:w-[11px] xs:h-[11px] md:w-[13px] md:h-[13px] text-slate-800"
                  />{" "}
                </div>
                <span className="italic text-sm xs:hidden smlx:block">
                  onjalahe@gmail.com
                </span>
              </div>
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default HeaderTop;
