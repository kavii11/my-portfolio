import React from 'react';
import img from '../assets/images/linkedin (3).png';
import img1 from '../assets/images/linkedin (4).png';
import c from '../assets/images/c.png';


const Footer = () => {
  return (
    <>
    <section className="second-lastsection">
      <div className="firstside">
        <div className="b1"></div>
        <div className="b3"></div>
      </div>
      <div className="secondside">
       <div className="b2"></div>
       <div className="b4">
        <div><img src={img} alt="LinkedIn" /></div>
        <div><img src={img1} alt="LinkedIn" /></div>
        <div><img src={img} alt="LinkedIn" /></div>

       </div>
      </div>
    </section>
    
    <div className="dividerr"></div>
    <div className="bottom"><span>Design by naveen.</span><span ><img src={c} alt="Logo" />Nav.Studio 2025. All rights reserved</span></div>
  
    
    </>
  );
}

export default Footer;
