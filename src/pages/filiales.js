import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import FooterContact from '../components/footerContact';
import Slider from '../images/slider.jpg';
import Tacna from '../images/filiales/tacna.jpg';
import Ilo from '../images/filiales/ilo.jpg';
import Arequipa from '../images/filiales/arequipa.jpg';

export default function Filiales(props) {
  const linkHref = '#';
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
              <h1 className="text-white font-weight-light">{props.title}</h1>
              <div>
                <Link to="/" className="btn btn-outline py-2 px-4 text-white">
                  Regresar a Incio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        {props.url === 'tacna' ? (
          <div className="container" data-aos="fade-up">
            <div className="row align-items-center">
              <div className="col-md-6 pl-md-5">
                <h2 className="font-weight-light text-black mb-4">Tacna</h2>

                <p className="mb-0 font-weight-bold">Dirección</p>
                <p className="mb-4">Villa El Solar C- 3 (a un costado del crucero da bahía)</p>

                <p className="mb-0 font-weight-bold">Teléfono</p>
                <p className="mb-4">
                  <a href={linkHref}>51 52 - 618611</a>
                </p>

                <p className="mb-0 font-weight-bold">Email</p>
                <p className="mb-0">
                  <a href={linkHref}>asociacion@autismokolob.org</a>
                </p>
              </div>

              <div className="col-md-6 mb-5 mb-md-0">
                <img src={Tacna} alt="" className="img-fluid rounded" />
              </div>
            </div>
          </div>
        ) : null}

        {props.url === 'ilo' ? (
          <div className="container" data-aos="fade-up">
            <div className="row align-items-center">
              <div className="col-md-6 pl-md-5">
                <h2 className="font-weight-light text-black mb-4">Ilo</h2>

                <p className="mb-0 font-weight-bold">Dirección</p>
                <p className="mb-4">Ciudad Nueva S - 5 Dpto. 2 (altura del colegio niña María)</p>

                <p className="mb-0 font-weight-bold">Teléfono</p>
                <p className="mb-4">
                  <a href="tel:51 53 – 485 811">51 53 – 485 811</a>
                </p>

                <p className="mb-0 font-weight-bold">Email</p>
                <p className="mb-0">
                  <a href="mailto:dvelarde@autismokolob.org">dvelarde@autismokolob.org</a>
                </p>
              </div>
              <div className="col-md-6 mb-5 mb-md-0">
                <img src={Ilo} alt="" className="img-fluid rounded" />
              </div>
            </div>
          </div>
        ) : null}

        {props.url === 'arequipa' ? (
          <div className="container" data-aos="fade-up">
            <div className="row align-items-center">
              <div className="col-md-6 pl-md-5">
                <h2 className="font-weight-light text-black mb-4">Arequipa</h2>

                <p className="mb-0 font-weight-bold">Dirección</p>
                <p className="mb-4">En remodelación</p>

                <p className="mb-0 font-weight-bold">Celular</p>
                <p className="mb-4">
                  <a href={linkHref}>952 890 054</a>
                </p>

                <p className="mb-0 font-weight-bold">Email</p>
                <p className="mb-0">
                  <a href={linkHref}>scisneros@autismokolob.org</a>
                </p>
              </div>
              <div className="col-md-6 mb-5 mb-md-0">
                <img src={Arequipa} alt="" className="img-fluid rounded" />
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <FooterContact />

      <Footer />
    </div>
  );
}
