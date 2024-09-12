import React from 'react';

import Header from '../components/header'; // Adjust the path based on the location of the Header.js file
import Footercontact from '../components/footercontact';
import Ourservices from '../components/ourservice';

const Aboutus = () => {
  return (
    <div className="Aboutus">
      <Header />
      <main>
        <div className="container">
          <h1 className="col-12">This is the About us page</h1>
        </div>
      
      <Ourservices />
    </main>
      <Footercontact style={{bottom:'0'}} />
</div>
  );
}

export default Aboutus;
