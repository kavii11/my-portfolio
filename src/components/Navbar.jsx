import React from 'react';
import { NavLink } from 'react-router-dom';



export default function Navbar() {
  return (
    <>
    <div className="navbar">
       <a href="/home" className="Logo">navIO.Ai</a>
     <div className='navlinks'> 
      
       <NavLink to="/home">Home</NavLink>
       <NavLink to="/about">About me</NavLink>
       <NavLink to="/contact">Contact</NavLink>
       <NavLink to="/projects">Projects</NavLink>
       <NavLink to="/lang">lang</NavLink>
       </div>
      
   </div>
   
   </>
  );
}


