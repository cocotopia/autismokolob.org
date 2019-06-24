import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import Slider from "../images/slider.jpg";

export default function NotFound(props) {
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
        style={{ backgroundImage: "url(" + Slider + ")", minHeight: "400px" }}
        data-aos="fade"
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div
            className="row align-items-center justify-content-center text-center"
            style={{ minHeight: "400px" }}
          >
            <div className="col-md-8" data-aos="fade-up" data-aos-delay="400">
              <h1 className="text-white font-weight-light">
                Página no Encontrada
              </h1>
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
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 pl-md-12">
              <p className="mb-0 font-weight-bold text-center">Oups</p>
              <p className="mb-4 text-center">
                La página que estas buscando no se encuentra disponible
              </p>
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-12 text-center">
              <Link to="/" className="btn btn-primary py-2 px-4 text-white">
                Regresar a Inicio
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
