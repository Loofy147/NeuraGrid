import React, { useState, useEffect } from 'react';

/**
 * The ApiResponse component for the NeuroGrid API Demo.
 * This component simulates an API call and displays the response.
 */
const ApiResponse = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate an initial API call to fetch neural data.
    setTimeout(() => {
      setData({
        timestamp: new Date().toISOString(),
        signal: 'alpha',
        strength: Math.random() * 100,
        noiseCancelled: true
      });
    }, 1000);

    // Simulate a real-time stream of neural data.
    const interval = setInterval(() => {
      setData({
        timestamp: new Date().toISOString(),
        signal: 'alpha',
        strength: Math.random() * 100,
        noiseCancelled: true
      });
    }, 2000); // Update the data every two seconds to simulate a real-time stream.

    return () => clearInterval(interval); // Clean up the interval on component unmount.
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Simulated API Response</h2>
      <pre style={{ backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '5px' }}>
        <code>{data ? JSON.stringify(data, null, 2) : 'Loading...'}</code>
      </pre>
    </div>
  );
};

export default ApiResponse;
