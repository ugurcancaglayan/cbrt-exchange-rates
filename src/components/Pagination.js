import React from 'react'

function Pagination({ ratesPerPage, totalRates, paginate }) {

    const pageNumbers = [];

    for (let index = 1; index <= Math.ceil(totalRates / ratesPerPage); index++) {
        pageNumbers.push(index);
    }

  return (
    <div>
        <ul>
            {pageNumbers.map(number => (
                <li key={number}>
                    <a onClick={() => paginate(number)} href='!#'>
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Pagination