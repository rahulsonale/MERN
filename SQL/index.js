const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodoverride = require("method-override");
const { send } = require("process");

app.use(methodoverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Rahul@1234",
  database: "Delta_App",
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});

//Home route
app.get("/", (req, res) => {
  let q = `select count(*) from user`;
  try {
    connection.query(q, (error, result) => {
      if (error) throw error;
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (error) {
    console.log(error);
    res.send("Some error occured");
  }
});

//Show route
app.get("/user", (req, res) => {
  let q = `SELECT * FROM USER`;
  try {
    connection.query(q, (error, users) => {
      if (error) throw error;
      //console.log(result);
      //res.send(result);
      res.render("showusers.ejs", { users });
    });
  } catch (error) {
    console.log(error);
    res.send("Some error occured");
  }
});

///Edit username route
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  console.log(id);
  let q = `SELECT * FROM USER WHERE id = '${id}'`;
  try {
    connection.query(q, (error, result) => {
      if (error) throw error;
      let user = result[0];
      //res.send(result);
      res.render("edit.ejs", { user });
    });
  } catch (error) {
    console.log(error);
    res.send("Some error occured");
  }
});

//Update router PATCH
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formpass, username: newusername } = req.body;
  let q = `SELECT * FROM USER WHERE id = '${id}'`;
  try {
    connection.query(q, (error, result) => {
      if (error) throw error;
      let user = result[0];
      if (formpass != user.password) {
        res.send("Wrong Password");
      } else {
        let q2 = `UPDATE user SET username=${newusername} WHERE id = '${id}'`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.send(result);
        });
      }
      res.send(user);
      //res.send(result);
    });
  } catch (error) {
    console.log(error);
    res.send("Some error occured");
  }
});
