import React from "react";

function Flashmain() {
  fetch("http://localhost:8000/getAnswerByQuestion", {
    method: "Get",
    header: { "content-type": "application/json" },
    // body: json.stringify(),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));

  return (
    <div>
      <h1>flashmain</h1>
    </div>
  );
}

export default Flashmain;
