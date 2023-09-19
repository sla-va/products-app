import React from 'react';
import './ProductDetails.less';
import { useParams } from 'react-router-dom';
import { useProductDetails } from './hooks/useProductDetails';
function ProductDetails() {
  const { productId } = useParams();
  const { productDetails, loading } = useProductDetails(productId);
  return (
    <div className='product-details'>
      <h1>Product Details</h1>
      <div className='product-details--grid'>
        {loading && <div className='product--details--loading'>Loading...</div>}
        <div className='product-details--image'>
          <img src={productDetails?.image} alt={productDetails?.title} />
        </div>
        <div className='product-details--info'>
          <div className='product-details--title'>Title: {productDetails?.title}</div>
          <div className='product-details--price'>Price: ${productDetails?.price}</div>
          <div className='product-details--description'>{productDetails?.description}</div>
          <div className='product-details--rating'>
            Rating: {productDetails?.rating.rate} ({productDetails?.rating.count} votes)
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
