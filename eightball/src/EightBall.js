import React, { useState } from "react";
import "./css/EightBall";

function EightBall({}) {

    function handleClick(evt) {
        setAnswer(choice(answers));
    }
  return <div className="EightBall" onClick={handleClick} style={{backgroundColor: }}></div>;
}
