import styled from 'styled-components';

export const Section = styled.section`
  padding: 6em 0;
  position: relative;
  display: block;
  outline: none;
  
  .ftco-animated {
    -webkit-animation-duration: .5s;
    animation-duration: .5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  .ftco-services .services {
    display: block;
    width: 100%;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }

  .ftco-services .services:hover .icon, .ftco-services .services:focus .icon {
    background: #82ae46;
  }

  .ftco-services .services .icon {
    line-height: 1.3;
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    border-radius: 50%;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }

  .icon img {
    filter: invert(100%);
    width: 60px;
    height: 60px;
    padding: 5px;
  }

  .icon .icon-border {
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 100%;
    padding: 10px;
  }

  .bg-color-1 {
    background: #e4b2d6;
  }

  .bg-color-2 {
    background: #dcc698;
  }

  .bg-color-3 {
    background: #a2d1e1;
  }

  .bg-color-4 {
    background: #dcd691;
  }

  .ftco-services .services .icon span {
    font-size: 50px;
    color: #fff;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }

  .ftco-services .services .media-body {
    width: 100%;
  }

  .media-body {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }

  .ftco-services .services .media-body h3 {
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 600;
    font-family: "Poppins", Arial, sans-serif;
    color: rgba(0, 0, 0, 0.7);
  }

  .ftco-services .services .media-body span {
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.5);
    font-size: 12px;
    font-weight: 600;
  }
`; 