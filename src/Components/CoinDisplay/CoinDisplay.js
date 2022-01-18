import React, {useState} from 'react'
import CoinTable from '../CoinTable/CoinTable';
import Pagination from '../Pagination/Pagination';

function CoinDisplay({InitialData,loadingStatus,filtered}) {
  const [coins, setCoins] = useState([...InitialData]);
  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage] = useState(10);
  const [order, setOrder] = useState("ASC");
  const [sortedColumn, setSortedColumn] = useState();

  React.useEffect(() => {
    setCoins(InitialData);
}, [InitialData])

  //Get Current Coins
  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = coins.slice(indexOfFirstCoin, indexOfLastCoin);

    console.log(coins)

  let filteredCoins = coins.filter(coin => {
    return (coin.name.toLowerCase().includes(filtered.toLowerCase())
         || coin.symbol.toLowerCase().includes(filtered.toLowerCase())
    );
  });

  //Sort coins
  const handleSort = (column) => {       
    setSortedColumn(column);
    let sorted = [...coins];
    
    if(order === "ASC") {
      sorted.sort((a,b) => {
        return a[column]> b[column]? 1 : -1
      })

      setOrder("DSC")
    }

    if(order === "DSC") {
      sorted.sort((a,b) => {
        return a[column] < b[column]? 1 : -1
      })
        
      setOrder("ASC")
    }
    setCoins(sorted)
  }

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <div className="CoinDisplay">
      <CoinTable coins={filtered.length > 0 ? filteredCoins : currentCoins} loading={loadingStatus} handleSort={handleSort} sortedColumn={sortedColumn} order={order} />
      <Pagination 
        coinsPerPage={coinsPerPage} 
        totalCoins={coins.length} 
        paginate={paginate} 
        currentPage={currentPage} 
      />
    </div>
  );
}

export default CoinDisplay;
