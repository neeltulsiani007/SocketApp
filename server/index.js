const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io");

server.listen(5000, () =>
  console.log("server running => http://localhost:5000")
);
