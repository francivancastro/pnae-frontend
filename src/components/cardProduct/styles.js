import styled from 'styled-components';

//Para os produtos
export const CardProductStyle = styled.div`


.product-item {
  width: 100%;
  display: inline-block;
  background: #fff;
  border-radius: 3px;
  text-align: center;
  padding: 10px;
  box-shadow: 0 1px 2px 0 #e9e9e9;  
}

.product-img {  
  float:left;
}

.product-info{
  text-align:left;
  float:left;
}


.product-img img {
  width: 100%;
  height: auto;
  width: 100%;
}


.product-info {
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
  color: #2b2f4c;
}

.product-owner{
  font-size:14px !important;

}

.product-location{
  font-size:14px !important;

}

.product-qnt{
  font-size:12px !important;
  text-align:center

}


.product-price {
  font-size: 16px !important  ;
  font-weight: 600;
  line-height: 24px;
  color: #f55d2c;
  text-align: left;
}

.qty-cart {
  text-align:center;
  float:left;
}

.product-qnt{
  font-size:12px;
  color:#666;
}

.quantity{
  margin:auto;
  text-align:center;
}
.quantity.buttons_added {
  text-align: center;
  position: relative;
  white-space: nowrap;
  vertical-align: top;
}

.quantity.buttons_added .minus, .quantity.buttons_added .plus {
  padding: 6px 10px 5px;
  height: 30px;
  background-color: #2b2f4c;
  border: 0;
  color: #fff;
  cursor: pointer;
  border-radius: 3px;
  width: 30px;
}

.quantity.buttons_added .minus {
  border-right: 0;
}

.quantity.buttons_added .plus {
  border-left: 0;
}

.quantity.buttons_added .plus-btn {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.quantity.buttons_added .minus-btn {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.quantity.buttons_added input {
  display: inline-block;
  margin: 0;
  vertical-align: top;
  box-shadow: none;
}

.quantity .input-text.qty {
  width: 35px;
  height: 30px;
  padding: 0 5px;
  text-align: center;
  background-color: transparent;
  border: 0;
  margin-left: -4px;
  margin-right: -4px;
  background: #fff;
  font-size: 12px;
  font-weight: 500;
}

.cart-icon {
  margin-left: auto;
  font-size: 20px;
  color: #c7c7c7;
  cursor: pointer;
}

.add-cart-btn {
  background: #618C47;
  font-size:12px;
  border: 0;
  color: #fff;
  height: 40px;
  padding: 0 20px;
  font-family: roboto,sans-serif;
  font-weight: 500;
  border-radius: 5px;
}

.mb-20 {
  margin-bottom: 20px;
}

.mb-10 {
  margin-bottom: 10px;
}

.mt-10 {
  margin-top: 10px;
}

  
`;
