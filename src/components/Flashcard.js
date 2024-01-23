import React, { useState, useEffect, useRef } from "react";

const Flashcard = ({ flashcard }) => {
  const [flip, setFlip] = useState(false);
  const [height, setHeight] = useState("initial");

  const frontEl = useRef();
  const backEl = useRef();

  function setMaxHeight() {
    const frontHeight = frontEl.current
      ? frontEl.current.getBoundingClientRect().height
      : 0;
    const backHeight = backEl.current
      ? backEl.current.getBoundingClientRect().height
      : 0;

    setHeight(Math.max(frontHeight, backHeight, 100));
  }

  useEffect(setMaxHeight, [
    flashcard.question,
    flashcard.answer,
    flashcard.options,
  ]);

  useEffect(() => {
    window.addEventListener("resize", setMaxHeight);
    return () => window.removeEventListener("resize", setMaxHeight);
  }, []);

  return (
    <div
      className={`card ${flip ? "flip" : ""}`}
      style={{ height: height }}
      onClick={() => setFlip(!flip)}
      
    >
      {flip ? (
        <div className="back" ref={backEl}>
          {flashcard.answer}
        </div>
      ) : (
        <div className="front" ref={frontEl}>
          <div style={{ fontWeight: "bold" }}>{flashcard.question}</div>
          <div className="flashcard-options">
            {flashcard.options.map((option, index) => (
              <div className="flashcard-option" key={index}>
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Flashcard;
