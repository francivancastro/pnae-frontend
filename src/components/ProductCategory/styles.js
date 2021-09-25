import styled from 'styled-components';


export const ProductCategoryStyle = styled.section`
  
background:#fafafa;
padding:10px;

.product-list {
  margin-top: 40px;
}

.product-item {
  width: 100%;
  display: block;
  background: #fff;
  border-radius: 3px;
  text-align: center;
  padding: 15px;
  box-shadow: 0 1px 2px 0 #e9e9e9;
}

.product-img {
  width: 100%;
  position: relative;
  padding: 10px 20px;
  display: block;
}

.product-img img {
  width: 100%;
  height:200px;
  transition: transform .5s ease;
}

.product-info p {
  font-size: 12px;
  font-weight: 500;
  color: #8f91ac;
  margin-bottom: 0;
  line-height: 24px;
}

.product-info h4 {
  margin-top: 0;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px!important;
  line-height: 24px;
  text-align: center;
  color: #2b2f4c;
}

.product-price {
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: #f55d2c;
  text-align: center;
}

.product-price span {
  color: #c7c7c7;
  text-decoration: line-through;
  margin-left: 10px;
  font-weight: 600;
}

.mb-30 {
  margin-bottom: 30px;
}

`;