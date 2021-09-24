import { useState, useEffect } from "react";
import FlashcardList from "./FlashcardList";

function Flashmain() {
  const [newQuestions, setNewQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});
  //current question index below
  const [cqi, setCQI] = useState(0);
  useEffect(() => {
    fetch("http://localhost:8000/getAnswerByQuestion", {
      method: "Get",
      header: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        const newarr = data.reduce((retval, el) => {
          if (el.question in retval) {
            retval[el.question].answers.push(el.answer);
          } else {
            retval[el.question] = {
              question: el.question,
              answers: [el.answer],
            };
          }

          return retval;
        }, {});
        const newarr2 = Object.values(newarr);
        setNewQuestions(newarr2);
        setCurrentQuestion(newQuestions[cqi]);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, [cqi, newQuestions]);
  console.log(Object.values(newQuestions));
  // console.log(newQuestions[0]);
  return (
    <div>
      <FlashcardList currentQuestion={currentQuestion} />
      <button className="nextbutton" onClick={() => setCQI(cqi + 1)}>
        Next Question!
      </button>
    </div>
  );
}
export default Flashmain;
