import React from 'react'
import './Menu.css'
import {Link} from 'react-router-dom'
// import SearchIcon from '../../Images/search-icon.png'

import HomeIcon from '../../Images/home-icon.png';
import WalletIcon from '../../Images/wallet-icon.png'
import WatchlistIcon from '../../Images/watchlist-icon.png'
import CalculatorIcon from '../../Images/calculator-icon.png'
import SearchIcon from '../../Images/search-icon.png'

const Menu = ({filterValue}) => {
    return (
        <div className="MenuContainer">
            <ul>
                <li className='menuLi'><Link to='/' className='menuLink'><img src={HomeIcon} alt='homeIcon' /></Link><label>Home</label></li>
                <li className='menuLi'><Link to='/portefolio' className='menuLink'><img src={WalletIcon} alt='walletIcon' /></Link><label>Wallet</label></li>
                <li className='menuLi'><Link to='/watchlist' className='menuLink'><img src={WatchlistIcon} alt='watchlistIcon' /></Link><label>Watchlist</label></li>
                <li className='menuLi'><Link to='/calculator' className='menuLink'><img src={CalculatorIcon} alt='calculatorIcon' /></Link><label>Calculator</label></li>
            </ul>
            <img className='searchIcon' src={SearchIcon} alt='search-icon' />
            <input type="text" onChange={filterValue} className="searchInput" placeholder="Search coin..."/>
            {/* <button className="loginButton">Login</button>
            <button className="loginButton">Sign Up</button> */}
        </div>        
    );
}

export default Menu;