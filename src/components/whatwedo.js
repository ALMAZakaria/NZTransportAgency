import React from 'react';

const Whatwedo = () => {
  return (
    <>
      {/* What We Do Section */}
<section className="what-we-do bg-light">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-10">
        <div className="card-columns">
          <div className="card">
            <div className="card-body">
              <h6 style={{ backgroundColor: "var(--oran1)" }}>Activité</h6>
              <img src="../assets/img/transport-routier.jpg" alt="Photo1" width="100%" />
              <h3>Ceci est une simulation du titre de l'actualité</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit neque molestiae non amet, sapiente voluptate explicabo ipsum, consequatur deleniti enim.</p>
            </div>
          </div>

          <div className="card">
            <div className="card-body" style={{ padding: "1rem", background: "var(--oran1)" }}>
              <h6>Nos Metiers</h6>
              <h3 style={{ color: "var(--green2)", backgroundColor: "transparent" }}>La châine de valeurs NZ transport</h3>
              <p style={{ color: "var(--green2)", backgroundColor: "transparent" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit neque molestiae non amet, sapiente voluptate explicabo ipsum, consequatur deleniti enim.</p>
              <h5>En savoir plus</h5>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <img src="../assets/img/videotHEQUE.jpg" alt="Photo1" width="100%" />
              <h6 style={{ backgroundColor: "var(--green2)" }}>Videotique</h6>
            </div>
          </div>

          <div className="card">
            <div className="card-body" style={{ padding: "1rem", backgroundColor: "var(--green2)" }}>
              <h6 style={{ backgroundColor: "var(--oran1)" }}>Emplacement</h6>
              <h3 style={{ backgroundColor: "var(--green2)" }}>Ceci est une simulation du titre de l'actualité</h3>
              <p style={{ backgroundColor: "var(--green2)" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit neque molestiae non amet, sapiente voluptate explicabo ipsum, adipisicing elit. Suscipit neque molestiae non amet, consequatur deleniti enim.</p>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h6 style={{ background: "var(--oran1)" }}>Emplacement</h6>
              <img src="../assets/img/slide-livr1.jpg" alt="Photo1" width="100%" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit neque molestiae non amet, sapiente voluptate explicabo ipsum, consequatur deleniti enim.</p>
              <h6>En savoir plus</h6>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <img src="../assets/img/headslide/Slide1.jpg" alt="Photo2" width="100%" />
            </div>
          </div>

          <div className="card">
            <div className="card-body" style={{ padding: "1rem", backgroundColor: "var(--green2)" }}>
              <h6 style={{ backgroundColor: "var(--oran1)" }}>Chiffres clés</h6>
              <h3 style={{ color: "var(--oran1)" }}>87 Millions</h3>
              <p style={{ color: "var(--oran1)" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam iure cupiditate animi nulla explicabo sapiente, architecto sit maxime odit iste accusamus laudantium, dolor facilis nemo? Obcaecati modi quasi nostrum cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit neque molestiae non amet, sapiente voluptate explicabo ipsum, consequatur deleniti enim.</p>
              <h5>En savoir plus</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* End What We Do Section */}

    </>
  );
}

export default Whatwedo;
