import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import CoinPage from "./Components/CoinPage";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Coins" element={<CoinPage />}></Route>
          <Route path=':coinId' element={<CoinPage/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
