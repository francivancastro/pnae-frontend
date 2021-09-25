import styled from 'styled-components';

//Para as categorias
export const ProductDetailStyle = styled.section`
  
background:#fafafa;
padding:10px;

.product-detail {
  background: #fff;
  padding: 20px 30px;
  border-radius: 3px;
  box-shadow: 0 1px 2px 0 #e9e9e9;
}

.product-detail-info{
  margin-top: 15px;
  margin-left: 20px;
}

.product-detail-info h2 {
  font-size: 24px;
  font-weight: 700;
  text-align: left;
  color: #2b2f4c;
  margin-bottom: 16px;
}

.product-detail-info .number-stock {
  display: block;
}

.number-stock p {
  display: inline-block;
  margin-right: 30px;
  font-size: 14px;
  font-weight: 500;
  color: #2b2f4c;
}

.product-select-option {
  margin-top: 7px;
}

.product-option{
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.product-option li {
  margin-right: 5px;
  width: 50px;
  height: 36px;
  position: relative;
  text-align: center;
  display: inline-block;
}

.product-option label {
  padding: 5px;
  cursor: pointer;
  background: #c7c7c7;
  color: #fff;
  border-radius: 3px;
  font-weight: 500;
  font-size: 12px;
}

.product-description{
  line-height: 26px;
  margin-top: 20px;
  margin-bottom: 30px;
  color: #3e3f5e;
  font-weight: 400;
  font-size: 14px;
  text-align: left;
}

.product-cart-info {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 5px;
}

.quantity.buttons_added {
  text-align: left;
  position: relative;
  white-space: nowrap;
  vertical-align: top;
}

button, input {
  overflow: visible;
}

.quantity {
  display: inline-block;
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

.quantity.buttons_added input {
  display: inline-block;
  margin: 0;
  vertical-align: top;
  box-shadow: none;
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

.quantity.buttons_added .minus-btn {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.quantity.buttons_added .plus-btn {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}


.product-cart-add {
  margin-top: 22px;
}

.add-cart-btn {
  background: #618C47;
  border: 0;
  color: #fff;
  height: 40px;
  padding: 0 20px;
  font-family: roboto,sans-serif;
  font-weight: 500;
  border-radius: 5px;
}

.product-cart-info ul li {
  display: inline-block;
  margin-right: 20px;
  vertical-align: middle;
}


img{width:100%;}

`;