import React from 'react';

import Header from '../components/header'; // Adjust the path based on the location of the Header.js file
import Footercontact from '../components/footercontact';
import Whatwedo from '../components/whatwedo';


const Wedo = () => {
  return (
    <div className="Wedo" style={{minHight:'100vh!important'}}>
    <Header />
    <main>
      <div className="container mt-5" style={{hight:'60vh!important'}}>
        <h1 className="col-12 ">This is the What We do page</h1>
      </div>  
    
    <Whatwedo />
    </main>
  <Footercontact style={{bottom:'0'}} />
</div>
    
);
}

export default Wedo;
