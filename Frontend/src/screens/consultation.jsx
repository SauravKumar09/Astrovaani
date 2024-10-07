import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import AstrovaaniLogo from "../assets/AstrovaaniLogo.png";
import {
  FaUser,
  FaPhone,
  FaCheckCircle,
  FaMicrophoneSlash,
  FaTimes,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Consultation = () => {
  const navigate = useNavigate();

  const handleEndedClick = () => {
    navigate("/consultationEnd");
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Top Navbar */}
      <div className="bg-white py-4 px-6 flex items-center justify-between shadow-md">
        <img src={AstrovaaniLogo} alt="Astrovaani Logo" className="w-25 h-10" />
      </div>

      <div className="flex flex-grow">
        {/* Sidebar */}
        <div className="bg-gray-100 w-1/5 p-4">
          {/* Adjusted width to 20% */}
          <ul>
            <li className="mb-4 text-lg text-black font-semibold bg-pink-200 p-2 rounded">
              Consultation
            </li>
            <li className="mb-4 text-lg text-gray-600">Payments</li>
            <li className="mb-4 text-lg text-gray-600">Edit Profile</li>
            <li className="mb-4 text-lg text-gray-600">Logout</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-grow p-6 bg-gray-50 w-4/5">
          {/* Tabs Section */}
          <div className="flex space-x-4 mb-6">
            <button className="bg-pink-500 text-white py-2 px-4 rounded">
              Pending (3)
            </button>
            <button
              className="bg-gray-200 text-gray-700 py-2 px-4 rounded"
              onClick={handleEndedClick}
            >
              Ended (5)
            </button>
          </div>

          {/* Consultation Cards */}
          <div className="space-y-6">
            {/* Card 1 - Active Consultation */}
            <div className="bg-white shadow-lg rounded-lg p-4 text-left">
              <h2 className="font-semibold">Consultation ID: #2438</h2>
              <p className="text-gray-600">24 September 2024, 08:25 PM</p>
              <p className="mt-2">
                <strong>Customer:</strong> Sagar Chandola <br />
                <strong>Problem related to:</strong> Relationship <br />
                <strong>Age:</strong> 23, Male <br />
                <strong>Birth place:</strong> Delhi <br />
                <strong>Birth time:</strong> 02:56 PM <br />
                <strong>Message:</strong> I am starting a business in September.
                Will it be okay to start in September?
              </p>
              <div className="my-4 text-red-500 font-bold">
                Calling Sagar Chandola...
              </div>
              <div className="flex space-x-4">
                <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded flex items-center">
                  <FaMicrophoneSlash className="mr-2" /> Mute
                </button>
                <button className="bg-red-600 text-white py-2 px-4 rounded flex items-center">
                  <FaTimes className="mr-2" /> End
                </button>
              </div>
            </div>

            {/* Card 2 - Waiting */}
            <div className="bg-white shadow-lg rounded-lg p-4 text-left">
              <h2 className="font-semibold">Consultation ID: #2438</h2>
              <p className="text-gray-600">24 September 2024, 08:25 PM</p>
              <div className="flex justify-between items-center mt-4">
                {/* Left-aligned text */}
                <p className="text-left">Consultation Status</p>

                {/* Right-aligned button-like text */}
                <div className="bg-sky-500 text-white px-4 py-2 rounded ">
                  In waiting list
                </div>
              </div>
            </div>

            {/* Card 3 - Waiting */}
            <div className="bg-white shadow-lg rounded-lg p-4 text-left">
              <h2 className="font-semibold">Consultation ID: #2438</h2>
              <p className="text-gray-600">24 September 2024, 08:25 PM</p>
              <div className="flex justify-between items-center mt-4">
                <button className="bg-green-500 text-white py-2 px-4 rounded">
                  Accept
                </button>
              </div>
            </div>

            {/* Card 4 - Consultation with Call Button */}
            <div className="bg-white shadow-lg rounded-lg p-4 text-left">
              <h2 className="font-semibold">Consultation ID: #2438</h2>
              <p className="text-gray-600">24 September 2024, 08:25 PM</p>
              <p className="mt-2">
                <strong>Customer:</strong> Sagar Chandola <br />
                <strong>Problem related to:</strong> Relationship <br />
                <strong>Age:</strong> 23, Male <br />
                <strong>Birth place:</strong> Delhi <br />
                <strong>Birth time:</strong> 02:56 PM <br />
                <strong>Message:</strong> I am starting a business in September.
                Will it be okay to start in September?
              </p>
              <div className="flex justify-start mt-4">
                <button className="border border-black px-4 py-2 text-gray-700 rounded flex items-center">
                  <FaPhoneAlt className="ml-2 mr-2" /> Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
