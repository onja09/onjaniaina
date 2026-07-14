import React, { useEffect, useRef } from "react";

function Boxes3dBackground() {
  const ref = useRef();
  const handleClick = () => {
    if (!ref.current) return;
    ref.current.classList.toggle("big");
  };
  function createBoxes() {
    if (!ref.current) return;
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
        ref.current.appendChild(box);
      }
    }
  }
  useEffect(() => {
    createBoxes();
    if (!ref.current) return;
  }, []);

  return (
    <div className="pt-16">
      <div className="w-full h-[650px] flex gap-10 flex-col items-center justify-center relative">
        <button onClick={handleClick} className="changer">
          transform
        </button>
        <div ref={ref} className="boxes big"></div>
      </div>
    </div>
  );
}

export default Boxes3dBackground;
