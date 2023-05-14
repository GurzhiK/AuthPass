import React from 'react';

function Pagination({ products, productsPerPage, paginate }) {
  const pageNumbers = Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, i) => i + 1)

  return (
    <nav>
      <ul className='flex gap-10 p-4 justify-center items-center text-white decoration-none'>
        {pageNumbers.map(number => (
          <li key={number} className='flex gap-10 p-4 justify-center items-center text-white decoration-none'>
            <button onClick={() => paginate(number)} className='bg-main rounded-lg text-white p-2'>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination;