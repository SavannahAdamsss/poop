// require("dotenv").load();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());

app.use("/topics", require("./routes/topics"));

// app.get("/", (request, response) => {
//     response.send("Hi!");
// });

app.use((request, response, next) => {
    response.status(404).send();
});

app.use((error, request, response, next) => {
    console.error(error.message);
    response.status(500).send(error.message);
});

module.exports = app;
