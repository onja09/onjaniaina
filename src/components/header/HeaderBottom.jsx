import React, { useEffect, useRef } from "react";
import { FaAngleDoubleUp, FaList, FaTimes } from "react-icons/fa";
import { allList } from "../../constant";
import { NavLink } from "react-router-dom";

function HeaderBottom({ nav, setNav, barsco, setBarsco }) {
  const refbar = useRef();
  const scrotop = useRef();
  const showNav = () => {
    setNav(true);
  };

  const closeNav = () => {
    setNav(false);
  };

  const handleListe = (e) => {
    setNav(false);
  };

  useEffect(() => {
    // Liste
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(refbar.current)) {
        setNav(false);
      }
    });

    // scrollbarTOP
    const handleScrollTop = () => {
      const el = scrotop.current;
      if (el) {
        if (window.scrollY > 650) {
          el.classList.add("scroTop");
        } else {
          el.classList.remove("scroTop");
        }
      }
    };

    window.addEventListener("scroll", handleScrollTop);
    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, []);

  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="blocHeaderBottom relative w-full h-16 py-1 mx-auto flex items-center md:justify-center xs:justify-end xs:px-3">
      <div className="flex items-center gap-3">
        {nav ? (
          <div
            onClick={closeNav}
            className="p-2 text-base rounded-full cursor-pointer xs:flex md:hidden"
          >
            <FaTimes className="list-ico" />
          </div>
        ) : (
          <div
            onClick={showNav}
            className="p-2 text-base rounded-full cursor-pointer xs:flex md:hidden"
          >
            <FaList className="list-ico" />
          </div>
        )}
        <ul
          ref={refbar}
          className={
            nav
              ? "afterListe xs:absolute xs:top-[100%] xs:cursor-pointer md:cursor-auto xs:bg-blue-500 md:bg-transparent z-40 xs:left-0 md:relative md:top-0 md:left-0 duration-500 flex xs:flex-col md:flex-row w-full items-center justify-center gap-6 text-base text-slate-800 font-semibold xs:p-16"
              : "xs:absolute xs:top-[100%] xs:cursor-pointer md:cursor-auto xs:bg-blue-500 md:bg-transparent z-40 xs:left-[100%] md:relative md:top-0 md:left-0 duration-500 flex xs:flex-col md:flex-row w-full items-center justify-center gap-6 text-base text-slate-800 font-semibold xs:p-16"
          }
        >
          {allList.map((item) => (
            <NavLink
              onClick={(e) => handleListe(e)}
              key={item.id}
              to={item.route}
              className={({ isActive }) => (isActive ? "active" : "disabled")}
            >
              <li className="headerHover text-white">{item.title}</li>
            </NavLink>
          ))}
        </ul>
      </div>
      <div
        onClick={handleToTop}
        ref={scrotop}
        className="fixed cursor-pointer bg-blue-500 p-2 top-[60vh] -right-10 duration-500 shadow-md shadow-[rgba(0,0,0,0.5)] rounded-md"
      >
        <div className="bloc-font">
          <FaAngleDoubleUp className="text-white" />
        </div>
      </div>
    </div>
  );
}

export default HeaderBottom;
