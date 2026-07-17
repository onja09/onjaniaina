import React from "react";
import { motion } from "framer-motion";

function Apropos({ imaPop, handlePop, handleClose }) {
  return (
    <div className="aproHome w-full">
      <div
        onClick={handleClose}
        className={
          imaPop
            ? "bloc-pop cursor-pointer fixed z-50 top-0 left-0 opacity-100 w-full h-full flex items-center justify-center duration-300"
            : "bloc-pop cursor-pointer fixed z-50 -top-full left-0 opacity-0 w-full h-full flex items-center justify-center duration-300"
        }
      >
        <div className="bloc-imapop">
          <img
            className="object-contain h-[600px]"
            src={imaPop}
            alt=""
            srcset=""
          />
        </div>
      </div>

      <div className="sect-apro xs:py-14 md:py-24 px-6 bg-blue-500 flex justify-center items-center">
        <div className="bloc-line flex justify-between items-center lg:flex-row xs:flex-col xs:gap-8 w-[1200px] max-w-full gap-8">
          <div className="col1 xs:max-w-full lg:max-w-lg">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 2, bounce: 0.4 }}
              className="infos"
            >
              <h2 className="afterTitle text-4xl text-slate-50">
                Apropos <span className="text-slate-900">de moi</span>
              </h2>
              <p className="text-white">
                Je m’appelle <strong>RAFETISON Onjaniaina Herilala</strong>,
                développeur web basé à Antananarivo, Madagascar. Diplômé en
                informatique et passionné par le numérique, je conçois des
                solutions web modernes, j’ai renforcé mes compétences depuis
                2021 grâce à des formations professionnelles, à mes études à l’
                <strong>EPSI Madagascar</strong> et à un stage de 6 mois en
                développement web chez <strong>Netykom</strong>.
              </p>
              <p className="mt-6 text-white">
                Curieux et rigoureux, j’accorde une grande importance à
                l’apprentissage continu, au travail en équipe et à la création
                d’applications répondant aux besoins réels des utilisateurs. En
                dehors du développement, j’aime passer du temps avec ma famille,
                pratiquer le football et le basket-ball, ainsi que le jardinage
                pour maintenir un bon équilibre entre vie personnelle et
                professionnelle.
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 2, bounce: 0.4 }}
            className="col2 relative xs:w-full md:w-auto"
          >
            <div className="box-ima h-[460px] xs:max-w-full xs:w-full md:w-[520px] md:max-w-full">
              <img
                src="./img/img1.jpg"
                alt="image"
                className="ima w-full h-full object-cover"
                onClick={(e) => handlePop(e)}
              />
            </div>
            <div className="ima-box absolute xs:-left-5 md:-left-10 xs:-bottom-5 md:-bottom-10">
              <div className="box-ima h-[160px] w-[150px] border-8 border-blue-500 overflow-hidden">
                <img
                  src="./img/img3.jpg"
                  alt="image"
                  className="ima object-cover w-full h-full"
                  onClick={(e) => handlePop(e)}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Apropos;
