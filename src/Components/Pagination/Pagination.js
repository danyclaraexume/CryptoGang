import React from 'react'
import './Pagination.css'

const Pagination = ({coinsPerPage, totalCoins, paginate, currentPage}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalCoins / coinsPerPage); i++) {
        pageNumbers.push(i);
    }

    return(
        <div>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='pagination-item'>
                        <a onClick={() => paginate(number)} href='!#' className= {(number === currentPage? 'page-link active' : 'page-link')}>{number}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
} 

export default Pagination;