import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import AstrovaaniLogo from "../assets/AstrovaaniLogo.png"; // Adjust the path if necessary

const Calling = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleEndCall = () => {
    navigate("/feedback"); // Navigate to the Feedback page
  };

  return (
    <div className="flex flex-col h-screen bg-yellow-400">
      {/* Navbar */}
      <div className="bg-white shadow-md p-4 flex items-center">
        <img
          src={AstrovaaniLogo}
          alt="Astrovaani Logo"
          className="w-25 h-10" // Adjust size as needed
        />
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center flex-grow">
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
          <div className="bg-gray-200 rounded-full w-24 h-24 flex items-center justify-center mb-4">
            <span className="text-3xl font-bold text-gray-500">👤</span>
          </div>
          <h1 className="text-lg font-semibold">Name</h1>
          <p className="text-gray-500">Consultation ID: #2438</p>
          <div className="text-xl font-bold my-2">30 min 60 sec</div>
          <div className="flex space-x-4 mt-4">
            <button className="bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded flex items-center">
              <span className="material-icons">mic_off</span> Mute
            </button>
            <button
              className="bg-red-600 text-white font-semibold py-2 px-4 rounded flex items-center"
              onClick={handleEndCall} // Attach the click handler
            >
              End
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calling;
