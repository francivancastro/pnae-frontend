import styled from "styled-components";


export const Dados = styled.h3`
    color: #515151;
    font-family: "Trebuchet MS", Arial, Tahoma, sans-serif;
    font-size: 35px;
    text-align: left;
    margin-bottom: 15px;
    margin-top: 70px;

`;
    
export const Menu = styled.h5`
    color: #515151;
    font-family: "Trebuchet MS", Arial, Tahoma, sans-serif;
    font-size: 25px;
    margin-left: 8px;
    margin-bottom: 15px;
    margin-top: 50px;
`;

export const Container = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    .inputContent {
        display: flex;
        flex-direction: column;
        width:45%;
        margin-bottom: 25px;
    }

    input {
        background-color: transparent;
        font: 1.1em sans-serif;
        margin: 5px;
        padding: 10px;
        cursor: text;
        outline: none;
    }

    input:hover {
        border-bottom-color:  #33993a;
    }
`;

export const ButtonContainer = styled.div `
    padding: 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items:center;
    margin-bottom: 25px;

    button {
        margin-top: 50px;
        height: 50px;
        width: 150px;
        margin-right: 25px;
        color: white;
        text-align: center;
        border-color: transparent;
        border-radius: 3%;
        font-size: 20px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    #salvar {
        background-color:  #33993a;
    }
    #salvar:hover {
        background-color:  #60d668;
    }

    #voltar {
        background-color: rgba(2, 2, 8, 0.52);
    }
    #voltar:hover {
        background-color: rgba(2, 2, 8, 0.411);
    }
`;

export const ImgBox = styled.div `
    padding: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    margin-bottom: 25px;

    label {
        margin-bottom: 15px;
    }

    .img {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 160px;
        width: 160px;
        border: 1px solid transparent;
    }

    #selectImage {
        display: none;
    }

    #selectArea{
        background-color: transparent;
        cursor: pointer;
    }
`;

export const Img = styled.img `
    height: 160px;
    width: 160px;
    border: 1px solid transparent;
    border-radius: 100%;
    display: inline-block;
`;