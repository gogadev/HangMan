import React from "react";

import "./wrong-letters.style.css"

const WrongLetters = ({ wrongLetters }) => {
  return (
    <div className="wrong-letters-container">
      <div className="wrong-letters">
        {wrongLetters.length > 0 ? <h2 className="message">Wrong</h2> : <h2 className="message">Good Luck</h2>}
        {wrongLetters
          .map((letter, i) => <span key={i}>{letter}</span>)
          .reduce(
            (prev, curr) => (prev === null ? [curr] : [prev, ",", curr]),
            null
          )}
      </div>
    </div>
  );
};

export default WrongLetters;
