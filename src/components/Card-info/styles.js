import styled from 'styled-components';

//Para os produtos
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
  position: relative;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;

  .img-prod {
    position: relative;
    display: block;
    overflow: hidden;
    margin-bottom: 25px;
  }

  .img-prod img {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }

  img {
    vertical-align: middle;
    border-style: none;
    height: 200px;
    width: 254px;

    @media screen and (max-width: 1199px) {
      height: 160px;
      width: 210px;
    }
    @media screen and (max-width: 991px) {
      height: 250px;
      width: 350px;
    }
    @media screen and (max-width: 767px) {
      height: 400px;
      width: 510px;
    }
    @media screen and (max-width: 415px) {
      height: 300px;
      width: 400px;
    }
  }

  .img-prod .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    opacity: 0;
    background: #82ae46;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }

  .ftco-animate {
    opacity: 0;
    visibility: hidden;
  }

  .text h3 {
    font-size: 14px;
    margin-bottom: 14px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: "Poppins", Arial, sans-serif;
  }

  .text {
    height: 100px;
  }

  .text h3 a {
    color: #000000;
    text-decoration: none;
    font-weight: 400;
  }

  .text .pricing {
    width: 100%;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }

  .text p.price {
    margin-bottom: 0;
    color: #82ae46;
    font-weight: 500;
  }

  .text p.price span.price-dc {
    text-decoration: line-through;
    color: #b3b3b3;
  }

  .text p.price span.price-sale {
    color: #82ae46;
    text-transform: capitalize;
  }

  .text .bottom-area {
    position: absolute;
    bottom: 15px;
    left: 0;
    right: 0;
    opacity: 0;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }

  .text .bottom-area a {
    color: #fff;
    width: 100%;
    background: #82ae46;
    width: 40px;
    height: 40px;
    margin: 1px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    border-radius: 50%;
  }

  .icon {
    background: #82ae46;
    color: white;
    height: 15px;
    width: 15px;
  }

  :hover{
    box-shadow: 0 1px 8px rgba(130, 174, 70, 0.19);

    img {
      -moz-transform: scale(1.1);
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }

    .price {
      display: none;
    }

    .bottom-area {
      opacity: 1;
    }
  }
`;
