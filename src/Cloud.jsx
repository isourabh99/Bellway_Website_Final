import React from 'react'

import './figma.css';
import Footer from './Footer'
import { useState,useEffect } from 'react';

import Ad4 from './Ad4';
import CNavbar from './CNavbar';

function Cloud() {
  return (
    <>
      <CNavbar />
      <div className="jb">
        <div className="bx">
          <div>
            <img
              loading="lazy"
              className="mlq"
              src="https://i.pinimg.com/564x/ab/a5/9e/aba59e7177c4256126ab8b7b675f7017.jpg"
              alt=""
            />
          </div>

          <div className="klu">
            <h1 className="hy">CLOUD </h1>
            <h1 className="hx">DEVELOPEMENT </h1>
          </div>
        </div>
      </div>

      <div className="ad4">
        <Ad4 />
      </div>

      <Footer />
    </>
  );
};


export default Cloud