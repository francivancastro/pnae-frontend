import React from 'react';
import { Link } from 'react-router-dom';
import { SectionCategory  } from './styles';

export default function HomeCategories() {

  return (
    <SectionCategory>
      <div className="ftco-section ftco-category ftco-no-pt">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-6 order-md-last align-items-stretch d-flex">
                  <div className="category-wrap-2 ftco-animate img align-self-stretch d-flex fadeInUp ftco-animated category">
                    <div className="text text-center">
                      <h2>Vegetais</h2>
                      <p>Proteja a saúde da sua família</p>
                      <p><Link to="#" className="btn btn-primary">Comprar agora</Link></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="category-wrap ftco-animate img mb-4 d-flex align-items-end fadeInUp ftco-animated category-1">
                    <div className="text px-3 py-1">
                      <h2 ><Link to="#" >Vegetais</Link></h2>
                    </div>
                  </div>
                  <div className="category-wrap ftco-animate img d-flex align-items-end fadeInUp ftco-animated category-2" >
                    <div className="text px-3 py-1">
                      <h2 ><Link to="#" >Frutas</Link></h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="category-wrap ftco-animate img mb-4 d-flex align-items-end fadeInUp ftco-animated category-3" >
                <div className="text px-3 py-1">
                  <h2 ><Link to="#" >Sucos</Link></h2>
                </div>		
              </div>
              <div className="category-wrap ftco-animate img d-flex align-items-end fadeInUp ftco-animated category-4" >
                <div className="text px-3 py-1">
                  <h2 ><Link to="#" >Secos</Link></h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionCategory>

  );
}