import React from 'react';
import './cartinfo2.css';
import { Link } from 'react-router-dom';

function CartInfo2({cooperative}) {
  const image = cooperative.image ? new Buffer(cooperative.image.data, 'base64') : null;
  
  return (
    <>
      <div class="col-lg-3 col-md-6 mb-5">
        <div class="card h-100">
          <Link to={'/produtos/cooperativa/' + cooperative._id} style={{color: 'black'}}>
            {image ?
              <img class="card-img-top" src={`data:image/jpeg;base64,${image}`} alt="" />
              :
              <img class="card-img-top" src="http://placehold.it/506x762" alt="" />
            }
            <h6 class="text-center mt-2 mb-2">{cooperative.name}</h6>
          </Link>
        </div>
      </div>
    </>
  )
}

export default CartInfo2;