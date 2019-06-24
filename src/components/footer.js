import React from 'react';
import Convenio1 from '../images/logo_convenio1.jpg';
//import Convenio2 from '../images/logo_convenio2.jpg';
//import Convenio3 from '../images/logo_convenio3.jpg';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="mb-5">
              <h3 className="footer-heading mb-4">
                CON EL RESPALDO DE:
                <br />
                <br />
                ALEPH TEA (Asociación Libre para la Educación Personalizada y Humana de los
                Trastornos del Espectro Autista) Madrid – España
              </h3>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="row mb-5">
              <img src={Convenio1} alt="Logo" />
            </div>
          </div>

          {/*<div className="col-lg-3">
            <div className="mb-5">
              {" "}
              <img src={Convenio2} />
            </div>
          </div>

          <div className="col-lg-3">
            <div className="mb-5">
              <img src={Convenio3} />
            </div>
        </div>*/}
        </div>
        <div className="row pt-5 text-center">
          <div className="col-md-12">
            {/*<div className="mb-5">
              <a href="#" className="pl-0 pr-3">
                <span className="icon-facebook" />
              </a>
              <a href="#" className="pl-3 pr-3">
                <span className="icon-twitter" />
              </a>
              <a href="#" className="pl-3 pr-3">
                <span className="icon-instagram" />
              </a>
              <a href="#" className="pl-3 pr-3">
                <span className="icon-linkedin" />
              </a>
            </div> */}
            <p>
              Autismo KOLOB {new Date().getFullYear()} - Asociación de Niños con Autismo y Síndrome
              de Asperger TACNA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
