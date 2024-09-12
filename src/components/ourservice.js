import React from 'react';

const Ourservice = () => {
  return (
    <>

{/* Our Services */}
<section className="our-services">
  {/* Top content */}
  <div className="top-content">
    <div className="container">
      <div id="multi-carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner row flex-nowrap w-60 mx-auto" role="listbox">
          <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-4 active">
            <div className="content">
              <div className="img-box">
                <img
                  src="./assets/img/img1.png"
                  className="img-fluid mx-auto d-block"
                  alt="img1"
                />
              </div>
              <h4 className="text-center">Lorem Ipsum</h4>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis hic
                accusantium facilis delectus at ut corrupti et consequuntur.
              </p>
            </div>
          </div>

          <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-4">
            <div className="content">
              <div className="img-box">
                <img
                  src="./assets/img/img2.png"
                  className="img-fluid mx-auto d-block"
                  alt="img2"
                />
              </div>
              <h4 className="text-center">Lorem Ipsum</h4>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis hic
                accusantium facilis delectus at ut corrupti et consequuntur.
              </p>
            </div>
          </div>

          <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-4">
            <div className="content">
              <div className="img-box">
                <img
                  src="./assets/img/img3.png"
                  className="img-fluid mx-auto d-block"
                  alt="img3"
                />
              </div>
              <h4 className="text-center">Lorem Ipsum</h4>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis hic
                accusantium facilis delectus at ut corrupti et consequuntur.
              </p>
            </div>
          </div>

          {/* Duplicate slides */}
          <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-4">
            <div className="content">
              <div className="img-box">
                <img
                  src="./assets/img/img1.png"
                  className="img-fluid mx-auto d-block"
                  alt="img1"
                />
              </div>
              <h4 className="text-center">Lorem Ipsum</h4>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis hic
                accusantium facilis delectus at ut corrupti et consequuntur.
              </p>
            </div>
          </div>

          <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-4">
            <div className="content">
              <div className="img-box">
                <img
                  src="./assets/img/img2.png"
                  className="img-fluid mx-auto d-block"
                  alt="img2"
                />
              </div>
              <h4 className="text-center">Lorem Ipsum</h4>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis hic
                accusantium facilis delectus at ut corrupti et consequuntur.
              </p>
            </div>
          </div>

          <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-4">
            <div className="content">
              <div className="img-box">
                <img
                  src="./assets/img/img3.png"
                  className="img-fluid mx-auto d-block"
                  alt="img3"
                />
              </div>
              <h4 className="text-center">Lorem Ipsum</h4>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis hic
                accusantium facilis delectus at ut corrupti et consequuntur.
              </p>
            </div>
          </div>

          <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-4">
            <div className="content">
              <div className="img-box">
                <img
                  src="./assets/img/img1.png"
                  className="img-fluid mx-auto d-block"
                  alt="img1"
                />
              </div>
              <h4 className="text-center">Lorem Ipsum</h4>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis hic
                accusantium facilis delectus at ut corrupti et consequuntur.
              </p>
            </div>
          </div>

          <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-4">
            <div className="content">
              <div className="img-box">
                <img
                  src="./assets/img/img2.png"
                  className="img-fluid mx-auto d-block"
                  alt="img2"
                />
              </div>
              <h4 className="text-center">Lorem Ipsum</h4>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis hic
                accusantium facilis delectus at ut corrupti et consequuntur.
              </p>
            </div>
          </div>

          <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-4">
            <div className="content">
              <div className="img-box">
                <img
                  src="./assets/img/img3.png"
                  className="img-fluid mx-auto d-block"
                  alt="img3"
                />
              </div>
              <h4 className="text-center">Lorem Ipsum</h4>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis hic
                accusantium facilis delectus at ut corrupti et consequuntur.
              </p>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <a
          className="carousel-control-prev"
          href="#multi-carousel"
          role="button"
          data-slide="prev"
        >
          <i className="fas fa-arrow-left" aria-hidden="true"></i>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#multi-carousel"
          role="button"
          data-slide="next"
        >
          <i className="fas fa-arrow-right" aria-hidden="true"></i>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
</section>
</>
  );
}

export default Ourservice;
