import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function ContactUse() {
  return (
    <div className="bloc-use w-full px-6 xs:py-14 md:py-24">
      <div className="max-w-[1200px] mx-auto flex gap-10 items-center justify-center">
        <div className="max-w-[600px] flex flex-col items-center">
          <h2 className="afterTitle1 text-4xl text-center text-blue-500">
            À votre disposition
          </h2>
          <p className="text-center mb-6 mt-4">
            Besoin d'un site web professionnel ou à la recherche d'un
            développeur web ? Contactez-moi pour discuter de votre projet ou
            d'une opportunité de collaboration. Je vous répondrai dans les
            meilleurs délais.
          </p>
          <NavLink to={"/contact"}>
            <button className="btn text-base w-[200px] font-medium p-3 bg-[#4b93ce88] rounded-md">
              Contactez-moi
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ContactUse;
