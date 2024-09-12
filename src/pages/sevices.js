import React from 'react';

import Header from '../components/header'; // Adjust the path based on the location of the Header.js file
import Footercontact from '../components/footercontact';
import Ourservices from '../components/ourservice';


const Sevices = () => {
  return (
    
  <div className="Sevices" style={{minHight:'100vh!important'}}>
        <Header />
        <main>
          <div className="container" >
            <h1 className="col-12">This is the Services page</h1>
          </div>
        
        <Ourservices />
        </main>
        <Footercontact />
  </div>
  );
}

export default Sevices;
