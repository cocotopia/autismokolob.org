import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import FooterContact from '../components/footerContact';
import Slider from '../images/slider.jpg';
import Image from '../images/img_1.jpg';

export default function Transparencia() {
  return (
    <div className="site-wrap">
      <div className="site-mobile-menu">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle" />
          </div>
        </div>
        <div className="site-mobile-menu-body" />
      </div>

      <Header />

      <div
        className="site-blocks-cover inner-page-cover"
        style={{ backgroundImage: 'url(' + Slider + ')', minHeight: '400px' }}
        data-aos="fade"
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div
            className="row align-items-center justify-content-center text-center"
            style={{ minHeight: '400px' }}
          >
            <div className="col-md-8" data-aos="fade-up" data-aos-delay="400">
              <h1 className="text-white font-weight-light">Transparencia</h1>
              <div>
                <Link to="/" className="btn btn-outline py-2 px-4 text-white">
                  Regresar a Incio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section" data-aos="fade-up">
        <div className="container" data-aos="fade">
          <div className="row">
            <div className="overlap-left col-lg-8 bg-white p-md-5 align-self-center">
              <p className="text-black lead">
                Aquí se publicarán todas las donaciones, ayudas o aportes que se dan a KOLOB o que
                KOLOB brinde ya sean de manera identificada o anónima, con el objetivo de mostrar
                transparencia en el uso y distribución de los recursos brindados.
              </p>
            </div>
            <div className="col-lg-4 mb-5">
              <img src={Image} alt="" className="image-responsive" style={{ width: '100%' }} />
            </div>
          </div>
        </div>
      </div>

      <FooterContact />

      <Footer />
    </div>
  );
}
