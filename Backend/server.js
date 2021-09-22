const db = require("./queries");
const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;
app.use(express.json());
app.use(cors());

app.get("/questions", db.getQuestions);
app.get("/questions/:id", db.getQuestinsById);
app.get("/getAnswerByQuestion/", db.getAnswerByQuestion);

app.listen(port, () => {
  console.log(`Movie App running on port ${port}.`);
});

module.export = app;
