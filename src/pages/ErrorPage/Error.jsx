import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4 text-center overflow-hidden">
      <h1 className="text-9xl font-extrabold mb-6 text-red-500 drop-shadow-lg animate-bounce">
        404
      </h1>

      <h2 className="text-3xl font-bold mb-4 text-white animate-pulse">
        Page Not Found 😢
      </h2>

      <p className="text-gray-400 max-w-md mb-8 animate-fadeIn">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-md transition-all duration-300 transform hover:scale-110 animate-bounce"
      >
        Go Home
      </Link>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="w-72 h-72 bg-red-700/20 rounded-full blur-3xl absolute top-10 left-10 animate-float"></div>
        <div className="w-72 h-72 bg-blue-600/20 rounded-full blur-3xl absolute bottom-10 right-10 animate-float delay-200"></div>
        <div className="w-96 h-96 bg-purple-500/10 rounded-full blur-3xl absolute top-1/3 left-1/2 -translate-x-1/2 animate-floatSlow"></div>
        <div className="w-80 h-80 bg-green-400/10 rounded-full blur-3xl absolute bottom-1/4 right-1/3 animate-floatSlow delay-300"></div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        @keyframes floatSlow {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(15px) translateX(-10px);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-floatSlow {
          animation: floatSlow 10s ease-in-out infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 2s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Error;
