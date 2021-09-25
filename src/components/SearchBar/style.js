import styled from 'styled-components';


export const SearchBar = styled.section`

.search{
    margin-top: 0;
    padding: 20px 100px 15px;
    float: left;
    width: 100%;
}

.search-inner{
    max-width: 770px;
    display: inline-block;
    width: 100%;
}
.search-inner > h2 {    
    font-size: 35px;
    max-width: 100%;
    text-shadow: none;
    margin-bottom: 25px;
    margin-top: 0;    
    font-family: "Lora",Georgia,serif;
    font-style: italic;
    max-width: 70%;
    display: inline-block;
    line-height: 55px;
    margin-bottom: 0;
    font-weight: 700;
    
}

.search-form {
    position: relative;
    float: left;
    width: 100%;
    margin-top: 15px;
}

.search-form > input {
    font-size: 10.8px;
    color: #868686;
    padding: 10px 30px;
    height: 57px;
    width: 80%;
    float: left;
}

input {
    max-width: 100%;
}

input[type="text"], .select {
    width: 100%;
    display: block;
    border: 1px #ccc solid;
    padding: 10px 20px;
    font-size: 13px;
    color: #000;
    background: #fff;
    outline: 0px !important;
}

.search-form > button {
    color: #fff;
    font-weight: 700;
    font-size: 13.5px;
    padding: 10px 20px;
    position: absolute;
    right: 0;
    max-width: 177px;
    width: 100%;
    top: 0px;
    bottom: 0px;
}

.text-center {
    text-align: center;
}

.brd-rd30 {
    -webkit-border-radius: 30px;
    border-radius: 30px;
}

.bg-green {
    background-color: #82ae46;
}
`;