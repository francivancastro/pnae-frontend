import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  min-height: 50vh;

  letter-spacing: 1px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  p {
    font-weight: 500;
  }

  p, h4 {
    color: rgba(0,0,0,.625);
  }
  span {
    
    font-size: 14px;
    font-weight: 600;
    color: #FF0020;
    opacity: 0.8;
    transition: opacity 0.2s ease 0s;
  }

  .content {
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    max-width: 520px;
    flex: 1 1 0%;
    padding: 32px;
  }

  .form {
    width: 100%;
    max-width: 360px;
    margin: 0px auto;
  }

  .text {
    position: relative;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  .register {
    font-size: 14px;
    margin-top: 24px;
    color: rgb(204, 204, 204);
    text-align: center;
  }

  a {
    font-size: 14px;
    font-weight: 600;
    color: #82ae46;
    opacity: 0.8;
    align-self: flex-start;
    margin: 8px 0px 18px;
    transition: opacity 0.2s ease 0s;
  }

`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid rgba(0,0,0,.125);
  padding: 5px 10px;
  /*padding-left: 42px;  possivel icon*/
  color: #000;
  font-size: 17px;
  outline: none;

  :hover, :focus {
    border-color: #82ae46;
  }
`;

export const Button = styled.button`
  
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: bold;
  height: 50px;
  width: 100%;
  background: #82ae46;
  border: 1px solid #82ae46;
  cursor: pointer;
  outline: none;

  :disabled {
    color: rgba(255, 255, 255, 0.85);
    border-color: rgba(130, 174, 70, 0.85);
    background: rgba(130, 174, 70, 0.85);
    
    :hover{
      cursor: not-allowed;
      color: rgba(255, 255, 255, 0.35);
      border-color: rgba(130, 174, 70, 0.85);
      background: rgba(130, 174, 70, 0.85);
    }
  }

  :hover {
    background: #FFF;
    color: #82ae46;
  }

`;