import React, { Suspense } from 'react';

// Dynamically import the Button component from MFE1.
// 'mfe1/Button' corresponds to the remote name 'mfe1' and the exposed module './Button'.
const RemoteButton = React.lazy(() => import('mfe1/Button'));
// Dynamically import the Header component from MFE2.
const RemoteHeader = React.lazy(() => import('mfe2/Header'));

const App = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Host Application</h1>

      {/* Section for MFE2's Header */}
      <div className="bg-blue-100 p-4 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">MFE2 Header</h2>
        {/* Use Suspense for lazy loaded components to show a fallback while loading. */}
        <Suspense fallback={<div className="text-gray-600">Loading MFE2 Header...</div>}>
          <RemoteHeader />
        </Suspense>
      </div>

      {/* Section for MFE1's Button */}
      <div className="bg-green-100 p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">MFE1 Button</h2>
        <Suspense fallback={<div className="text-gray-600">Loading MFE1 Button...</div>}>
          <RemoteButton />
        </Suspense>
      </div>

      <p className="mt-8 text-gray-700">
        This host application integrates components from MFE1 and MFE2 using Webpack Module Federation.
      </p>
    </div>
  );
};

export default App;
