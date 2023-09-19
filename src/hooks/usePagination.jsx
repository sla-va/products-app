import { useState } from 'react';
export function usePagination(items, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(items.length / itemsPerPage);
  const currentItems = items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const next = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  };
  const prev = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  };
  const jump = (page) => {
    const pageNumber = Math.max(1, page);
    setCurrentPage(() => Math.min(pageNumber, maxPage));
  };
  return { next, prev, jump, currentItems, currentPage, maxPage };
}
