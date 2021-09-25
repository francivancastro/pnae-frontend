import styled from 'styled-components';
import bg0 from '../../view/images/category.jpg'
import bg1 from '../../view/images/category-1.jpg'
import bg2 from '../../view/images/category-2.jpg'
import bg3 from '../../view/images/category-3.jpg'
import bg4 from '../../view/images/category-4.jpg'

export const SectionCategory = styled.section`
  display: block;
  outline: none !important;
  
  .category {
    background-image: url(${bg0});
  }
  .category-1 {
    background-image: url(${bg1});
  }
  .category-2 {
    background-image: url(${bg2});
  }
  .category-3 {
    background-image: url(${bg3});
  }
  .category-4 {
    background-image: url(${bg4});
  }

  .ftco-no-pt {
    padding-top: 0 !important;
  }

  .ftco-section {
    padding: 6em 0;
    position: relative;
  }

  .ftco-category .category-wrap-2 {
    width: 100%;
  }

  .hero-wrap, .img, .blog-img, .user-img {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .ftco-animated {
    -webkit-animation-duration: .5s;
    animation-duration: .5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  .ftco-category .category-wrap {
    display: block;
    width: 100%;
    height: 250px;
  }


  .ftco-category .category-wrap-2 .text {
    width: 100%;
  }

  .ftco-category .category-wrap .text {
    background: #82ae46;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ftco-category .category-wrap .text a {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .ftco-category .category-wrap-2 .text h2 {
    color: #82ae46;
    font-family: "Lora", Georgia, serif;
    font-style: italic;
    font-size: 24px;
  }

  h1, h2, h3, h4, h5, .h1, .h2, .h3, .h4, .h5 {
    line-height: 1.5;
    font-weight: 400;
    color: #000000;
    font-family: "Poppins", Arial, sans-serif;
  }

  

  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  .btn.btn-primary, a {
    background: #82ae46;
    border: 1px solid #82ae46;
    color: #fff;
    font-family: "Poppins", Arial, sans-serif;
  }


  .btn:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 40px;
    font-weight: 600;
    margin: 0 auto;
    cursor: pointer;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    -ms-border-radius: 30px;
    border-radius: 30px;
    -webkit-box-shadow: 0px 24px 36px -11px rgba(0, 0, 0, 0.09);
    -moz-box-shadow: 0px 24px 36px -11px rgba(0, 0, 0, 0.09);
    box-shadow: 0px 24px 36px -11px rgba(0, 0, 0, 0.09);

    :hover, :active {
      color: #82ae46 !important;
      background-color: transparent !important;
      border-color: #82ae46 !important;
      box-shadow: none !important;
    }
  }
`;
