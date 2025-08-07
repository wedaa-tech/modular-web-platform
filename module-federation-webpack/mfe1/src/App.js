import React from 'react';
import Button from './Button'; // Import the local Button component

const App = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Microfrontend 1</h1>
      <p className="text-lg text-gray-700 mb-4">
        This is MFE1. It exposes a Button component.
      </p>
      <div className="mt-4">
        <Button /> {/* Render the local Button component */}
      </div>
    </div>
  );
};

export default App;
