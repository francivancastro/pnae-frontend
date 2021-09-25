import styled from 'styled-components';

//Para as categorias
export const Categories = styled.ul`
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;

  li {
    display: inline-block;
    font-weight: 400;
    font-size: 16px;
    text-align: -webkit-match-parent;
    padding: 10px;
  }

  li a.active {
    background: #82ae46;
    color: #fff !important;
  }

  li a {
    color: #82ae46 !important;
    padding: 8px 20px;
    font-size: 18px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    border-radius: 5px;
    text-decoration: none;
    text-transform: capitalize;
  }

`;

//Para a paginação
export const CustomPagination = styled.div `
  .page-item {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .page-item.active .page-link {
    z-index: 1;
    color: #fff;
    background-color: #82ae46;
    border-color: #82ae46;
  }
  .page-item .page-link {
    color: #000;
    margin: 2px;
    border-radius: 100%;
    height: 40px;
    width: 40px;
  }

  .page-item .page-link:hover {
    z-index: 2;
    color: #000;
    text-decoration: none;
    background-color: #e9ecef;
    border-color: #dee2e6;
  }
  .page-item.active .page-link:hover {
    z-index: 2;
    color: #fff;
    text-decoration: none;
    background-color: #82ae46;
    border-color: #82ae46;
  }
`;