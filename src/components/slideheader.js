import React from 'react';

const Slideheader = () => {
  return (
  <>
  {/* HEADSIDE CAROUSEL */}
<section className="carousel slide" id="headslide">
  <div data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="./assets/img/headslide/slide1.jpg" alt="Photo1" width="1100" height="500" />
      </div>
      <div className="carousel-item">
        <img src="./assets/img/headslide/slide2.jpg" alt="Photo2" width="1100" height="500" />
      </div>
      <div className="carousel-item">
        <img src="./assets/img/headslide/slide3.jpg" alt="Photo3" width="1100" height="500" />
      </div>
    </div>
    <a className="carousel-control-prev icostyle" href="#headslide" data-slide="prev">
      <span className="carousel-control-prev-icon"></span>
    </a>
    <a className="carousel-control-next icostyle" href="#headslide" data-slide="next">
      <span className="carousel-control-next-icon"></span>
    </a>
  </div>
</section>

{/* SUBTITLE */}
<section className="sub-title">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-10 text-center SubCarousel">
        <h5>
          Ceci eszt simulation du sous titre sur deux lignes, Ceci est une <br />
          simulation du sous titre sur deux lignes
        </h5>
      </div>
    </div>
  </div>
</section>
</>
  );
}

export default Slideheader;
