const express = require("express");

const app = express();
const dotenv = require("dotenv");
dotenv.config();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json);

const cors = require("cors");
app.use(cors());

app.use(express.static("dist"));

app.post("/addText", AddText);
function AddText(req, res) {
  console.log(res);
}

const port = 3000;

const server = app.listen(port, listening);

function listening() {
  console.log(`Server running on localhost ${port}`);
  console.log(`Your API key is ${process.env.API_KEY}`);
}
