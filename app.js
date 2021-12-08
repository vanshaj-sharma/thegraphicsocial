const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();

//MiddleWares
app.use(express.static(path.join(__dirname, "client", "build")));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//testing back end ->
app.get("/test", (req, res) => {
  res.send("Backend is working properly!!");
});

//test up

const port = process.env.PORT || 5000;

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server now running at http://localhost:${port}`);
});
