import React, { useState } from "react";
import "./css/EightBall";
import { choice } from "./random";
import defaultAnswers from "./answers.json";

function EightBall({}) {
  const [answer, setAnswer] = useState({
    msg: "Think of a question",
    color: black,
  });
  function handleClick(evt) {
    setAnswer(choice(answers));
  }
  return (
    <div
      className="EightBall"
      onClick={handleClick}
      style={{ backgroundColor: answer.color }}
    >
      <b>{answer.msg}</b>
    </div>
  );
}

export default EightBall;
