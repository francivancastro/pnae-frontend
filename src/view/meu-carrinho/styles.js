import styled from 'styled-components';

export const EmptyCart = styled.section`
  min-height: 400px;

  .progresso-compra .head-prog, h2, p {
    width: 100%;
    height: auto;
    background: rgba(0,0,0,0);
    color: #202020;
    text-align: center;
    padding: 10px 0 20px 0;
  }

  .progresso-compra .head-prog h2 {
    line-height: 40px;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-family: "Poppins",Arial, sans-serif;
    font-size: 20px;
    font-weight: 600;
    margin: 0;
  }

  a {
    color: #82ae46;
  }
  a:hover {
    color: #5f9415;
  }
`;

export const CartSection = styled.section`
  width: 100%;
  display: block;

  font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #202020;

  h5 {
    font-weight: 500;
  }
  .product h5 {
    color: #202020;
  }

  strong {
    font-weight: 400;
  }

  
  
  .cart {
    margin-top: 30px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.19);
  }

  .seller {
    display: flex;
    background-color: #82ae46;
    color: #FFF;
    padding: 20px;
  }

  .product {
    padding: 0 10px;
    margin-top: 30px;
    display: flex;
    padding-bottom: 20px;
    border-bottom: 1px solid rgb(0, 0, 0, 0.19);
  }

  .product-image {
    flex: 0 0  160px;
    height: 160px;
  }

  .product-image img {
    height: 100%;
    width: 100%;
  }

  .product-info {
    margin-left: 15px;
    flex: 1 1 auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: 992px) {
    .product-title {
      order: 0;
    }
  
    .product-price {
      order: 1;
    }
  
    .product-quantity {
      order: 2;
    }
  
    .product-total {
      order: 3;
    }
  }

  @media screen and (max-width: 991px) {
    .product-title {
      order: 0;
    }
  
    .product-price {
      order: 3;
    }
  
    .product-quantity {
      order: 1;
    }
  
    .product-total {
      order: 2;
    }
  }

  @media screen and (max-width: 767px) {
    .product {
      flex-direction: column;
      
    }

    .product-image {
      height: auto;
    }
    .product-info {
      flex-direction: column;
      justify-content: flex-start;
    } 

    .product-title {
      order: 0;
    }
  
    .product-price {
      order: 1;
    }
  
    .product-quantity {
      order: 2;
    }
  
    .product-total {
      order: 3;
    }
  }

  .product-quantity {
    max-width: 106.52px;
  }

  .product-price strong, .product-total strong {
    color: #82ae46;
  }

  .product-title p, .product-price p {
    margin-top: 5px;
  }

  .product-quantity button, .product-quantity button:focus {
    background: transparent;
    border: none;
    height: 25px;
    outline: none;
  }

  .product-quantity .btn-quantity {
    font-size: 18px;
  }

  .product-quantity .btn-quantity.add{
    margin-left: 5px;
  }

  .product-quantity .btn-quantity.remove{
    margin-right: 5px;
  }

  .product-quantity .btn-quantity.add:hover {
    color: #005aff;
  }

  .product-quantity .btn-quantity.remove:hover {
    color: #ff4700;
  }

  .product-quantity .btn-remove {
    background: transparent;
    border: none;
  }

  .product-quantity .btn-remove:hover {
    color: #ff4700;
  }


  .confirm {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    padding: 10px;
  }

  .confirm button, .confirm button:focus {
    outline: none;
    height: 50px;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    -ms-border-radius: 30px;
    border-radius: 30px;
    -webkit-box-shadow: 0px 24px 36px -11px rgba(0, 0, 0, 0.09);
    -moz-box-shadow: 0px 24px 36px -11px rgba(0, 0, 0, 0.09);
    box-shadow: 0px 24px 36px -11px rgba(0, 0, 0, 0.09);
    background: #82ae46;
    border: 1px solid #82ae46;
    color: #fff;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;
    text-transform: uppercase;
  }

  .confirm button:hover {
    background: transparent;
    color: #82ae46;
    border-color: #82ae46;
  }
`;