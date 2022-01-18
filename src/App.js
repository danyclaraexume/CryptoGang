import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Menu from './Components/Menu/Menu';
import CoinDisplay from './Components/CoinDisplay/CoinDisplay';
import './App.css';

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


  //Filter coins
  const filterValueHandler = (e) => {
    setFilterValue(e.target.value);
  }

  return (
    <div className="App">
      <Menu filterValue={filterValueHandler} />
      <CoinDisplay InitialData={coins} loadingStatus={loading} filtered={filterValue}  />
    </div>
  );
}

export default App;
