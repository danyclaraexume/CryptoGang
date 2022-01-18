import React from 'react'
import './Coin.css'

const Coin = (props) => {
    const priceChangeColor = props.priceChange < 0? 'red' : 'green';

    return  (
        <tr className="coinTableRow">
            <td className="coinLogo"><img src={props.image} alt={props.name} className="coinImg"/></td>
            <td className="coinName">{props.name}</td>
            <td className="coin-symbol">{props.symbol}</td>
            <td className="coin-price">${props.current_price}</td>
            <td className={priceChangeColor}>{props.priceChange}%</td>
            <td className="coin-mktCap">${props.marketCap}</td>
            <td className="coin-volume">${props.volume}</td>
        </tr>
    );
}

export default Coin;