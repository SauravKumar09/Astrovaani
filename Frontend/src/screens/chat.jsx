import React from "react";
import AstrovaaniLogo from "../assets/AstrovaaniLogo.png";
import { MdSend } from "react-icons/md";
const Chat = () => {
  return (
    <div className="flex flex-col h-screen bg-yellow-400">
      {/* Top Navbar */}
      <div className="bg-white shadow-md p-4 flex items-center">
        <img src={AstrovaaniLogo} alt="Astrovaani Logo" className="w-20 h-10" />
        <h1 className="text-xl font-bold ml-2">Astrovaani Chat</h1>
      </div>

      {/* Main Chat Container */}
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-4 flex flex-col">
          {/* Chat Messages (Placeholder for now) */}
          <div className="flex-grow overflow-y-auto p-2">
            {/* Placeholder for chat messages */}
            <div className="mb-4">
              <p className="bg-gray-200 p-2 rounded-md">
                Hello! How can I help you?
              </p>
            </div>
            <div className="mb-4">
              <p className="bg-blue-100 p-2 rounded-md text-right">
                I need assistance with my account.
              </p>
            </div>
            {/* More messages can be added here */}
          </div>

          {/* Message Input Section */}
          <div className="flex items-center mt-4">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-grow border border-gray-300 rounded-md p-2"
            />
            <button className="bg-blue-500 text-white rounded-md ml-2 p-2 flex items-center">
              <MdSend className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
