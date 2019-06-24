import React from 'react';

import Evento1 from '../images/eventos/evento1.jpg';
import Evento2 from '../images/eventos/evento2.jpg';

export default function NoticiasHome() {
  const linkHref = '#';
  return (
    <div className="site-section">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 text-center">
            <h2 className="font-weight-light text-black">Noticias y Eventos</h2>
          </div>
        </div>

        <div className="row mb-3 align-items-stretch">
          <div className="col-md-6 col-lg-6 mb-4 mb-lg-4">
            <div className="h-entry">
              <img src={Evento1} alt="" className="img-fluid" />
              <br />
              <div className="addthis_inline_share_toolbox" />
              <br />
              <h2 className="font-size-regular">
                <a href={linkHref}>
                  ASOCIACIÓN KOLOB PRESENTA 02 INVESTIGACIONES EN CONGRESO DE AETAPI - ESPAÑA
                </a>
              </h2>
              <div className="meta mb-4">Noviembre 2018</div>
              <p>
                En el congreso internacional de AETAPI ( Asociación Española de Profesionales del
                AUTISMO), en la temática de EDUCACIÓN INCLUSIVA y PROFESIONALES Y ÉTICA, CALIDAD DE
                VIDA Y ORGANIZACIONES.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 mb-4 mb-lg-4">
            <div className="h-entry">
              <img src={Evento2} alt="" className="img-fluid" />
              <br />
              <div className="addthis_inline_share_toolbox" />
              <br />
              <h2 className="font-size-regular">
                <a href={linkHref}>INCLUSIÓN: FIRMA DE CONTRATO LABORAL</a>
              </h2>
              <div className="meta mb-4">Abril 2019</div>
              <p>
                Leonardo es la primera persona con Autismo dentro del Equipo de Trabajo de KOLOB.
              </p>
            </div>
          </div>
        </div>

        {/*<div className="row">
          <div className="col-12 text-center">
            <a href={linkHref} className="btn btn-outline-primary border-2 py-3 px-5">
              Ver todos los eventos
            </a>
          </div>
        </div>*/}
      </div>
    </div>
  );
}
