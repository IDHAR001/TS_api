import * as express from "express";
import * as http from "http";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", function (req, res) {
  res.send("Hello world!");
});

app.use("/users/login", function(req, res) {
  res.send("This is a login page")
})

const server = http.createServer(app);

export default server;
