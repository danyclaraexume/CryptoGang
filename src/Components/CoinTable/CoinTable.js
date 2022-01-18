import React from 'react'
import Coin from '../Coin/Coin'
import './CoinTable.css'

const CoinTable = ({coins, loading, handleSort, sortedColumn, order}) => {
    if(loading) return (
        <h2>Loading...</h2>
    );    

    const handleSortIcon = () => {
        return order === "ASC"? '▼' : '▲';
    }

    return (
        <div className="tableContainer">
            <table>
                <thead>
                    <tr>
                        <th></th>  
                        <th className="coinHeader" onClick={() => handleSort("name")}>{sortedColumn === "name"? `Name ${handleSortIcon()}`: 'Name'}</th>
                        <th className="headerCenter" onClick={() => handleSort("symbol")}>{sortedColumn === "symbol"? `Symbol ${handleSortIcon()}`: 'Symbol'}</th>
                        <th className="coinHeader headerRight" onClick={() => handleSort("current_price")}>{sortedColumn === "current_price"? `Price ${handleSortIcon()}`: 'Price'}</th>
                        <th className="coinHeader headerRight">24h Change</th>
                        <th className="coinHeader headerRight"> Market Cap</th>
                        <th className="coinHeader headerRight">Volume</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        coins.map( coin => {
                            return <Coin className="coinTableRow"
                                key={`${coin.id} ${Math.floor(Math.random() * 100) + 1}`}
                                name={coin.name}
                                image={coin.image}
                                symbol={coin.symbol}
                                volume={coin.total_volume}
                                current_price={coin.current_price}
                                priceChange={coin.price_change_percentage_24h}
                                marketCap={coin.market_cap}
                            />
                        })
                    }  
                </tbody>
            </table>
        </div>
    );
}

export default CoinTable;