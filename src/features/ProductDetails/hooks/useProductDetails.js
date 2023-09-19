import { useEffect, useState } from 'react';

export function useProductDetails(productId) {
  const [productDetails, setProductDetails] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/' + productId)
      .then((res) => res.json())
      .then((data) => {
        setProductDetails(data);
        setLoading(false);
      });
  }, []);
  return {
    productDetails,
    loading,
  };
}
