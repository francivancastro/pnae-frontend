import React from 'react';
import { FaPhone, FaPaperPlane, FaCarrot } from 'react-icons/fa';
import { BarTopStyle } from './styles';

export default function BarTop() {

  return(
    <BarTopStyle>
      <div className="py-1 bg-primary">
        <div className="container">
          <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
            <div className="col-lg-12 d-block">
              <div className="row d-flex">
                <div className="col-md pr-4 d-flex topper align-items-center">
                  <div className="icon phone mr-2 d-flex justify-content-center align-items-center"> 
                    <FaPhone color="white" />
                  </div>
                  <span style={{fontSize: '12px'}} className="text">Projeto de Mestrado - PROFNIT</span>
                </div>

                <div className="col-md pr-4 d-flex topper align-items-center">
                  <div className="icon message mr-2 d-flex justify-content-center align-items-center"> 
                    <FaPaperPlane color="white" />
                  </div>
                  <span className="text">Orientador: Prof. Dr Rafael Pontes</span>
                </div>

                <div className="col-md pr-4 d-flex topper align-items-center">
                  <div className="icon carrot mr-2 d-flex justify-content-center align-items-center"> 
                    <FaCarrot color="white" />
                  </div>
                  <span className="text">Mestrando: Ederson Costa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BarTopStyle>
  );
};