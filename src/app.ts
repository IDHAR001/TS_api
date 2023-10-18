import * as express from 'express';
import * as http from 'http';
import * as dotenv from 'dotenv';


dotenv.config();

const app = express();

app.get('/', function (req, res) {
  res.send('Hello world!');
});

app.listen(3000);

const server = http.createServer(app);

export default server;