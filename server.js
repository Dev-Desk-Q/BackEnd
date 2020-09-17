const express = require("express");
const helmet = require("helmet");
const cors = require("cors");


// const usersRouter = require("./api/users-router");
const restricted = require("./middleware/restrict");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());


// server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = server;
