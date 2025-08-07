import React, { useState } from 'react';

const Header = () => {
  const [message, setMessage] = useState('');

  const handleButtonClick = () => {
    setMessage('Button clicked inside MFE2 Header! ✨');
    setTimeout(() => setMessage(''), 3000); // Clear message after 3 seconds
  };

  return (
    <header className="bg-purple-500 text-white p-6 rounded-md shadow-lg flex flex-col items-center space-y-4">
      <h2 className="text-3xl font-semibold">Welcome to MFE2!</h2>
      <p className="text-base mt-1">This header is shared across applications.</p>
      <button
        className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75"
        onClick={handleButtonClick}
      >
        Click MFE2's Inner Button
      </button>
      {message && (
        <p className="text-purple-200 text-sm font-medium animate-pulse">
          {message}
        </p>
      )}
    </header>
  );
};

export default Header;
