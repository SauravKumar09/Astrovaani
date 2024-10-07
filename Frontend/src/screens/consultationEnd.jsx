import React from "react";
import AstrovaaniLogo from "../assets/AstrovaaniLogo.png";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ConsultationEnd = () => {
  const navigate = useNavigate();
  const handlePendingClick = () => {
    navigate("/consultation");
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
          <ul>
            <li className="mb-4 text-lg text-black font-semibold bg-pink-200 p-2 rounded">
              Consultation
            </li>
            <li
              className="mb-4 text-lg text-gray-600 cursor-pointer"
              onClick={handlePendingClick}
            >
              Payments
            </li>
            <li className="mb-4 text-lg text-gray-600">Edit Profile</li>
            <li className="mb-4 text-lg text-gray-600">Logout</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-grow p-6 bg-gray-50 w-4/5">
          {/* Tabs Section */}
          <div className="flex space-x-4 mb-6">
            <button
              className="bg-gray-200 text-gray-700 py-2 px-4 rounded"
              onClick={handlePendingClick}
            >
              Pending (3)
            </button>
            <button className="bg-pink-500 text-white py-2 px-4 rounded">
              Ended (5)
            </button>
          </div>

          {/* Consultation Cards */}
          <div className="space-y-6">
            {/* Card 1 - Consultation Ended */}
            <div className="bg-white shadow-lg rounded-lg p-4 text-left">
              <h2 className="font-semibold">Consultation ID: #2438</h2>
              <p className="text-gray-600">24 September 2024, 08:25 PM</p>
              <p className="mt-2">
                <strong>Customer Rated you:</strong> <br />
                <span className="flex items-center">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaRegStar className="text-yellow-500" />
                  <span className="ml-2">4/5</span>
                </span>
              </p>
              <p className="mt-2">
                <strong>Feedback:</strong> Great consultation! I really
                appreciated the insights you provided.
              </p>
              <div className="flex justify-start mt-4">
                <button className="bg-blue-500 text-white py-2 px-4 rounded">
                  Report
                </button>
              </div>
            </div>

            {/* Card 2 - Consultation Ended */}
            <div className="bg-white shadow-lg rounded-lg p-4 text-left">
              <h2 className="font-semibold">Consultation ID: #2439</h2>
              <p className="text-gray-600">25 September 2024, 09:15 PM</p>
              <p className="mt-2">
                <strong>Customer Rated you:</strong> <br />
                <span className="flex items-center">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaRegStar className="text-yellow-500" />
                  <FaRegStar className="text-yellow-500" />
                  <span className="ml-2">3/5</span>
                </span>
              </p>
              <p className="mt-2">
                <strong>Feedback:</strong> The consultation was okay, but I
                expected more detail.
              </p>
              <div className="flex justify-start mt-4">
                <button className="bg-blue-500 text-white py-2 px-4 rounded">
                  Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationEnd;
