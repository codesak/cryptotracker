import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { CoinList } from "./Components/Config/api";
import { onAuthStateChanged } from "firebase/auth";

import { auth, db } from "./firebase";
import { onSnapshot, doc } from "firebase/firestore";

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState("false");
  const [user, setUser] = useState(null);
  const [watchlist, setWatchlist] = useState([]);
  // console.log(user)
  useEffect(() => {
    if (user) {
      const coinRef = doc(db, "watchlist", user?.uid);
      var unsubscribe = onSnapshot(coinRef, (coin) => {
        if (coin.exists()) {
          console.log(coin.data().coins);
          setWatchlist(coin.data().coins);
        } else {
          console.log("No Items in Watchlist");
        }
      });

      return () => {
        unsubscribe();
      };
    }
  }, [user]);
  useEffect(()=>{
    onAuthStateChanged(auth ,(user)=>{
      if(user) setUser(user)
      else setUser(null)
      // console.log("yash")
      console.log(user)
      
    });
  },[])
  const FetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
   
    setCoins(data);
    setLoading(false);
  };
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    type: "success",
  });

  useEffect(() => {
    if (currency === "INR") setSymbol("₹");
    else if (currency === "USD") setSymbol("$");
  }, [currency]);

  return (
    <Crypto.Provider value={{ currency, setCurrency, symbol,coins,loading ,FetchCoins,user,alert,setAlert ,watchlist ,setWatchlist}}>
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};
