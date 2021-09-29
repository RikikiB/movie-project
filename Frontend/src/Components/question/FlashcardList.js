import { useState, useEffect } from "react";
import "./Flashcard.scss";

function Answer({ answer, handleChange, selectedAnswer }) {
  const inputId = `${answer.answer}_${answer.id}`;
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
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  useEffect(() => {
    const previousAnswer = userAnswers?.find(
      (a) => a.questionId === currentQuestion.questionId
    );
    setSelectedAnswer(previousAnswer ? previousAnswer : selectedAnswer);
  }, [currentQuestion, userAnswers, selectedAnswer]);
  if (!currentQuestion) return null;

  return (
    <div className="questionairecontainer">
      <div className="questioncontainer">
        <div>{currentQuestion.question}</div>
      </div>
      <div className="answercontainer">
        {/* TODO: KEEP SELECTED ANSWER ACROSS RENDERS */}
        {currentQuestion?.answers?.map((answer) => (
          <Answer
            key={answer.id}
            answer={answer}
            handleChange={(answerId) => {
              console.log(currentQuestion, answerId);
              // find the questionId
              const answerExists = Boolean(
                userAnswers.find(
                  (ans) => ans.questionId === currentQuestion.questionId
                )
              );
              if (answerExists) {
                setUserAnswers((prev) =>
                  prev.map((userAnswer) => {
                    if (userAnswer.questionId === currentQuestion.questionId) {
                      return { ...userAnswer, answerId };
                    } else {
                      return userAnswer;
                    }
                  })
                );
              } else {
                setUserAnswers([
                  ...userAnswers,
                  {
                    questionId: currentQuestion.questionId,
                    answerId,
                  },
                ]);
              }
              setSelectedAnswer(answerId);
            }}
            selectedAnswer={selectedAnswer}
          />
        ))}
      </div>
      <div style={{ color: "white" }}>
        {JSON.stringify(userAnswers, null, 2)}
      </div>
    </div>
  );
}
export default FlashcardList;
