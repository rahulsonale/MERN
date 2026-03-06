const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Rahul@1234",
  database: "Delta_App",
});

//Inserting New Data
let q = "INSERT INTO user(id ,username ,email,password) VALUES ?";
let users = [
  ["123b", "123b_username", "abcb@gmail.com", "abcb"],
  ["123c", "123c_username", "abcc@gmail.com", "abcc"],
];

try {
  connection.query(q, [users], (error, result) => {
    if (error) throw error;
    console.log(result);
  });
} catch (error) {
  console.log(error);
}

connection.end();

let getRandomUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};

//console.log(getRandomUser());
