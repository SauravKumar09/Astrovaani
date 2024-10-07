import React from "react";
import { useNavigate } from "react-router-dom";
import AstrovaaniLogo from "../assets/AstrovaaniLogo.png";

const Feedback = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/consultation");
  };

  return (
    <div className="min-h-screen bg-yellow-400 flex flex-col items-center">
      <div className="w-full bg-white py-4 px-6 flex items-center">
        <img
          src={AstrovaaniLogo}
          alt="Astrovaani Logo"
          className="w-25 h-10 mr-2"
        />
      </div>

      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-80 text-center">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            How was your experience with Astrologer?
          </h2>

          <div className="flex justify-center mb-4">
            <span className="text-gray-400 text-2xl">⭐</span>
            <span className="text-gray-400 text-2xl">⭐</span>
            <span className="text-gray-400 text-2xl">⭐</span>
            <span className="text-gray-400 text-2xl">⭐</span>
          </div>

          <p className="text-gray-600 mb-4">Write your feedback:</p>

          <textarea
            className="border border-gray-300 rounded-lg w-full h-24 p-2 mb-4"
            placeholder="Type your feedback here..."
          />

          <button
            onClick={handleSubmit}
            className="bg-yellow-500 text-white px-6 py-2 rounded w-full hover:bg-yellow-600 transition duration-300"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
