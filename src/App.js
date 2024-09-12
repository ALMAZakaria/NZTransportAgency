//import logo from './logo.svg';
//import './App.css';
// App.js
import React from 'react';

import Header from './components/header'; // Adjust the path based on the location of the Header.js file
import Slideheader from './components/slideheader';
import Ourservices from './components/ourservice';
import Whatwedo from './components/whatwedo';
import Footercontact from './components/footercontact';

function App() {
  return (
    <div className="App">
        <div id="site-wrapper">
        <Header />
        <Slideheader />
        <Ourservices />
        <Whatwedo />
        <Footercontact />
        </div>
    </div>
  );
}

export default App;
