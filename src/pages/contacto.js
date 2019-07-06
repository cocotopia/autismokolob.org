import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import WidgetFacebook from '../components/WidgetFacebook';
import Slider from '../images/pages/contacto.jpg';

export default function Contacto() {
  const linkHref = '#';

  var elmnt = document.getElementById('root');
  elmnt.scrollIntoView();

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
              <h1 className="text-white font-weight-light">Contáctanos</h1>
              <div>
                <Link to="/" className="btn btn-outline py-2 px-4 text-white">
                  Regresar a Incio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-7 mb-5">
              <form action="#" className="p-5 bg-white">
                <div className="row form-group">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label className="text-black" htmlFor="name">
                      Nombres
                    </label>
                    <input type="text" id="name" className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <label className="text-black" htmlFor="lname">
                      Apellidos
                    </label>
                    <input type="text" id="lname" className="form-control" />
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="text-black" htmlFor="email">
                      Email
                    </label>
                    <input type="email" id="email" className="form-control" />
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="text-black" htmlFor="phone">
                      Teléfono o Celular
                    </label>
                    <input type="text" id="phone" className="form-control" />
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="text-black" htmlFor="subject">
                      Asunto
                    </label>
                    <input type="subject" id="subject" className="form-control" />
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="text-black" htmlFor="message">
                      Mensaje
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="7"
                      className="form-control"
                      placeholder="Escribe tu mensaje o consulta aquí..."
                    />
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <input
                      type="submit"
                      value="Enviar Mensaje"
                      className="btn btn-primary py-2 px-4 text-white"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-5">
              <div className="p-4 mb-3 bg-white">
                <p className="mb-0 font-weight-bold">Dirección</p>
                <p className="mb-4">Villa El Solar C -3 - Tacna - Perú</p>

                <p className="mb-0 font-weight-bold">Teléfono</p>
                <p className="mb-4">
                  <a href={linkHref}>51 52 - 618611</a>
                </p>

                <p className="mb-0 font-weight-bold">Email</p>
                <p className="mb-0">
                  <a href={linkHref}>asociacion@autismokolob.org</a>
                </p>
              </div>

              <div className="p-4 mb-3 bg-white">
                <h3 className="h5 text-black mb-3">Síguenos en Facebook</h3>
                <WidgetFacebook />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
