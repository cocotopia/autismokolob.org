import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import FooterContact from '../components/footerContact';
import Slider from '../images/pages/investigacion.jpg';
import Image from '../images/img_4.jpg';

export default function Investigacion(props) {
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
        style={{ backgroundImage: 'url(' + Slider + ')', minHeight: '450px' }}
        data-aos="fade"
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div
            className="row align-items-center justify-content-center text-center"
            style={{ minHeight: '450px' }}
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
        <div className="container" data-aos="fade-up">
          {props.url === 'articulos-cientificos' ? (
            <div className="row">
              <div className="col-lg-4 mb-5">
                <img src={Image} alt="" className="image-responsive" style={{ width: '100%' }} />
              </div>
              <div className="overlap-left col-lg-8 bg-white p-md-5 align-self-center">
                <p className="text-black lead">
                  Artículos científicos sobre autismo, actuales y de libre acceso. Si tienes un
                  artículo publicado y quieres darlo a conocer, puedes contactarnos, enviar el link
                  y podemos publicarlo en este apartado.
                </p>
              </div>
            </div>
          ) : null}

          {props.url === 'fuentes-de-informacion' ? (
            <div className="row">
              <div className="col-lg-4 mb-5">
                <img src={Image} alt="" className="image-responsive" style={{ width: '100%' }} />
              </div>
              <div className="overlap-left col-lg-8 bg-white p-md-5 align-self-center">
                <p className="text-black lead">
                  Sitios en que se pueden encontrar información confiable, aplicada y actualizada
                  sobre autismo.
                </p>
              </div>
            </div>
          ) : null}

          {props.url === 'investigaciones-kolob' ? (
            <div className="row">
              <div className="col-lg-4 mb-5">
                <img src={Image} alt="" className="image-responsive" style={{ width: '100%' }} />
              </div>
              <div className="overlap-left col-lg-8 bg-white p-md-5 align-self-center">
                <p className="text-black lead">
                  En esta sección encontrará los resúmenes de las presentaciones realizadas por
                  Kolob en congresos nacionales e internacionales, como también articulos elaborados
                  por sus profesionales investigadores.
                </p>
              </div>
            </div>
          ) : null}

          {props.url === 'proyectos-de-investigacion' ? (
            <div className="row">
              <div className="col-lg-4 mb-5">
                <img src={Image} alt="" className="image-responsive" style={{ width: '100%' }} />
              </div>
              <div className="overlap-left col-lg-8 bg-white p-md-5 align-self-center">
                <p className="text-black lead">
                  Si tienes una idea de investigación, ya sea como estudiante, profesional u
                  organización, contáctate con nosotros y podemos construir equipos de
                  investigación.
                </p>
              </div>
            </div>
          ) : null}

          {props.url === 'investiga-con-nosotros' ? (
            <div className="row">
              <div className="col-lg-4 mb-5">
                <img src={Image} alt="" className="image-responsive" style={{ width: '100%' }} />
              </div>
              <div className="overlap-left col-lg-8 bg-white p-md-5 align-self-center">
                <p className="text-black lead">en construcción</p>
              </div>
            </div>
          ) : null}
        </div>
        <div className="container">
          <br />
          <br />
          <br />
          <div className="addthis_inline_share_toolbox" />
        </div>
      </div>

      <FooterContact />

      <Footer />
    </div>
  );
}
