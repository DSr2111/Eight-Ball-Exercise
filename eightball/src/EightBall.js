import React, { useState } from "react";
import "./css/EightBall";
import { choice } from "./random";
import defaultAnswers from "./answers.json";

function EightBall({}) {
  function handleClick(evt) {
    setAnswer(choice(answers));
  }
  return (
    <div
      className="EightBall"
      onClick={handleClick}
      style={{ backgroundColor: answer.color }}
    ></div>
  );
}

export default EightBall;
