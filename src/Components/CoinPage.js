import React, { useState, useEffect } from "react";
import { LinearProgress, makeStyles, Typography ,Button } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import axios from "axios";
import { SingleCoin } from "./Config/api";
import DOMPurify from "dompurify";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import "./coinpage.css";
// import ReactHtmlParser from "react-html-parser";
import CoinInfo from "./CoinInfo";
const CoinPage = () => {
  console.log(useParams())
  const {id} = useParams();
 
  const [coin, setCoin] = useState();
  const { currency, symbol , user ,setAlert ,watchlist} = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));

    setCoin(data);
  };
  // console.log(coin);
  const inWatchlist = watchlist.includes(coin?.id);

  const addToWatchlist = async () => {
    const coinRef = doc(db, "watchlist", user.uid);
    try {
      await setDoc(
        coinRef,
        { coins: watchlist ? [...watchlist, coin?.id] : [coin?.id] },
        { merge: true }
      );

      setAlert({
        open: true,
        message: `${coin.name} Added to the Watchlist !`,
        type: "success",
      });
    } catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: "error",
      });
    }
  };

  const removeFromWatchlist = async () => {
    const coinRef = doc(db, "watchlist", user.uid);
    try {
      await setDoc(
        coinRef,
        { coins: watchlist.filter((wish) => wish !== coin?.id) },
        { merge: true }
      );

      setAlert({
        open: true,
        message: `${coin.name} Removed from the Watchlist !`,
        type: "success",
      });
    } catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: "error",
      });
    }
  };

  useEffect(() => {
    fetchCoin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const useStyles = makeStyles((theme) => ({
    container: {
      [theme.breakpoints.down("md")]: {
        // display:"flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent:"center",
      },
    },
  }));

  const classes = useStyles();
  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;

  return (
    <div className={classes.container}>
      {/* upper section start */}
      <div className="maincontainer">
      <div className="coin-container">
        <div className="content">
          <h1>{coin.name}</h1>
          {user && (
            <div className="addbtn">
            <Button
              variant="outlined"
              style={{
                width: "100%",
                height: 40,
                backgroundColor: inWatchlist ? "#ff0000" : "#EEBC1D",
              }}
              onClick={inWatchlist ? removeFromWatchlist : addToWatchlist}
            >
              {inWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
            </Button>
            </div>
          )}
        </div>
        <div className="content">
          <div className="rank">
            <span className="rank-btn">Rank # {coin.market_cap_rank}</span>
          </div>
          <div className="info">
            <div className="coin-heading">
              {coin.image ? <img src={coin.image.small} alt="" /> : null}
              <p>{coin.name}</p>
              {coin.symbol ? <p>{coin.symbol.toUpperCase()}/{currency}</p> : null}
            </div>
            <div className="coin-price">
              {coin.market_data?.current_price ? (
                <h1>  {symbol}{" "}{coin.market_data.current_price[currency.toLowerCase()]}</h1>
              ) : null}
            </div>
          </div>
        </div>

        <div className="content">
          <div className="stats">
            <div className="left">
              <div className="row">
                <h4>24 Hour Low</h4>
                {coin.market_data?.low_24h ? (
                  <p>{symbol}{" "}{coin.market_data.low_24h[currency.toLowerCase()]}</p>
                ) : null}
              </div>
              <div className="row">
                <h4>24 Hour High</h4>
                {coin.market_data?.high_24h ? (
                  <p>{symbol}{" "}{coin.market_data.high_24h[currency.toLowerCase()]}</p>
                ) : null}{" "}
              </div>
            </div>
            <div className="right">
              <div className="row">
                <h4>Market Cap</h4>
                {coin.market_data?.market_cap ? (
                  <p>{symbol}{" "}{coin.market_data.market_cap[currency.toLowerCase()]}</p>
                ) : null}
              </div>
              <div className="row">
                <h4>Circulating Supply</h4>
                {coin.market_data ? (
                  <p>{coin.market_data.circulating_supply}</p>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="about">
            <h3>About</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  coin.description ? coin.description.en : ""
                ),
              }}
            ></p>
          </div>
        </div>
      </div>
      {/* upper section end */}
      <div className="container-2">
      <CoinInfo coin={coin}/>
    </div>
    </div>
    
    </div>
  );
};

export default CoinPage;
