require("dotenv").config();

const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const disasterRoutes = require("./routes/disasterRoutes");

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

connectDB();

/* Middleware */
app.use(cors());
app.use(express.json());

/* Socket */
app.set("io", io);

io.on("connection", (socket) => {
  console.log("User Connected");
});

/* Routes */
app.use("/api/auth", authRoutes);
app.use("/api/disasters", disasterRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});