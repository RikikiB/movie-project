import { useState, useEffect } from "react";
import FlashcardList from "./FlashcardList";
import "./Flashcard.scss";

function Flashmain() {
  const [questions, setQuestions] = useState([]);
  // current question index below
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  useEffect(() => {
    async function getAnswerByQuestion() {
      try {
        const result = await fetch(
          "http://localhost:8000/getAnswerByQuestion",
          {
            method: "GET",
            header: { "content-type": "application/json" },
          }
        );
        const data = await result.json();
        console.log({ data });
        const questionsAndAnswers = data.reduce((retval, el) => {
          if (el.question in retval) {
            retval[el.question].answers.push({
              id: el.answerid,
              answer: el.answer,
            });
          } else {
            retval[el.question] = {
              question: el.question,
              answers: [{ id: el.answerid, answer: el.answer }],
            };
          }
          return retval;
        }, {});
        setQuestions(Object.values(questionsAndAnswers));
      } catch (error) {
        console.log("Error:", error);
      }
    }
    getAnswerByQuestion();
  }, []);

  function nextQuestion() {
    if (currentQuestionIndex <= questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  }
  function prevQuestion() {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  }
  return (
    <div className="flash-main">
      <FlashcardList currentQuestion={questions[currentQuestionIndex]} />
      <div className="show-page">
        <button className="previousbutton" onClick={prevQuestion}>
          Previous Question!
        </button>
        <button className="nextbutton" onClick={nextQuestion}>
          Next Question!
        </button>
      </div>
    </div>
  );
}
export default Flashmain;
