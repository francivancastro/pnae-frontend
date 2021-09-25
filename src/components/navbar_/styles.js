import styled from 'styled-components';

export const BarTopStyle = styled.header `
  .bg-primary {
      background: #82ae46 !important;
  }
  .no-gutters > .col, .no-gutters > [class*="col-"] {
    padding-right: 0;
    padding-left: 0;
  }

  .topper {
    font-size: 11px;
    width: 100%;
    display: block;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 3.5px 0;
    margin-left: 5px;
  }

  .topper .icon span {
    color: #fff;
  }

  [class^="icon-"], [class*=" icon-"] {
    font-family: 'icomoon' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .topper .text {
    width: calc(100% - 30px);
    color: white;
  }

  .phone {
    transform: rotate(90deg);
  }

  @media screen and (max-width: 991px) {
    .topper {
      padding: 8px;
    }
  }
`;
