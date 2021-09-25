import styled from 'styled-components';

export const Nav = styled.nav`
  height: 66px;
  .navbar-brand {
    color: #82ae46;
  }
  .navbar-brand:hover{
    color: #000000;
  }

  .navbar-brand {
    font-weight: 800;
    font-size: 20px;
    text-transform: uppercase;
  }

  a {
    -webkit-transition: .3s all ease;
    -o-transition: .3s all ease;
    transition: .3s all ease;
    color: #82ae46;
    text-decoration: none !important;
  }

  .navbar-toggler:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  .navbar-toggler {
    border: none;
    cursor: pointer;
    padding-right: 0;
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: .1em;
    outline: none;
  }

  .button-toggler {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: rgba(255, 255, 255, 0.5);
  }

  .button-toggler:hover {
    color: #FFF;
    text-shadow: 0 7px 20px rgba(255, 255, 255);
  }

  .oi {
    position: relative;
    top: 1px;
    display: inline-block;
    speak: none;
    font-family: Icons;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  li {
    display: list-item;
    text-align: -webkit-match-parent;
  }

  li.nav-item.active > a {
    color: #000000;
  }

  li.nav-item.active > a:hover {
    color: #82ae46;
  }

  li a {
    font-size: 11px;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    padding-left: 20px;
    padding-right: 20px;
    font-weight: 400;
    color: #000000;
    text-transform: uppercase;
    letter-spacing: 2px;
    opacity: 1 !important;

  }  

  li a:hover {
    -webkit-transition: 0.3s all ease;
    -o-transition: 0.3s all ease;
    transition: 0.3s all ease;
    color: #82ae46;
    background: transparent;
  }

  .logout a:hover {
    font-weight: 500;
    color: rgb(255, 0, 0, 0.700);
  }

  .nav-item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .dropdown-menu {
    top: 60px;
    border: none;
    background: #fff;
    -webkit-box-shadow: 0px 10px 34px -20px rgba(0, 0, 0, 0.41);
    -moz-box-shadow: 0px 10px 34px -20px rgba(0, 0, 0, 0.41);
    box-shadow: 0px 10px 34px -20px rgba(0, 0, 0, 0.41);
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    -ms-border-radius: 0;
    border-radius: 0;
  }

  .active {
    background: #82ae46;
    color: #FFF;
  }


  @media screen and (max-width: 991px) {
    background-color: #000000;
    height: auto;

    li a{
      padding-left: 0; 
      color: rgba(255, 255, 255, 0.5);
    }

    li a:hover {
      color: #FFF;
      text-shadow: 0 7px 20px rgba(255, 255, 255);
      margin-left: 5px;
    }

    .navbar-brand {
      color: #FFF;
    }

    .navbar-brand:hover{
      color: #FFF;
      text-shadow: 0 7px 20px rgba(130, 174, 70);
    }

    .dropdown-menu {
      background: #000;
      margin-left: 40px;
    }

    .dropdown-item:hover{
      background: #000000;
      margin-left: 5px;
      color: #FFF;
      text-shadow: 0 7px 20px rgba(255, 255, 255);
    }

    .dropdown {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    li.nav-item.active {
      background: #82ae46;
    }

    li.nav-item.active > a, li.nav-item.active > a:hover {
      color: #FFF;
    }

    .logout a:hover {
      font-weight: 500;
      color: rgb(255, 0, 0, 0.650);
    }

    .active {
      background: #000;
      color: #82ae46;
    }
  }
`;

export const Img = styled.img `
    height: 40px;
    width: 40px;
    border: 1px solid transparent;
    border-radius: 100%;
    display: inline-block;
`;