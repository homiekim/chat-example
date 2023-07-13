const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server, {
  cors: {
    origin: true,
  },
});
// chat namespace 사용
const chat = io.of("/chat");

chat.on("connection", (socket) => {
  console.log("chat namespace connected");

  const roomIdx = socket.handshake.query.roomIdx;
  socket.join(roomIdx);
  socket.to(roomIdx).emit("join", roomIdx + " chatroom join");
  socket.on("disconnect", () => {
    console.log("user disconnected");
    socket.leave(roomIdx);
  });

  // on으로 이벤트 받고 emit으로 보내줌
  socket.on("send", (msg) => {
    socket.emit("receive", msg);
    socket.to(roomIdx).emit("receive", msg);
  });
});

server.listen(3010, () => {
  console.log("server listen 3010 port...");
});
