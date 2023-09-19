import React from 'react';
import './Products.less';
import { usePagination } from '../../hooks/usePagination';
import { Pagination } from './components/Pagination';
import { Table } from './components/Table';
import { useProducts } from './hooks/useProducts';
function Products() {
  const { productsToDisplay, loading, search, setSearch } = useProducts();
  const { currentPage, currentItems, maxPage, next, prev, jump } = usePagination(
    productsToDisplay,
    5,
  );
  console.log(currentItems);

  return (
    <div className='products'>
      <h1>Products</h1>
      <div className='products--search'>
        <input
          type='text'
          placeholder='Search by title'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <Table products={currentItems} loading={loading} />
      <Pagination currentPage={currentPage} maxPage={maxPage} next={next} prev={prev} jump={jump} />
    </div>
  );
}

export default Products;
