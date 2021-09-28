// useEffect(() => {
  //   fetch("http://localhost:8000/getAnswerByQuestion", {
  //     method: "Get",
  //     header: { "content-type": "application/json" },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const newarr = data.reduce((retval, el) => {
  //         if (el.question in retval) {
  //           retval[el.question].answers.push(el.answer);
  //         } else {
  //           retval[el.question] = {
  //             question: el.question,
  //             answers: [el.answer],
  //           };
  //         }

  //         return retval;
  //       }, {});
  //       const newarr2 = Object.values(newarr);
  //       setNewQuestions(newarr2);
  //       setCurrentQuestion(newQuestions[cqi]);
  //     })
  //     .catch((error) => {
  //       console.log("Error:", error);
  //     });
  // }, [cqi, newQuestions]);
 