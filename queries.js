const Pool = require("pg").Pool;
const pool = new Pool({
  user: "rajeswari",
  host: "localhost",
  database: "mars",
  password: "1234",
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

module.exports = {
  getUsers,
};
