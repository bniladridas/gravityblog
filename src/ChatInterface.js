import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { GoogleGenerativeAI } from '@google/generative-ai';
// require('dotenv').config();

const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: 'gemini-pro',
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: 'text/plain',
};

const ChatInterface = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async (input) => {
    const chatSession = model.startChat({
      generationConfig,
      history: [
        ...messages.map(msg => ({
          role: msg.sender === 'user' ? 'user' : 'model',
          parts: [{ text: msg.text }],
        })),
      ],
    });
    const result = await chatSession.sendMessage(input);
    setMessages([...messages, { text: input, sender: 'user' }, { text: result.response.text(), sender: 'ai' }]);
    setInput('');
  };

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 font-sans bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">Chat Interface</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-2">
        Welcome to the chat interface! Here you can interact with our AI.
      </p>
      <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4">
        {messages.map((message, index) => (
          <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}> 
            <span className="inline-block px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white">
              {message.text}
            </span>
          </div>
        ))}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600"
          placeholder="Type a message..."
        />
        <button onClick={handleSend} className="mt-2 w-full bg-blue-500 text-white rounded-lg p-2">Send</button>
      </div>
      <button onClick={onClose} className="mt-4 w-full bg-red-500 text-white rounded-lg p-2">Close</button>
      <div className="p-4 text-center text-gray-600 dark:text-gray-400">
        <p>AI optimized by <a href="https://www.linkedin.com/company/beta-agent" target="_blank" rel="noopener noreferrer">Beta AI Company</a></p>
      </div>
    </div>
  );
};

ChatInterface.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ChatInterface;