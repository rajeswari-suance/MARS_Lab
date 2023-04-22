const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "MARS",
  password: "1432",
  port: 5432,
});

const getUsers = (request, response) => {
  pool.query(
    "SELECT * FROM publications ORDER BY title ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      const publications = results.rows;
      response.render("publications", { publications });
    }
  );
};
const getTest = (request, response) => {
  response.send("test");
};

module.exports = {
  getUsers,
  getTest,
};
