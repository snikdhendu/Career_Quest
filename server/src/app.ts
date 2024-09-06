import dotenv from "dotenv";
dotenv.config({ path: "./.env" }); // Ensure correct path to .env file

import express from "express";
import cors from "cors";
import morgan from "morgan";
import http from "http";
import { Server } from "socket.io";
import { errorMiddleware } from "./middlewares/error.js";
import { handleChat, createNewSession } from "./chatbot/chatbot.js";
import { connectDB } from "./db/connectDb.js";

// Configuration
export const envMode = process.env.NODE_ENV?.trim() || "DEVELOPMENT";
const port = process.env.PORT || 3000;

// Create Express app
const app = express();

// Create HTTP server and Socket.io server
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    credentials: true,
    origin: "http://localhost:5173",  // Adjust according to your frontend URL
    methods: ["GET", "POST"]
  }
});

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: '*', // Adjust to your frontend URL
  credentials: true
}));
app.use(morgan("dev")); // Uncomment if you want logging

// Define routes
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Catch-all route for 404
app.get("*", (req, res) => {
  if (req.path.startsWith('/socket.io')) return;
  res.status(404).json({
    success: false,
    message: "Page not found",
  });
});

// Error handling middleware
app.use(errorMiddleware);

// Socket.io event handling
io.on('connection', (socket) => {
  console.log('User connected');
  
  let sessionId = createNewSession();
  
  socket.on('userMessage', async (userInput) => {
    try {
      const response = await handleChat(userInput.text, sessionId);
      socket.emit('botResponse', response);
    } catch (error) {
      console.error('Error handling user message:', error);
    }
  });

  // socket.on('userMessage', async (userInput) => {
  //   try {
  //     // Ensure userInput is a string or BaseMessage
  //     const formattedInput = typeof userInput === 'string'
  //       ? userInput
  //       : new BaseMessage({ text: userInput.text, sender: userInput.sender });

  //     const response = await handleChat(formattedInput, sessionId);
  //     socket.emit('botResponse', response);
  //   } catch (error) {
  //     console.error('Error handling user message:', error);
  //   }
  // });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Start function
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL!);
    server.listen(port, () => console.log(`Server is working on Port:${port} in ${envMode} Mode.`));
  } catch (error) {
    console.error('Error connecting to database or starting server:', error);
  }
};

// Call start function
start();
