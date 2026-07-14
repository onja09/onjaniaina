import React, { useEffect, useState } from "react";

function AutoText() {
  const [text, setText] = useState("");
  const [speed, setSpeed] = useState(1);
  const fullText = "You born to win!";
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setText(fullText.slice(0, index));
      setIndex(index >= fullText.length ? 1 : index + 1);
    }, 500 / speed);
    return () => clearTimeout(timer);
  }, [index, speed]);

  return (
    <div className="blocauto">
      <h1 id="text">{text}</h1>
      <div className="sousauto">
        <div className="inputbloc">
          <span className="text-white">Speed :</span>
          <input
            id="speed"
            type="number"
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
            min="1"
            max="10"
          />
        </div>
      </div>
    </div>
  );
}

export default AutoText;
