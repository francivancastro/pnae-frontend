import styled from 'styled-components';
import cc from '../../view/images/ciencia.png';
import gov from '../../view/images/gea.png';
import proUni from '../../view/images/profnit.png';
import rurap from '../../view/images/rurap.png';
import sebrae from '../../view/images/sebrae.png';
import setec from '../../view/images/setec.png';
import srd from '../../view/images/sdr.png';
import unifap from '../../view/images/unifap.png';

export const FooterStyle = styled.footer`
	padding-top:32px;
	flex: 0 0 auto;
	-webkit-flex: 0 0 auto;
	

	.container{
		text-align: center;
	}

	.footer-copyright{
		margin-bottom: 35px;
		text-align: center;
		color: black;
	}

	ul{
		list-style-type: none;
		padding: 0;
		margin-bottom: 18px;
	}

	a{
		color: #282b2d;
		font-size: 18px;
	}

	li{
		display: inline-block;
		margin: 0px 15px;
		line-height: 2;
	}

	.footer-social{
		border-top: 2px solid #82ae46;
		text-align: center;
		padding-top: 25px;
		padding-bottom: 70px;
		background-color: #212121;
	}

	.fa{
		font-size: 36px;
		margin-right: 15px;
		margin-left: 20px;
		background-color: white;

		border-radius: 51%;
		padding: 10px;
		height: 60px;
		width: 60px;
		text-align: center;
		line-height: 43px;
		text-decoration: none;
		transition:color 0.2s;
	}

	.fa-facebook:hover{
		color: #2b55ff;
	}

	.fa-facebook:focus{
		color: #2b55ff; 
	}

	.fa-instagram:hover{
		color:purple;
	}

	.fa-instagram:focus{
		color:purple;
	}

	.fa-youtube:hover{
		color:red;
	}

	.fa-youtube:focus{
		color:red;
	}

	.fa-twitter:hover{
		color: #00aced;

	}

	.fa-twitter:focus{
		color:#00aced;
	}

	.cc{/*Imagem*/
			
		background: url(${cc}) no-repeat;
		width:100%;
		min-height: 50px;
		background-position: center;
		background-size: contain;
	
			
	}
	.governo{/*Imagem*/
			
		background: url(${gov}) no-repeat;
		width:100%;
		min-height: 50px;
		background-position: center;
		background-size: contain;
			
	}
	.profnit{/*Imagem*/
			
		background: url(${proUni}) no-repeat;
		width:100%;
		min-height: 50px;
		background-position: center;
		background-size: contain;
			
	}
	.rurap{/*Imagem*/
			
		background: url(${rurap}) no-repeat; 
		width:100%;
		min-height: 100px;
		background-position: center;
		background-size: contain;
	}

	.sebrae{/*Imagem*/
		background: url(${sebrae}) no-repeat; 
		width:100%;
		min-height: 50px;
		background-position: center;
		background-size: contain;
	}
	.setec{/*Imagem*/
		
		background: url(${setec}) no-repeat;
		width:100%;
		min-height: 50px;
		background-position: center;
		background-size: contain;
			
	}
	.srd{/*Imagem*/
			
		background: url(${srd}) no-repeat;
		width:100%;
		min-height: 50px;
		background-position: center;
		background-size: contain;
			
	}
	.unifap{/*Imagem*/
			
		background: url(${unifap}) no-repeat;
		width:100%;
		min-height: 50px;
		background-position: center;
		background-size: contain;
			
	}

`;




