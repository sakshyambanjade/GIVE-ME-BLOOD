import React from 'react';
import Navbar from '../Components/Navbar';
import Carousel from '../Components/carousel';
import Card from '../Components/card';
import '../Style/Home.css';
import Flex from '../Components/vflex'
import Supscription from '../Components/subscription'
import Footer from '../Components/footer'
function Home() {
  return (
    <div className="home-container">
      <div className="navbar"><Navbar/></div>
      <div className="carousel"><Carousel/></div>
      <div className="flex"><Flex/></div>
      <div className="card"><Card/></div>
      <div className="flex"><Flex/></div>
      <div className="Subscription"><Supscription/></div>
      <div className="flex"><Flex/></div>
      <div className="footer"><Footer/></div>
    </div>
  );
}

export default Home;
