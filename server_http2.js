import spdy from 'spdy';
import express from 'express';
import { readFileSync } from 'fs';

const app = express();
app.use(express.static("dist"));

const { createServer } = spdy;

createServer(
  {
    key: readFileSync("server.key"),
    cert: readFileSync("server.crt"),
  },
  app
).listen(3000, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Server listening on port 3002');
  }
});
