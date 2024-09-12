import React from 'react';

const Footercontact = () => {
  return (
    <>
      {/* FOOTER CONTACT */}
<footer>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-10 ftr">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6">
            <h7>Qui Sommes-Nous</h7>
            <ul className="list-unstyled ml-1">
              <li><a href="/aboutus">Présentation</a></li>
              <li><a href="/aboutus">Mission & valeur</a></li>
              <li><a href="/aboutus">Gouvernance & organisation</a></li>
              <li><a href="/aboutus">Resources Humaines</a></li>
              <li><a href="/aboutus">Publication</a></li>
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-4 col-sm-6">
            <h7>Nos Project</h7>
            <ul className="list-unstyled ml-1">
              <li><a href="/wedo">Carte interactive</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6">
            <h7>Nos Métiers</h7>
            <ul className="list-unstyled ml-1">
              <li><a href="/services">Métiers & experises</a></li>
              <li><a href="/services">Modèle intégré</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6">
            <h7>Presse</h7>
            <ul className="list-unstyled ml-1">
              <li><a href="/">Communiqués de presse</a></li>
              <li><a href="/">Dossiers de presse</a></li>
              <li><a href="/">Revues de presse</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6">
            <h7>Contactez-Nous</h7>
            <ul className="list-unstyled ml-1">
              <li><a href="/contact">Demande de sponsoring</a></li>
              <li><a href="/contact">Demande de visiste de sites</a></li>
              <li><a href="/contact">Contact presse</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/contact">Recrutement</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
{/* End Footer */}

    </>
  );
}

export default Footercontact;
