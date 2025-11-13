import React from 'react';
import Header from './Header';
import ApiCode from './ApiCode';
import ApiResponse from './ApiResponse';
import './App.css';

/**
 * The main App component for the NeuroGrid API Demo.
 * This component orchestrates the layout and renders the primary UI components.
 */
function App() {
  return (
    <div className="App">
      {/* Renders the main header for the application */}
      <Header />
      {/* Renders the component that displays a sample API request */}
      <ApiCode />
      {/* Renders the component that displays a simulated API response */}
      <ApiResponse />
    </div>
  );
}

export default App;
