const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Rahul@1234",
  database: "Delta_App",
});

try {
  connection.query("SHOW TABLES", (error, result) => {
    if (error) throw error;
    console.log(result);
  });
} catch (error) {
  console.log(error);
}

let getRandomUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};

//console.log(getRandomUser());
