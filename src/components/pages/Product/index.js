import React from "react";
import styled from 'styled-components';

import ProductDetails from './ProductDetails'
import ProductDescription from './ProductDescription'
import ProductTabs from './ProductTabs'
import './product.css';

const ProductBlock = styled.div`
  background-color: #fff;
`;
function Product(props) {
  const {product:{tabs,productDetails}} = props
  return (
    <ProductBlock>
      <ProductDetails productDetails={productDetails}/>
      <ProductDescription desc={productDetails.desc}/>
      <ProductTabs tabs={tabs}/>
    </ProductBlock>
  );
}
export default Product
