import { useUser } from '@clerk/clerk-react';
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

type Message = {
  text: string;
  sender: 'user' | 'bot';
};


const socket = io(import.meta.env.VITE_BACKEND_URL, {
  transports: ['websocket', 'polling'],
  withCredentials: true,
});

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const {user}=useUser();
  const [avatar, setAvatar]=useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  if(!user){
    return null;
  }

  useEffect(() => {
    setAvatar(user.imageUrl);
  
    // Listen for bot responses from the server
    socket.on('botResponse', (response) => {
      setMessages((prev) => [...prev, { sender: 'bot', text: response }]);
      setLoading(false);
    });

    // Clean up when the component is unmounted
    return () => {
      socket.off('botResponse');
    };
  }, []);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = { text: input, sender: 'user' };
    setMessages([...messages, userMessage]);
    socket.emit('userMessage', userMessage);

    // Simulate bot response (you can replace this with an API call)...add bot response here

    // setTimeout(() => {
    //   const botMessage: Message = { text: `Bot reply to: ${input}`, sender: 'bot' };
    //   setMessages((prevMessages) => [...prevMessages, botMessage]);
    // }, 1000);

    setInput('');
    setLoading(true);
  };

  const renderMessages = () => {
    return messages.map((message, index) => (
      <div key={index} className="flex items-center">

        {
          message.sender === 'user' ? (
            <>
              <div className="chat chat-end m-5 w-full">
                <div className="chat-bubble chat-bubble-success"> {message.text}</div>
              </div>
              <img
                src={avatar}
                alt="User Avatar"
                className="w-10 h-10 rounded-full mr-2"
              />
            </>
          ) : (
            <>
              <img
                src="/bot.jpg"
                alt="Bot Avatar"
                className="w-10 h-10 rounded-full mr-2"
              />
              <div className="chat chat-start">
                <div className="chat-bubble chat-bubble-primary"> {message.text}</div>
                
              </div>

            </>
          )
        }
        {/* <div
          className={`p-2 m-2 rounded-lg text-white ${message.sender === 'user' ? 'bg-blue-500' : 'bg-gray-500'
            }`}
        >
          {message.text}
        </div> */}

      </div>
    ));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="h-screen ml-64 flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-4xl border border-gray-300 rounded-lg shadow-lg bg-white mb-12" style={{ height: '650px' }}>
        <div className="p-4 overflow-y-auto" style={{ height: '570px' }}>
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full">
              <img
                src="/bot.jpg"
                alt="Bot Avatar"
                className="w-24 h-24 rounded-full mb-4"
              />
              <p className="text-lg font-medium text-gray-600">Hello, how can I help you?</p>
            </div>
          )}
          {renderMessages()}
          {loading && (
            <div className="flex items-center">
              <img
                src="/bot.jpg"
                alt="Bot Avatar"
                className="w-10 h-10 rounded-full mr-2"
              />
              <div className="flex flex-row gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
                <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
                <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
              </div>
            </div>
          )}
        </div>
        <div className="p-2 flex">
          <input
            type="text"
            aria-label="Message input"
            className="text-white flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
          />
          <button
            onClick={handleSendMessage}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            aria-label="Send message"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;



