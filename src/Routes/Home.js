import React from 'react';
import Attributes from '../Components/Attributes/Attributes';
import Cards from '../Components/Cards/Cards';
import Chart from '../Components/Chart/Chart';
import Events from '../Components/Events/Events';
import Sidebar from '../Components/Sidebar/Sidebar';
import '../App.css';

const Home = () => {
  return (
    <div className="container">
      <Sidebar />
      <Cards />
      <Chart />
      <Attributes />
      <Events />
    </div>
  );
};

export default Home;
