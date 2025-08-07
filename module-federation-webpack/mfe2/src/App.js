import React from 'react';
import Header from './Header'; // Import the local Header component

// Main App component for MFE2.
// This component will be rendered when MFE2 runs independently.
// It also serves as a container for the Header component which is exposed.
const App = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">Microfrontend 2</h1>
      <p className="text-lg text-gray-700 mb-4">
        This is MFE2. It exposes a Header component.
      </p>
      <div className="mt-4">
        <Header /> {/* Render the local Header component */}
      </div>
    </div>
  );
};

export default App;
