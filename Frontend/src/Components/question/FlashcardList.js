import React from "react";
import "./Flashcard.scss";
import { useState } from "react";
import Flashmain from "./Flashmain";

function FlashcardList({ currentQuestion }) {
  const [checked, setChecked] = useState(false);
  return (
    <div className="Mainbodycontainer">
      <div className="questioncontainer">
        {currentQuestion ? <div>{currentQuestion.question}</div> : ""}
      </div>
      <div className="answercontainer">
        {currentQuestion?.answers?.map((a) => (
          // <div>
          <div className='answers'>
           <input type="checkbox" value={checked} /> <p className='showanswer'>{a}</p>
            </div>
          // </div>
        ))}
      </div>
    </div>
  );
}

export default FlashcardList;
