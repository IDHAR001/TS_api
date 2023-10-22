import * as express from "express";
import * as http from "http";
import * as dotenv from "dotenv";
import router from "./routes/users";

dotenv.config();

const app = express();

app.get("/", function (req, res) {
  res.send("Hello world!");
});

app.use("/users/login", function(req, res, next) {
  res.send("This is a login page");
  console.log("middle1");
  next();
},
  (req, res, next) => {
    console.log("middle2");
  })

app.use('/users',router)

const server = http.createServer(app);

export default server;
