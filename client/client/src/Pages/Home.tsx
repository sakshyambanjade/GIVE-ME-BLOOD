import React from 'react';
import Navbar from '../Components/Navbar';
import Carousel from '../Components/carousel';
import Card from '../Components/card';
import '../Style/Home.css'; // Import the CSS file

function Home() {
  return (
    <div className="home-container">
      <div className="navbar"><Navbar/></div>
      <div className="spacer"></div>
      <div className="carousel"><Carousel/></div>
      <div className="spacer"></div>
      <div className="card"><Card/></div>
    </div>
  );
}

export default Home;
