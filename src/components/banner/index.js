import React from 'react';
import { BackgroundImage } from './styles';


export default function Banner({title, doquintal}){
  return (
    <BackgroundImage className="hero-wrap hero-bread">
      <div className="container">
        <div className="row no-gutters slider-text align-items-center justify-content-center">
          <div className="col-md-9 ftco-animate text-center fadeInUp ftco-animated">
            <p className="breadcrumbs">
              <span className="mr-2">
                
              </span>
            </p>
            <h1 className="mb-0 bread1">{title}</h1>
            <h1 className="mb-0 bread2">{doquintal}</h1>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};