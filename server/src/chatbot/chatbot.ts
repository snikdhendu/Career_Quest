import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dotenv from 'dotenv';

// Resolve the path to the .env file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, '../../.env') });

import { v4 as uuidv4 } from 'uuid';
import { InMemoryChatMessageHistory } from "@langchain/core/chat_history";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { RunnableWithMessageHistory } from "@langchain/core/runnables";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";


// Define the type for chat history storage
interface MessageHistory {
  [sessionId: string]: InMemoryChatMessageHistory;
}

// Store session chat histories
const messageHistories: MessageHistory = {};

// Initialize the chatbot model
const model = new ChatGoogleGenerativeAI({
  modelName: "gemini-pro",
  maxOutputTokens: 2048,
});

// Define the chatbot prompt
const prompt = ChatPromptTemplate.fromMessages([
  [
    "system",
    `You are a helpful career assistant for School Students. Response content must not exceed more than 20 words, strictly follow this and if you don't know the answer ...Please say you don't know the answer`,
  ],
  ["placeholder", "{chat_history}"],
  ["human", "{input}"],
]);

// Define the chain that connects the prompt to the model
const chain = prompt.pipe(model);

// Define the function to manage chat history and session
const withMessageHistory = new RunnableWithMessageHistory({
  runnable: chain,
  getMessageHistory: async (sessionId: string) => {  // Explicitly typing sessionId
    if (messageHistories[sessionId] === undefined) {
      messageHistories[sessionId] = new InMemoryChatMessageHistory();
    }
    return messageHistories[sessionId];
  },
  inputMessagesKey: "input",
  historyMessagesKey: "chat_history",
});

// Function to handle chatbot logic
export async function handleChat(userInput: string, sessionId: string) { 
  // Process the user's input using the chatbot model
  const response = await withMessageHistory.invoke(
    { input: userInput },
    { configurable: { sessionId } }
  );

  return response.content;
}

// Function to generate a new session ID
export function createNewSession(): string {  // Return type explicitly declared
  return uuidv4();
}
