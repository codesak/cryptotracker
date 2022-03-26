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
        <div className='right'>
            <div className='right-flex-1'>
                <div className='right-flex-child-1'>
                    <div className='card'>
                <div className='top'>
                            {/* <img src={BTC} alt='/' /> */}
                            <img src={trending[0].image} alt='' />
                        </div>
                        <div>
                            <h5>{trending[0].name}</h5>
                            <p>
                                ${trending[0].current_price.toLocaleString()}
                                </p>
                        </div>

                        {trending[0].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {trending[0].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {trending[0].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                    </div>
                    </div>
                
                <div className='right-flex-child-2'>
                <div className='card'>
                <div className='top'>
                            {/* <img src={BTC} alt='/' /> */}
                            <img src={trending[1].image} alt='' />
                        </div>
                        <div>
                            <h5>{trending[1].name}</h5>
                            <p>${trending[1].current_price.toLocaleString()}</p>
                        </div>

                        {trending[0].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {trending[1].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {trending[1].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                    </div> 
                </div>
                </div>
            
            <div className='right-flex-2'>
            <div className='right-flex-child-1'>
            <div className='card'>
                <div className='top'>
                            {/* <img src={BTC} alt='/' /> */}
                            <img src={trending[2].image} alt='' />
                        </div>
                        <div>
                            <h5>{trending[2].name}</h5>
                            <p>${trending[2].current_price.toLocaleString()}</p>
                        </div>

                        {trending[0].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {trending[2].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {trending[2].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                    </div>
            </div>
                <div className='right-flex-child-2'>
                <div className='card'>
                <div className='top'>
                            {/* <img src={BTC} alt='/' /> */}
                            <img src={trending[3].image} alt='' />
                        </div>
                        <div>
                            <h5>{trending[3].name}</h5>
                            <p>${trending[3].current_price.toLocaleString()}</p>
                        </div>

                        {trending[0].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {trending[3].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {trending[3].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                    </div>
                </div>
            </div>
            <div className='right-flex-3'>
            <div className='right-flex-child-1'>
            <div className='card'>
                <div className='top'>
                            {/* <img src={BTC} alt='/' /> */}
                            <img src={trending[4].image} alt='' />
                        </div>
                        <div>
                            <h5>{trending[4].name}</h5>
                            <p>${trending[0].current_price.toLocaleString()}</p>
                        </div>

                        {trending[4].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {trending[4].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {trending[4].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                    </div>
            </div>
                <div className='right-flex-child-2'>
                <div className='card'>
                <div className='top'>
                            {/* <img src={BTC} alt='/' /> */}
                            <img src={trending[5].image} alt='' />
                        </div>
                        <div>
                            <h5>{trending[5].name}</h5>
                            <p>${trending[5].current_price.toLocaleString()}</p>
                        </div>

                        {trending[5].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {trending[0].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {trending[5].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                    </div>
                </div>
            </div>
            </div>  
        {/* right side end */}
        </div>
    </div>


  )
}

export default TrendindCoins