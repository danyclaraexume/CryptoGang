import React from 'react'
import './Menu.css'
// import SearchIcon from '../../Images/search-icon.png'
const Menu = ({filterValue}) => {

    return (
        <div className="MenuContainer">
            <ul>
                <li>Home</li>
                <li>Portfolio</li>
                <li>Watchlist</li>
                <li>Calculator</li>
            </ul>
            <input type="text" onChange={filterValue} className="searchInput" placeholder="Search coin..."/>
            <button className="loginButton">Login</button>
            <button className="loginButton">Sign Up</button>
        </div>        
    );
}

export default Menu;