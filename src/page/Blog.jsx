import React, { useEffect, useRef } from "react";
import { blogItem, image } from "../constant";
import ButtonTelechargement from "../components/action/ButtonTelechargement";

function Blog() {
  const RADIUS = 400;
  const FLIP_RANGE = 3;
  const ref = useRef();
  const img = useRef();

  // Variables globales du composant
  let angleUnit = 0;
  let currentIndex = 0;
  let currentAngle = 0;

  // Fonction pour appliquer les transformations sur chaque image
  function setTransform(el, xpos, zpos, angle, flipAngle) {
    el.style.transform = `translateX(${xpos}px) translateZ(${zpos}px) rotateY(${angle}deg) rotateX(${flipAngle}deg)`;
  }

  // Fonction principale de rotation
  const target = (index, initial = false) => {
    const fl = ref.current;
    if (!fl) return;

    if (!initial && index === currentIndex) {
      pickImage(image[index].img);
      return;
    }

    let deltaAngle = -(index - currentIndex) * angleUnit;
    if (deltaAngle < -180) deltaAngle += 360;
    else if (deltaAngle > 180) deltaAngle -= 360;

    currentAngle += deltaAngle;
    currentIndex = index;

    fl.style.transform = `translateZ(-1800px) rotateY(${currentAngle}deg)`;

    const items = fl.children;

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const itemAngle = angleUnit * i;
      const itemAngleRad = (itemAngle * Math.PI) / 180;
      const xpos = Math.sin(itemAngleRad) * RADIUS;
      const zpos = Math.cos(itemAngleRad) * RADIUS;

      let deltaIndex = Math.abs(i - index);
      if (deltaIndex > items.length / 2) deltaIndex = items.length - deltaIndex;

      let flipAngle =
        deltaIndex <= FLIP_RANGE ? deltaIndex * (90 / FLIP_RANGE) : 90;

      setTransform(item, xpos, zpos, itemAngle, flipAngle);
    }
  };

  // Fonction d’affichage de l’image sélectionnée
  const pickImage = (imgUrl) => {
    if (!img.current) return;
    img.current.style.backgroundImage = `url(${imgUrl})`;
    img.current.style.transform = `translate(-50%,-50%)`;
    img.current.style.opacity = "1";
    img.current.style.visibility = "visible";
    document.body.classList.add("is-imapop");
  };

  // Initialisation du carousel après montage
  useEffect(() => {
    if (!ref.current) return;
    angleUnit = 360 / image.length;
    currentIndex = 0;
    currentAngle = 0;
    target(0, true);
  }, [image]);

  return (
    <div id="blog" className="w-full">
      <div className="Hero h-[80vh] w-full flex items-center justify-center">
        <div className="max-w-[300px]">
          <h1 className="text-4xl text-white font-bold">Blog</h1>
        </div>
      </div>
      <div className="xs:w-full h-full lg:max-w-[1200px] mx-auto px-6 xs:py-14 md:py-24">
        <div
          onClick={() => {
            if (img.current)
              img.current.style.transform = "translate(-100%,-50%)";
            img.current.style.opacity = "0";
            img.current.style.visibility = "hidden";
            document.body.classList.remove("is-imapop");
          }}
          className="image-display"
          ref={img}
        ></div>
        <div className="w-full h-full">
          <h2 className="text-3xl text-slate-700 mb-11 font-semibold pb-4 border-b border-b-slate-200 relative after:absolute after:-bottom-[2px] after:left-0 after:w-10 after:h-1 after:bg-blue-500">
            Mon Blog
          </h2>
          <div className="w-full h-full flex lg:items-center xs:justify-center lg:justify-between gap-3 flex-wrap">
            <div className="lglx:max-w-[500px] xs:max-w-full xs:flex xs:flex-col-reverse lglx:block">
              <div className="carouselbloc xs:my-7 lglx:my-0">
                <div className="carouselflow" ref={ref}>
                  {image.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => target(index)}
                      style={{ backgroundImage: `url("${item.img}")` }}
                      className="carouselflow-item"
                    ></div>
                  ))}
                </div>
              </div>
              <div className="w-full">
                <p className="font-normal indent-6 text-justify">
                  Au cours de mon parcours, j’ai appris que pour devenir
                  développeur, c’est apprendre en continu, un processus sans fin
                  en raison des nouvelles versions et des innovations
                  technologiques. En effet, la science évolue de manière
                  exponentielle, presque à l’infini.
                </p>
              </div>
            </div>
            <div className="w-full xs:max-w-full lglx:max-w-[500px] flex flex-col justify-center gap-3">
              {blogItem.map((item) => (
                <div key={item.id}>
                  <p className="text-justify font-normal">{item.desc}</p>
                </div>
              ))}
              <div className="btn1 mt-3 xs:pb-10 sml:pb-0">
                <ButtonTelechargement />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
