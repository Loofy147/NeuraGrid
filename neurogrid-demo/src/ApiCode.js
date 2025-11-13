import React from 'react';

/**
 * The ApiCode component for the NeuroGrid API Demo.
 * This component displays a sample code snippet for making an API request.
 */
const ApiCode = () => {
  const codeSnippet = `
// Example: Get real-time neural data
fetch('https://api.neurogrid.com/v1/data/real-time')
  .then(response => response.json())
  .then(data => console.log(data));
  `;

  return (
    <div style={{ padding: '20px' }}>
      <h2>API Code Example</h2>
      <pre style={{ backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '5px' }}>
        <code>{codeSnippet}</code>
      </pre>
    </div>
  );
};

export default ApiCode;
