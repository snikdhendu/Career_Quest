// // Import necessary modules
// import readline from "readline";  // For reading terminal input
// import { v4 as uuidv4 } from "uuid";  // For generating unique session IDs
// import { InMemoryChatMessageHistory } from "@langchain/core/chat_history";
// import { ChatPromptTemplate } from "@langchain/core/prompts";
// import { RunnableWithMessageHistory } from "@langchain/core/runnables";
// import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
// import dotenv from 'dotenv'

// dotenv.config({path: '../../.env',});

// // Store session chat histories
// const messageHistories = {};

// // Initialize the chatbot model
// const model = new ChatGoogleGenerativeAI({
//     modelName: "gemini-pro",
//     maxOutputTokens: 2048,
// });

// // Define the chatbot prompt
// const prompt = ChatPromptTemplate.fromMessages([
//   [
//     "system",
//     `You are a helpful career assistant for School Students. Response content must not exceed more than 20 words, strictly follow this and if you don't know the answer ...Please say you don't know the answer`,
//   ],
//   ["placeholder", "{chat_history}"],
//   ["human", "{input}"],
// ]);

// // Define the chain that connects the prompt to the model
// const chain = prompt.pipe(model);

// // Define the function to manage chat history and session
// const withMessageHistory = new RunnableWithMessageHistory({
//   runnable: chain,
//   getMessageHistory: async (sessionId) => {
//     if (messageHistories[sessionId] === undefined) {
//       messageHistories[sessionId] = new InMemoryChatMessageHistory();
//     }
//     return messageHistories[sessionId];
//   },
//   inputMessagesKey: "input",
//   historyMessagesKey: "chat_history",
// });

// // Initialize readline interface to interact with the terminal
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // Function to handle the chat with session support
// async function chat(sessionId) {
//   console.log("Chatbot is ready. Type 'exit' to quit.");
  
//   // Use a loop to continuously ask for input until 'exit' is typed
//   while (true) {
//     // Get input from the user
//     const userInput = await new Promise((resolve) => rl.question("You: ", resolve));

//     // Exit if the user types 'exit'
//     if (userInput.toLowerCase() === "exit") {
//       console.log("Goodbye!");
//       rl.close();
//       break;
//     }

//     // Process user input through the chatbot model
//     const response = await withMessageHistory.invoke(
//       {
//         input: userInput,
//       },
//       { configurable: { sessionId } }  // Pass session ID for context
//     );

//     // Output chatbot response
//     console.log("Chatbot: ", response.content);
//   }
// }

// // Start the chat with a new unique session ID
// const sessionId = uuidv4();  // Generate a unique session ID for this chat
// chat(sessionId);  // Start the chat function
