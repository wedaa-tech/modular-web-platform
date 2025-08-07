import React, { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Import Routes, Route, and Link

// Dynamically import the Button component from MFE1.
const RemoteButton = React.lazy(() => import('mfe1/Button'));
// Dynamically import the Header component from MFE2.
const RemoteHeader = React.lazy(() => import('mfe2/Header'));

const Home = () => (
  <div className="text-center p-8 bg-blue-50 rounded-lg shadow-inner">
    <h2 className="text-3xl font-bold text-blue-700 mb-4">Welcome to the Host Application!</h2>
    <p className="text-lg text-gray-700">
      Navigate to different microfrontends using the links above.
    </p>
  </div>
);

const Mfe1Page = () => (
  <div className="p-8 bg-green-50 rounded-lg shadow-inner">
    <h2 className="text-3xl font-bold text-green-700 mb-4">MFE1 Page</h2>
    <Suspense fallback={<div className="text-gray-600">Loading MFE1 Button...</div>}>
      <RemoteButton />
    </Suspense>
  </div>
);

const Mfe2Page = () => (
  <div className="p-8 bg-purple-50 rounded-lg shadow-inner">
    <h2 className="text-3xl font-bold text-purple-700 mb-4">MFE2 Page</h2>
    <Suspense fallback={<div className="text-gray-600">Loading MFE2 Header...</div>}>
      <RemoteHeader />
    </Suspense>
  </div>
);

const App = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Host Application</h1>

      {/* Navigation Links */}
      <nav className="mb-8 p-4 bg-blue-600 rounded-lg shadow-md flex justify-center space-x-6">
        <Link to="/" className="text-white text-lg font-semibold hover:text-blue-200 transition duration-200">
          Home
        </Link>
        <Link to="/mfe1" className="text-white text-lg font-semibold hover:text-blue-200 transition duration-200">
          Go to MFE1
        </Link>
        <Link to="/mfe2" className="text-white text-lg font-semibold hover:text-blue-200 transition duration-200">
          Go to MFE2
        </Link>
      </nav>

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mfe1" element={<Mfe1Page />} />
        <Route path="/mfe2" element={<Mfe2Page />} />
      </Routes>

      <p className="mt-8 text-gray-700">
        This host application uses React Router to navigate between its own content and integrated microfrontends.
      </p>
    </div>
  );
};

export default App;
