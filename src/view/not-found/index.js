import React from 'react';
import './not-found.css';
import Navbar from '../../components/navbar';
import Menubar from '../../components/menubar';
import Rodape from '../../components/rodape';
import { Link } from 'react-router-dom';
/*import {Link} from 'react-router-dom';*/

function NotFound(){
	return(
	<>
	<Navbar/>
	<Menubar/>
	<div className="banner wow fadeInUp" data-wow-delay="0.4s" id="Home">
		<div className="container">
			<div className="banner-info">
				<div className="banner-info-head text-center wow fadeInLeft" data-wow-delay="0.5s">
					<h1>ERROR 404</h1>
					<div className="line">
						<h2>Esta página não existe ou foi removida para outro local</h2>
					</div>
					<Link to={'/'} type="button "><font size="5" className="voltar mx-auto pl-2 pr-2   font-weight-bold hvr-rectangle-in d-inline-block"> Voltar para Home </font></Link>
				</div>
			</div>
		</div>
	</div>
	<div className="content">
		<Rodape />
	</div>
	</>
    )
}

export default NotFound;
