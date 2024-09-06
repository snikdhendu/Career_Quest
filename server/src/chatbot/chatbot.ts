// // Import necessary classes and utilities
// import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
// // import { v4 as uuidv4 } from "uuid";  // For generating unique session IDs
// import { InMemoryChatMessageHistory } from "@langchain/core/chat_history";
// import { ChatPromptTemplate } from "@langchain/core/prompts";
// import { RunnableWithMessageHistory } from "@langchain/core/runnables";

// // Store session chat histories
// const messageHistories = {};

// // Define the prompt format for the chatbot
// const prompt = ChatPromptTemplate.fromMessages([
//   [
//     "system",
//     `You are a helpful assistant who remembers all details the user shares with you.`,
//   ],
//   ["placeholder", "{chat_history}"],  // Placeholder for the previous conversation history
//   ["human", "{input}"],  // Placeholder for new user input
// ]);

// // Define a chain by connecting the prompt to a model (replace `model` with an actual language model)
// const chain = prompt.pipe(model);

// // // Wrap the chain with message history logic for maintaining conversation context
// // const withMessageHistory = new RunnableWithMessageHistory({
// //   runnable: chain,
// //   getMessageHistory: async (sessionId) => {
// //     if (messageHistories[sessionId] === undefined) {
// //       // If no history exists for this session, create a new one
// //       messageHistories[sessionId] = new InMemoryChatMessageHistory();
// //     }
// //     return messageHistories[sessionId];
// //   },
// //   inputMessagesKey: "input",
// //   historyMessagesKey: "chat_history",
// // });

// // Function to simulate chat interactions with session support
// async function chat(sessionId) {
//   // Configuration with session ID
//   const config = {
//     configurable: {
//       sessionId: sessionId,  // Unique session ID to track the conversation
//     },
//   };

//   // First interaction: User introduces themselves
//   const response = await withMessageHistory.invoke(
//     {
//       input: "Hi! I'm Bob",  // User input
//     },
//     config  // Pass session ID
//   );
//   console.log(response.content);  // Print the chatbot's response

//   // Follow-up interaction: User asks about their name
//   const followupResponse = await withMessageHistory.invoke(
//     {
//       input: "What's my name?",  // User input
//     },
//     config  // Pass session ID to maintain context
//   );
//   console.log(followupResponse.content);  // Print the chatbot's response
// }

// // Simulate the chatbot interacting with different sessions

// // Generate unique session IDs for two different users
// const sessionId1 = uuidv4();  // For the first user
// const sessionId2 = uuidv4();  // For the second user

// // User 1's conversation
// chat(sessionId1);

// // User 2's conversation (separate from User 1)
// chat(sessionId2);




