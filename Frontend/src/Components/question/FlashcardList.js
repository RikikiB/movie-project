import React from "react";
// import Flashmain from "./Flashmain";

function FlashcardList({ currentQuestion }) {
  return (
    <div className="card-grid-question">
      <div>{currentQuestion ? <div>{currentQuestion.question}</div> : ""}</div>
      <div>
        {currentQuestion?.answers?.map((a) => (
          <div> a: {a}</div>
        ))}
      </div>
    </div>
  );
}

export default FlashcardList;
