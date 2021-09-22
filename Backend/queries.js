const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "movies",
  password: "",
  port: 5432,
});

const getQuestions = (request, response) => {
  pool.query(
    "SELECT question FROM questions ORDER BY id ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getAnswerByQuestion = (request, response) => {
  pool.query(
    `select q.question ,a.answer 
    from answers as a
    join questions as q on a.question_id = q.ID`,
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getQuestinsById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(
    "SELECT question FROM questions WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};
module.exports = {
  getQuestions,
  getQuestinsById,
  getAnswerByQuestion,
};
