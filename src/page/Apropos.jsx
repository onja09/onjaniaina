import React from "react";
import ButtonTelechargement from "../components/action/ButtonTelechargement";
import { apropos } from "../constant";

function Apropos({ handlePop, imaPop, handleClose }) {
  return (
    <div id="apropos" className="blocApropos w-full">
      <div
        onClick={handleClose}
        className={
          imaPop
            ? "bloc-pop cursor-pointer fixed z-50 top-0 left-0 opacity-100 w-full h-full flex items-center justify-center duration-300"
            : "bloc-pop cursor-pointer fixed z-50 -top-full left-0 opacity-0 w-full h-full flex items-center justify-center duration-300"
        }
      >
        <div className="max-w-[1200px] mx-auto bloc-imapop">
          <img
            className="object-contain h-[500px]"
            src={imaPop}
            alt=""
            srcset=""
          />
        </div>
      </div>

      <div className="Hero h-[80vh] w-full flex items-center justify-center">
        <div className="max-w-[300px]">
          <h1 className="text-4xl text-white font-bold">Apropos de moi</h1>
        </div>
      </div>
      <div className="w-full xs:py-14 md:py-24 px-6">
        <div className="w-full mx-auto max-w-[1200px] h-full">
          <h2 className="text-3xl text-slate-700 font-semibold mb-10 pb-4 border-b border-b-slate-200 relative after:absolute after:-bottom-[2px] after:left-0 after:w-20 after:h-1 after:bg-blue-500">
            Qui suis-je ?
          </h2>
          <div className="w-full xs:justify-start mdl:justify-between xs:items-start lg:items-center flex xs:flex-col-reverse lg:flex-row gap-10">
            <div className="relative xs:w-full md:w-auto">
              <div className="box-ima h-[460px] xs:w-full lg:w-[450px] xl:w-[520px]">
                <img
                  src="./img/img1.jpg"
                  alt="image"
                  className="ima w-full h-full object-cover"
                  onClick={(e) => handlePop(e)}
                />
              </div>
              <div className="ima-box absolute xs:-right-5 md:-right-10 xs:-bottom-5 md:-bottom-10">
                <div className="box-ima h-[160px] w-[150px] border-8 border-white overflow-hidden">
                  <img
                    src="./img/img7.jpg"
                    alt="image"
                    className="ima object-cover w-full h-full"
                    onClick={(e) => handlePop(e)}
                  />
                </div>
              </div>
            </div>
            <div className="xs:w-full lgl:w-[550px] flex flex-col justify-center gap-4">
              {apropos.map((item) => (
                <div key={item.id} className="w-full flex justify-end apropos">
                  <p className="w-96 afterPara font-normal p-2 text-justify duration-200">
                    {item.param}
                  </p>
                </div>
              ))}
              <div className="btn1 mt-5 w-full flex justify-end xs:mb-10 mdl:mb-0">
                <ButtonTelechargement />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apropos;
