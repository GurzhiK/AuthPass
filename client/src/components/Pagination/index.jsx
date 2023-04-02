import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pagination = ({ pageLimit = 2 }) => {
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItemsCount, setTotalItemsCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('http://127.0.0.1:8000/api/products/')
      .then((res) => {
        setTotalItemsCount(res.data.length);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setPageCount(Math.ceil(totalItemsCount / pageLimit));
  }, [totalItemsCount, pageLimit]);

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= pageCount; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handleClick(i)}
          className={`border border-gray-300 px-2 py-1 mr-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 ${currentPage === i && 'bg-blue-500 text-white'
            }`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  const startIndex = (currentPage - 1) * pageLimit;
  const endIndex = startIndex + pageLimit;

  return (
    <div className="flex justify-center my-5">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {renderPagination()}
          <div className="mt-2">
            <p>
              Showing {startIndex + 1} to{' '}
              {endIndex > totalItemsCount ? totalItemsCount : endIndex} of {totalItemsCount} products
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Pagination;