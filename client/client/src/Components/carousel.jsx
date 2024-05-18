import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
  height: '290px',
  color: '#FFF',
  lineHeight: '280px', // Adjusted to match the height
  textAlign: 'center',
  background: '#1F1E1D',
};

const containerStyle = {
  width: '70%', // Adjust the width as needed
  margin: '0 auto', // Center the container
};

const App = () => (
  <div style={containerStyle}>
    <Carousel autoplay>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  </div>
);

export default App;
