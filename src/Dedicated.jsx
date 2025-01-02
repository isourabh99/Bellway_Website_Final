import React from 'react'
import CNavbar from './CNavbar'
import './figma.css';

import { useState,useEffect } from 'react';
import Footer from './Footer'
import Ad5 from './Ad5';
const Dedicated = () => {
  return (
    <>
      <CNavbar />
      <div className="jb">
        <div className="bx">
          <div>
            <img
              loading="lazy"
              className="mlq"
              src="https://i.pinimg.com/564x/e6/94/21/e69421608c85d1f1f7ee792e29fb56a3.jpg"
              alt=""
            />
          </div>

          <div className="klu">
            <h1 className="hy">Dedicated</h1>
            <h1 className="hx" style={{ position: "relative", left: "1px" }}>
              Hiring
            </h1>
          </div>
        </div>
      </div>
      <div className="talk">
        <Ad5 />
      </div>
      <Footer />
    </>
  );
}

export default Dedicated
