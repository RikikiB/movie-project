import React, { useState } from "react";
import "./Flashcard.scss";

function Answer({ answer, handleChange, selectedAnswer }) {
  const inputId = `${answer.answer}_${answer.id}`;
  console.log({ selectedAnswer });
  return (
    <div className="answer">
      <label htmlFor={inputId}>
        <input
          id={inputId}
          className="answerinput"
          type="radio"
          checked={answer.id == selectedAnswer}
          value={answer.id}
          onChange={(e) => handleChange(e.target.value)}
        />
        {answer.answer}
      </label>
    </div>
  );
}

function FlashcardList({ currentQuestion }) {
  const [selectedAnswer, setSelectedAnswer] = useState();
  if (!currentQuestion) return null;

  return (
    <div className="questionairecontainer">
      <div className="questioncontainer">
        <div>{currentQuestion.question}</div>
      </div>
      <div className="answercontainer">
        {currentQuestion?.answers?.map((answer) => (
          <Answer
            key={answer.id}
            answer={answer}
            handleChange={(answerId) => setSelectedAnswer(answerId)}
            selectedAnswer={selectedAnswer}
          />
        ))}
      </div>
    </div>
  );
}
export default FlashcardList;
