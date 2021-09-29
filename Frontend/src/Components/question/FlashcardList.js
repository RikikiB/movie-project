import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import "./Flashcard.scss";
import { getMoviesByType } from "../../api";

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

function Question({
  currentQuestion,
  prevSelectedAnswer,
  updateSelectedAnswer,
}) {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  useEffect(() => {
    setSelectedAnswer(prevSelectedAnswer ? prevSelectedAnswer.answerId : "");
  }, [currentQuestion, prevSelectedAnswer]);
  if (!currentQuestion) return null;
  const { question, answers } = currentQuestion;
  return (
    <>
      <div className="questioncontainer">
        <div>{question}</div>
      </div>
      <div className="answercontainer">
        {answers?.map((answer) => (
          <Answer
            key={answer.id}
            answer={answer}
            selectedAnswer={selectedAnswer}
            handleChange={(answerId) => {
              setSelectedAnswer(answerId);
              updateSelectedAnswer(answerId);
            }}
          />
        ))}
      </div>
    </>
  );
}

function FlashcardList() {
  const [currentPage, setCurrentPage] = useState("quiz");
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [recommendedMovie, setRecommendedMovie] = useState();

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
        const questionsAndAnswers = data.reduce((retval, el) => {
          if (el.question in retval) {
            retval[el.question].answers.push({
              questionId: el.questionid,
              id: el.answerid,
              answer: el.answer,
            });
          } else {
            retval[el.question] = {
              questionId: el.questionid,
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

  async function getRecommendedMovie(userAnswers) {
    getMoviesByType("popular", { genre: 12, duration: 90 }).then((movies) => {
      const selectedMovieIndex = Math.floor(Math.random() * movies.length);
      setRecommendedMovie(movies[selectedMovieIndex]);
      setCurrentPage("recommended");
    });
  }
  const currentQuestion = questions[currentQuestionIndex];

  function nextQuestion() {
    if (currentQuestionIndex <= questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      return;
    }
    getRecommendedMovie(userAnswers);
  }
  function prevQuestion() {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  }
  function getCurrentlySelectedAnswer() {
    const retval =
      userAnswers?.find((a) => a?.questionId === currentQuestion?.questionId) ??
      "";
    return retval;
  }
  function updateSelectedAnswer(answerId) {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestionIndex] = {
      questionId: questions[currentQuestionIndex].questionId,
      answerId,
    };
    setUserAnswers(newUserAnswers);
  }
  return (
    <div className="flash-main">
      {currentPage === "quiz" ? (
        <div className="questionairecontainer">
          <Question
            currentQuestion={questions[currentQuestionIndex]}
            prevSelectedAnswer={getCurrentlySelectedAnswer()}
            updateSelectedAnswer={updateSelectedAnswer}
          />
          <div className="show-page">
            <button className="previousbutton" onClick={prevQuestion}>
              Previous Question!
            </button>
            <button className="nextbutton" onClick={nextQuestion}>
              {currentQuestionIndex < questions.length - 1
                ? "Next Question!"
                : "Show me something!"}
            </button>
          </div>
        </div>
      ) : (
        <Redirect to={`/detail/${recommendedMovie.id}`} />
      )}
    </div>
  );
}

export default FlashcardList;
