import React, { useEffect, useRef } from "react";

function Cursor() {
  const cur = useRef(null);
  useEffect(() => {
    if (!cur) return;
    const mov = cur.current;
    function moveCursor(e) {
      mov.style.left = e.pageX + "px";
      mov.style.top = e.pageY + "px";

      if (
        e.target.nodeName === "H1" ||
        e.target.nodeName === "H2" ||
        e.target.nodeName === "H3" ||
        e.target.nodeName === "P" ||
        e.target.parentElement.nodeName === "H2" ||
        e.target.nodeName === "STRONG"
      ) {
        mov.classList.add("cursor1");
      } else if (
        e.target.nodeName === "LI" ||
        e.target.className === "is-dot" ||
        e.target.className === "not-dot" ||
        e.target.parentElement.id === "cont" ||
        e.target.nodeName === "path" ||
        e.target.nodeName === "svg" ||
        e.target.nodeName === "INPUT" ||
        e.target.nodeName === "TEXTAREA"
      ) {
        mov.classList.add("cursor2");
      } else if (e.target.nodeName === "BUTTON") {
        mov.classList.add("cursor3");
      } else {
        mov.classList.remove("cursor1");
        mov.classList.remove("cursor2");
        mov.classList.remove("cursor3");
      }
    }
    document.body.addEventListener("mousemove", moveCursor);
    return () => {
      document.body.removeEventListener("mousemove", moveCursor);
    };
  }, []);
  return (
    <div>
      <div ref={cur} className="cursor xs:hidden lgl:block">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Cursor;
