import React from 'react';
import './lista3.css';
import { Link } from 'react-router-dom';

function Lista3() {
    return (
        <>
            <div class="col-lg-3 col-md-6 mb-5">
                <div class="card h-100">
                    <a href="#"><img class="card-img-top" src="http://placehold.it/500x300" alt="" /></a>
                    <h5 class="mt-2 mb-2">
                        <h6 className="text-center" href="#">Mandioca do Seu Zé</h6>
                        <h5 className="text-center mt-2">R$10.00</h5>
                    </h5>
                </div>

            </div>
        </>
    )
}

export default Lista3;