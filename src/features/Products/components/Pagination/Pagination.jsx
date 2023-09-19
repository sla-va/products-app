import React from 'react';
import './Pagination.less';
function Pagination({ currentPage, maxPage, jump, next, prev }) {
  return (
    <div className='products--pagination'>
      <button className='products--pagination--button' onClick={() => prev()}>
        {'<'}
      </button>
      {Array.from(Array(maxPage), (e, i) => {
        return (
          <button
            className={`products--pagination--button ${
              currentPage === i + 1 ? 'products--pagination--button__active' : ''
            }`}
            key={i}
            onClick={() => jump(i + 1)}
          >
            {i + 1}
          </button>
        );
      })}
      <button className='products--pagination--button' onClick={() => next()}>
        {'>'}
      </button>
    </div>
  );
}

export default Pagination;
