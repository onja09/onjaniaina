import React, { useEffect, useState } from "react";

function Compteur() {
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  const nums = ["3", "2", "1", "0"];
  useEffect(() => {
    if (index < nums.length - 1) {
      const timer = setTimeout(() => setIndex(index + 1), 800);
    } else {
      setTimeout(() => setFinished(true), 800);
    }
  }, [index]);

  const replay = () => {
    setIndex(0);
    setFinished(false);
  };

  return (
    <div className="counter-container">
      {!finished ? (
        <div className="counter">
          <div className="nums">
            {nums &&
              nums.map((item) => (
                <span key={item} className={nums[index] === item ? "in" : ""}>
                  {nums[index]}
                </span>
              ))}
          </div>
        </div>
      ) : (
        <div className="final show">
          <h1 className="text-white">GO!</h1>
          <button id="replay" onClick={replay}>
            <span>Replay</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default Compteur;
