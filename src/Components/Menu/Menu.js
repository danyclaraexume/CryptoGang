import React from 'react'
import './Menu.css'
import {Link} from 'react-router-dom'
// import SearchIcon from '../../Images/search-icon.png'
const Menu = ({filterValue}) => {

    return (
        <div className="MenuContainer">
            <ul>
                <li><Link to='/' className='menuLink'>Home</Link></li>
                <li><Link to='/portefolio' className='menuLink'>Portfolio</Link></li>
                <li><Link to='/watchlist' className='menuLink'>Watchlist</Link></li>
                <li><Link to='/calculator' className='menuLink'>Calculator</Link></li>
            </ul>
            <input type="text" onChange={filterValue} className="searchInput" placeholder="Search coin..."/>
            <button className="loginButton">Login</button>
            <button className="loginButton">Sign Up</button>
        </div>        
    );
}

export default Menu;