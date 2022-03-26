import React from 'react';
import Banner from './Banner/Banner';
import TrendindCoins from './Banner/TrendindCoins'
import CoinsTable from './CoinsTable'

const Home = () => {
  return <div>
    <Banner/>
    <TrendindCoins/>
    <CoinsTable/>
  </div>;
};

export default Home;
