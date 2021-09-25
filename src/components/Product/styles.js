import styled from 'styled-components';


export const SectionProducts = styled.section`
  
  
  .title {
    margin-bottom: 100px;
  }

  .heading-section {
    position: relative;
  }

  .heading-section .subheading {
    font-size: 26px;
    display: block;
    margin-bottom: 10px;
    font-family: "Lora", Georgia, serif;
    font-style: italic;
    color: #82ae46;
  }

  .heading-section h2 {
    position: relative;
    font-size: 40px;
    font-weight: 600;
    color: #000000;
    font-family: "Poppins", Arial, sans-serif;
  }

  .eMiqxm {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-bottom: 30px;
    position: relative;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    border: 1px solid #f0f0f0;
}

.eMiqxm .img-prod img {
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.eMiqxm img {
  vertical-align: middle;
  border-style: none;
  height: 200px;
  width: 254px;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.eMiqxm .img-prod {
  position: relative;
  display: block;
  overflow: hidden;
  margin-bottom: 25px;
}

  .eMiqxm .img-prod .overlay {
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
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
}

.eMiqxm .text h3 {
  font-size: 14px;
  margin-bottom: 14px;
  font-weight: 300;
  text-transform: uppercase;
  -webkit-letter-spacing: 1px;
  -moz-letter-spacing: 1px;
  -ms-letter-spacing: 1px;
  letter-spacing: 1px;
  font-family: "Poppins",Arial,sans-serif;
}

.eMiqxm .text h3 a {
  color: #000000;
  -webkit-text-decoration: none;
  text-decoration: none;
  font-weight: 400;
}

`;