import React from 'react'
import axios from 'axios'
import { useEffect, useState } from "react";
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi'
import './TrendindCoins.css';
import  {TrendingCoins}  from '../Config/api.js';
import { CryptoState } from "../../CryptoContext";

const TrendindCoins = () => {
    const [trending, setTrending] = useState([]);
    const { currency, symbol } = CryptoState();
  

 const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));

    console.log(data);
    setTrending(data);
  };

  useEffect(() => {
    fetchTrendingCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

  return (
    <div className='featured'>
    <div className='container'>
        {/* Left */}
        <div className='left'>
            <h2>Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin</h2>
            <p>See all available assets: Cryptocurrencies and NFT's</p>
            <button className='btn'> TOP TRENDING COINS</button>
        </div>

        {/* Right */}
                    
        {/* right side end */}
        </div>
    </div>


  )
}

export default TrendindCoins