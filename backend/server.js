const express = require("express");
const mysql = require('mysql');
const cors = require("cors");
const bodyParser = require("body-parser");

//const port = process.env.PORT;

const app = express();

const config = require("./config/db.config")

var corsOptions = {
    origin: "http://localhost:8081",
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var con = mysql.createConnection({
    host: config.HOST,
    user: config.USER,
    password: config.PASSWORD
});

app.get("/api/test/all", (req,res) => {
    res.status(200).send("Custom content from backend");
})

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to SQL server!");
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
