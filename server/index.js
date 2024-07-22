const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("User Connected");

  socket.on("joinRoom", (roomCode) => {
    console.log(`A user joined the room ${roomCode}`);
    socket.join(roomCode);
  });

  socket.on("play", ({ id, roomCode }) => {
    console.log(`play at ${id} to ${roomCode}`);
    socket.broadcast.to(roomCode).emit("updateGame", id);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected");
  });
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(4000, () =>
  console.log("server running => http://localhost:4000")
);
