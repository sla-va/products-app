import { useDebounce } from '../../../hooks/useDebounce';
import { useState, useEffect } from 'react';

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filtered = products.filter((product) => {
      return product.title.toLowerCase().includes(debouncedSearch.toLowerCase());
    });
    setFilteredProducts(filtered);
  }, [debouncedSearch, products]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((json) => {
        setProducts(json);
        setLoading(false);
      });
  }, []);

  return {
    productsToDisplay: filteredProducts,
    loading,
    search,
    setSearch,
  };
}
