import { Link } from 'react-router-dom';
import React from 'react';

import './Table.less';

function Table({ products, loading }) {
  return (
    <div className='products--list'>
      <div className='products--list--item__heading'>ID</div>
      <div className='products--list--item__heading'>Title</div>
      <div className='products--list--item__heading'>Price</div>
      <div className='products--list--item__heading'>Image</div>
      {loading && <div className='products--list--loading'>Loading...</div>}
      {products.map((product) => {
        return (
          <>
            <div className='products--list--item'>{product.id}</div>
            <div className='products--list--item'>
              <Link to={`/products/${product.id}`}>{product.title}</Link>
            </div>
            <div className='products--list--item'>{product.price}</div>
            <div className='products--list--item'>
              <img src={product.image} alt={product.title} />
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Table;
