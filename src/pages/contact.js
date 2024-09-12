import React from 'react';

import Header from '../components/header'; // Adjust the path based on the location of the Header.js file
import Footercontact from '../components/footercontact';

const Contact = () => {
  return (
    <div className="Contact" style={{minHight:'100vh!important'}}>
    <Header />
    <main>
      <div className="container">
        <h1 className="col-12 ">This is the contact page</h1>
      </div>
    </main>
  <Footercontact style={{bottom:'0'}} />
</div>
  );
}

export default Contact;
