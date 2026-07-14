import React, { useEffect, useRef, useState } from "react";
import HeaderLeft from "../components/header/HeaderLeft";
import { Outlet } from "react-router-dom";
import HeaderTop from "../components/header/HeaderTop";
import Footer from "../components/footer/Footer";
import HeaderBottom from "../components/header/HeaderBottom";

function Layout({ handleMode }) {
  const [nav, setNav] = useState(false);
  const scro = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = scro.current;
      if (el) {
        if (window.scrollY > 0) {
          el.classList.add("is-scro");
        } else {
          el.classList.remove("is-scro");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="page-combi w-full  relative">
      <div
        ref={scro}
        className="bloc-header fixed top-40px  left-0 z-[100] w-full duration-150"
      >
        <HeaderTop handleMode={handleMode} />
        {/* <HeaderLeft nav={nav} setNav={setNav} /> */}
        <HeaderBottom nav={nav} setNav={setNav} />
      </div>
      <div className="bloc-page">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
