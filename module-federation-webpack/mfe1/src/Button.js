import React, { useState } from 'react';

const Button = () => {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Button clicked from MFE1! 🎉');
    setTimeout(() => setMessage(''), 3000); // Clear message after 3 seconds
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <button
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
        onClick={handleClick}
      >
        Click Me (from MFE1)
      </button>
      {message && (
        <p className="text-green-700 text-sm font-medium animate-pulse">
          {message}
        </p>
      )}
    </div>
  );
};

export default Button;
