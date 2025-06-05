import React from 'react';
import Frontsectionone from '../components/Frontsectionone';
import Work from '../components/Work';
import Footer from '../components/Footer';
import Getintouch from '../components/Getintouch';

export default function Home ()  {  
  return (
    <>
    <Frontsectionone/>

      <Work />
      <Getintouch />
      <Footer />
      </>
  );
}