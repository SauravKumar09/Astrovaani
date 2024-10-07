import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import AstrovaaniLogo from "../assets/AstrovaaniLogo.png"; // Adjust the path if necessary

const CallAccept = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleAccept = () => {
    navigate("/calling"); // Navigate to the Calling page
  };

  return (
    <div className="min-h-screen bg-yellow-400 flex flex-col items-center">
      {/* Top Navbar with Logo and Name */}
      <div className="w-full bg-white py-4 px-6 flex items-center">
        {/* Logo */}
        <img
          src={AstrovaaniLogo} // Use the imported logo variable
          alt="Astrovaani Logo"
          className="w-25 h-10 mr-2"
        />
        {/* Brand Name */}
      </div>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-80 text-center">
          {/* Profile Image Placeholder */}
          <div className="bg-yellow-300 w-16 h-16 rounded-full mx-auto mb-4"></div>

          {/* User Name */}
          <h2 className="text-lg font-semibold text-gray-800">
            Astrologer Name
          </h2>

          {/* Instruction text */}
          <p className="text-gray-600 mt-2">Click “Accept” to start the call</p>

          {/* Accept button */}
          <button
            className="mt-6 bg-white text-green-500 border border-green-500 px-6 py-2 rounded  hover:bg-green-600 hover:text-white transition duration-300"
            onClick={handleAccept} // Attach the click handler
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallAccept;
