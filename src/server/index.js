const express = require("express");

const app = express();
const dotenv = require("dotenv");
dotenv.config();

const bodyParser = require("body-parser");
/*Middleware*/
//Here we are configuring express to use body-parser as middle-ware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*CORS */
const cors = require("cors");
app.use(cors());

/* STATIC SITE */
app.use(express.static("dist"));
app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

/*ROUTES*/
app.get("/getKey", getKey);
function getKey(req, res) {
  res.send({ key: process.env.API_KEY });
  console.log("Getting key");
}
app.post("/addText", AddText);
function AddText(req, res) {
  console.log(res);
}

/*SERVER */
const port = 8080;
app.listen(port, listening);

function listening() {
  console.log(`Server running on localhost ${port}`);
  console.log(`Your API key is ${process.env.API_KEY}`);
}
