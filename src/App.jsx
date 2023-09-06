import { useState, useEffect } from 'react';
import { fetchDataFromApi } from './utils/api';

function App() {
  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = async () => {
    try {
      const response = await fetchDataFromApi('/3/discover/movie');
      console.log(response.data); // Assuming response.data contains the data you need
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      {/* Your component content here */}
    </div>
  );
}

export default App;
