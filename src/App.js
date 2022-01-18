import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Menu from './Components/Menu/Menu';
import CoinDisplay from './Components/CoinDisplay/CoinDisplay';
import Watchlist from './Data/Watchlist.json'
import Portfolio from './Data/Portfolio.json'

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
 } from 'react-router-dom'

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading]  = useState(false);
  const [filterValue, setFilterValue] = useState("");


  useEffect(() => {
    const fetchCoins = async () => {
      setLoading(true);
      const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&sparkline=false');
      setCoins(res.data);
      setLoading(false);
    }

    fetchCoins();
  }, []);

  const myWatchlist = coins.filter(coin => Watchlist.symbols.includes(coin.symbol.toUpperCase()));

  const myPortfolio = coins.filter(coin => {
    return Portfolio.owned.find(pcoin => {
      return pcoin.symbol.toLowerCase() === coin.symbol.toLowerCase()
    })
  });

  //Filter coins
  const filterValueHandler = (e) => {
    setFilterValue(e.target.value);
  }

  //CoinDisplay parameter Handler
  const coinListDisplay = (coinDisplayList) => {
    return  <CoinDisplay InitialData={coinDisplayList} loadingStatus={loading} filtered={filterValue}  />
  }

  return (
    <Router  className="App">
      <Menu filterValue={filterValueHandler} />
      <Routes>
        <Route exact path='/' element={coinListDisplay(coins)} />
        <Route path='/portefolio' element={coinListDisplay(myPortfolio)} />
        <Route path='/watchlist' element={coinListDisplay(myWatchlist)} />
        <Route path='/calculator' element={<h2>Calculator</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
