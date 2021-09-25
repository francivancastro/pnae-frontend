import styled from 'styled-components';
import bg from '../../view/images/bg_1.jpg';

export const BackgroundImage = styled.div`
  background:linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${bg});
  padding: 10em 0;
  width: 100%;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin-bottom: 40px;

  .hero-wrap .slider-text {
    color: #fff;
    position: relative;
  }

  .no-gutters > .col, .no-gutters > [class*="col-"] {
    padding-right: 0;
    padding-left: 0;
  }

  .hero-wrap .slider-text .breadcrumbs {
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 3px;
    margin-bottom: 0;
    z-index: 99;
    font-weight: 300;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  .slider-text .breadcrumbs span {
    color: white;
  }

  .bread1 {
    font-weight: 800;
    color: #fff;
    font-size: 30px;
    font-family: "Poppins", Arial, sans-serif;
    letter-spacing: 3px;
  }

  .bread2 {
    font-size: 8vw;
    color: #fff;
    line-height: 1.3;
    font-weight: 400;
    font-family: "Montserrat", "Amatic SC", cursive;
  }
`;

