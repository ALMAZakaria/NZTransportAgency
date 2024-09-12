import React, { useState } from 'react';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };
  return (    
      <>
  {/* HEADER
    ================================================================================================  */}
  <header className="site-header smart-scroll" role="banner" id="myPage">
    {/*Menu*/}
    <div className="container" style={{ maxWidth: "100%", padding: 0 }}>
      <div
        className="row justify-content-center "
        style={{ maxWidth: "100%", padding: 0 }}
      >
        <div className="col-lg-10 ">
          <nav className="navbar navbar-expand-lg navbar-light bg-white">
            
            <img className="logo" src="../assets/img/logo2.png" id="meanlogo" alt="Not found" /> 
            
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#main_nav"
              aria-label="Toggle navigation"
            >
              
              <div className={`navicon ${isActive ? 'active' : ''}`} onClick={toggleClass}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
              </div>
            </button>
            <div className="collapse navbar-collapse" id="main_nav">
              <ul className="navbar-nav ml-auto mr-5 ">
                {/*<li class="nav-item active"> <a class="nav-link" href="/">Home </a> </li>*/}
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Acceuil
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/wedo">
                    Nos Activités
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/services">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Emplacement
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle"
                    href="/contact"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Contactez-Nous
                  </a>
                  <div className="dropdown-menu " role="menu">
                    <div className="col">
                      <div className="ml-3">
                        <ul className="list-unstyled">
                          <li>
                            <a className="nav-link" href="/contact">
                              Careers
                            </a>
                          </li>
                          <li>
                            <a className="nav-link" href="/contact">
                              Interships
                            </a>
                          </li>
                          <li>
                            <a className="nav-link" href="/contact">
                              Consultants
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* col-megamenu.// */}
                    </div>
                    {/* end col-3 */}
                  </div>
                </li>
              </ul>
                <div className="nav-item na">
                  <div className="row justify-content-around SocialIcon">
                    <a className="nav-link" href="https://facebook.com">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a className="nav-link" href="https://x.com">
                      <i className="fab fa-twitter" />
                    </a>
                    <a className="nav-link" href="https://youtube.com">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
  {/*End Menu*/}
</>

  );
}

export default Header;
