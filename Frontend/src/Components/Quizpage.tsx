import React from "react";
import Flashmain from "./question/Flashmain";

function Quizpage() {
  return (
    <div>
      <div className="Question">
        <h1> What Genre are you Intrested in?</h1>
      </div>
      <div className="Answerbox">
        <input type="radio" id="html" name="fav_language" value="HTML" />
      </div>
      <Flashmain />
    </div>
  );
}

export default Quizpage;
