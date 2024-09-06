import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import express from "express";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import morgan from "morgan";
import http from "http";
import { Server } from "socket.io";
import { handleChat, createNewSession } from "./chatbot/chatbot.js";
import { connectDB } from "./db/connectDb.js";



export const envMode = process.env.NODE_ENV?.trim() || "DEVELOPMENT";
const port = process.env.PORT || 3000;

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",  // Adjust according to your frontend URL
    methods: ["GET", "POST"]
  }
});

// Handle Socket.io connections
io.on('connection', (socket) => {
  console.log('User connected');

  // Create or retrieve sessionId for the user
  let sessionId = createNewSession();

  // Listen for 'userMessage' events (when the user sends a message)
  socket.on('userMessage', async (userInput) => {
    // Process the user's input using the chatbot model
    const response = await handleChat(userInput, sessionId);

    // Send the chatbot's response back to the client
    socket.emit('botResponse', response);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: " * ", credentials: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// your routes here

app.get("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Page not found",
  });
});

app.use(errorMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL!);
    app.listen(port, () => console.log("Server is working on Port:" + port + " in " + envMode + " Mode."));
  } catch (error) {
    console.log('Error connecting to database or listening on port:', error);
  }
};

start();