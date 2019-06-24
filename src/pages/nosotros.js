import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import FooterContact from '../components/footerContact';
import Footer from '../components/footer';
import Equipo from '../images/equipo.jpg';
import Historia from '../images/pages/historia.jpg';
import Vision from '../images/pages/vision.jpg';
import Mision from '../images/pages/mision.jpg';

import Man from '../images/staff/man.jpg';
import Woman from '../images/staff/woman.jpg';
import Mauricio from '../images/staff/mauricio.jpg';
import Sebastian from '../images/staff/sebastian.jpg';
import Silvia from '../images/staff/silvia.jpg';
import Patricia from '../images/staff/patricia.jpg';
import Sthefanny from '../images/staff/sthefanny.jpg';
import Jannet from '../images/staff/jannet.jpg';

import P_Mayra from '../images/padres/mayra.jpg';
import P_Linda from '../images/padres/linda.jpg';
import P_Olguin from '../images/padres/olguin.jpg';
import P_Patricia from '../images/padres/patricia.jpg';
import P_Yesila from '../images/padres/yesila.jpg';

import T_ana_paula_fernandez from '../images/tecnico/ana_paula_fernandez.jpg';
import T_blanca_perez from '../images/tecnico/blanca_perez.jpg';
import T_breny_zumaran from '../images/tecnico/breny_zumaran.jpg';
import T_diana_velarde from '../images/tecnico/diana_velarde.jpg';
import T_elio_avilan from '../images/tecnico/elio_avilan.jpg';
import T_elizabeth_godoy from '../images/tecnico/elizabeth_godoy.jpg';
import T_gabriel_silva from '../images/tecnico/gabriel_silva.jpg';
import T_jimena_diaz from '../images/tecnico/jimena_diaz.jpg';
import T_karen_maquera from '../images/tecnico/karen_maquera.jpg';
import T_leonardo_vilca from '../images/tecnico/leonardo_vilca.jpg';
import T_maria_grazia_insua from '../images/tecnico/maria_grazia_insua.jpg';
import T_miguel_perez from '../images/tecnico/miguel_perez.jpg';
import T_milagros_lima from '../images/tecnico/milagros_lima.jpg';
import T_mirelia_palomino from '../images/tecnico/mirelia_palomino.jpg';
import T_monica_chambi from '../images/tecnico/monica_chambi.jpg';
import T_nancy_chipoco from '../images/tecnico/nancy_chipoco.jpg';
import T_raquel_valdivieso from '../images/tecnico/raquel_valdivieso.jpg';
import T_shiandy_contreras from '../images/tecnico/shiandy_contreras.jpg';
import T_valeria_carrera from '../images/tecnico/valeria_carrera.jpg';
import T_yeny_guillen from '../images/tecnico/yeny_guillen.jpg';
import T_yesica_gonzales from '../images/tecnico/yesica_gonzales.jpg';
import T_yizza_mayaute from '../images/tecnico/yizza_mayaute.jpg';

export default function Nosotros(props) {
  //const linkHref = '#';
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
        style={{
          backgroundImage: 'url(' + (props.url === 'nuestro-equipo' ? Equipo : Historia) + ')',
          minHeight: '450px',
        }}
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
        {props.url === 'historia' ? (
          <div className="container" data-aos="fade-up">
            <div className="row align-items-center">
              <div className="col-md-6 mb-5 mb-md-0">
                <img src={Historia} alt="" className="img-fluid rounded" />
              </div>
              <div className="col-md-6 pl-md-5">
                <h2 className="font-weight-light text-black mb-4">Historia</h2>
                <p>
                  La Asociación Kolob Tacna es una organización sin fines de lucro se fundó el 25 de
                  junio del 2011en la ciudad de Tacna, por Mauricio Vargas padre de un niño con
                  Autismo llamado Mathías, y está dedicada a mejorar la calidad de vida de las
                  personas con TRASTORNO DEL ESPECTRO AUTISTA y de sus familias.
                </p>
              </div>
            </div>
          </div>
        ) : null}

        {props.url === 'vision' ? (
          <div className="container" data-aos="fade-up">
            <div className="row align-items-center">
              <div className="col-md-6 pl-md-5">
                <h2 className="font-weight-light text-black mb-4">Visión</h2>
                <p>
                  Ser una organización referente, sostenible y colaboradora, que logre progreso,
                  respeto y calidad de vida para las personas con autismo en todas sus edades;
                  Impulsando la ética, la empatía y sus derechos fundamentales.
                </p>
              </div>
              <div className="col-md-6 mb-5 mb-md-0">
                <img src={Vision} alt="" className="img-fluid rounded" />
              </div>
            </div>
          </div>
        ) : null}

        {props.url === 'mision' ? (
          <div className="container" data-aos="fade-up">
            <div className="row align-items-center">
              <div className="col-md-6 mb-5 mb-md-0">
                <img src={Mision} alt="" className="img-fluid rounded" />
              </div>
              <div className="col-md-6 pl-md-5">
                <h2 className="font-weight-light text-black mb-4">Misión</h2>
                <p>
                  Brindar servicios y crear modelos eficaces, actualizados y éticos, a favor de la
                  calidad de vida de las personas con autismo, por intermedio de un trabajo
                  cooperativo entre el equipo profesional, las familias y sobre todo con ellos
                  mismos.
                </p>
                <p>
                  Promover la formación especializada, basada en la evidencia científica que respete
                  la integridad de cada persona con autismo.
                </p>
              </div>
            </div>
          </div>
        ) : null}

        {props.url === 'nuestro-equipo' ? (
          <div>
            <div className="container equipo">
              {/*
              <div className="row justify-content-center mb-5" data-aos="fade-up">
                <div className="col-md-7">
                  <h2 className="font-weight-light text-black text-center">Directorio</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-4 text-center mb-5" data-aos="fade-up">
                  <img src={Man} alt="Image" className="img-fluid w-50 rounded-circle mb-4" />
                  <h2 className="text-black font-weight-light mb-4">Sr.</h2>
                  <p className="mb-4">Cargo</p>
                  <p>
                    <a href={linkHref} className="pl-0 pr-3">
                      <span className="icon-twitter" />
                    </a>
                    <a href={linkHref} className="pl-3 pr-3">
                      <span className="icon-instagram" />
                    </a>
                    <a href={linkHref} className="pl-3 pr-3">
                      <span className="icon-facebook" />
                    </a>
                    <a href={linkHref} className="pl-3 pr-3">
                      <span className="icon-linkedin" />
                    </a>
                  </p>
                </div>
                <div className="col-md-6 col-lg-4 text-center mb-5" data-aos="fade-up">
                  <img src={Man} alt="Image" className="img-fluid w-50 rounded-circle mb-4" />
                  <h2 className="text-black font-weight-light mb-4">Sr.</h2>
                  <p className="mb-4">Cargo</p>
                  <p>
                    <a href={linkHref} className="pl-0 pr-3">
                      <span className="icon-twitter" />
                    </a>
                    <a href={linkHref} className="pl-3 pr-3">
                      <span className="icon-instagram" />
                    </a>
                    <a href={linkHref} className="pl-3 pr-3">
                      <span className="icon-facebook" />
                    </a>
                    <a href={linkHref} className="pl-3 pr-3">
                      <span className="icon-linkedin" />
                    </a>
                  </p>
                </div>
                <div className="col-md-6 col-lg-4 text-center mb-5" data-aos="fade-up">
                  <img src={Woman} alt="Image" className="img-fluid w-50 rounded-circle mb-4" />
                  <h2 className="text-black font-weight-light mb-4">Sra.</h2>
                  <p className="mb-4">Cargo</p>
                  <p>
                    <a href={linkHref} className="pl-0 pr-3">
                      <span className="icon-twitter" />
                    </a>
                    <a href={linkHref} className="pl-3 pr-3">
                      <span className="icon-instagram" />
                    </a>
                    <a href={linkHref} className="pl-3 pr-3">
                      <span className="icon-facebook" />
                    </a>
                    <a href={linkHref} className="pl-3 pr-3">
                      <span className="icon-linkedin" />
                    </a>
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-lg-4 text-center mb-5" data-aos="fade-up">
                  <img src={Woman} alt="Image" className="img-fluid w-50 rounded-circle mb-4" />
                  <h2 className="text-black font-weight-light mb-4">Sra.</h2>
                  <p className="mb-4">Cargo</p>
                  <p>
                    <a href={linkHref} className="pl-0 pr-3">
                      <span className="icon-twitter" />
                    </a>
                    <a href={linkHref} className="pl-3 pr-3">
                      <span className="icon-instagram" />
                    </a>
                    <a href={linkHref} className="pl-3 pr-3">
                      <span className="icon-facebook" />
                    </a>
                    <a href={linkHref} className="pl-3 pr-3">
                      <span className="icon-linkedin" />
                    </a>
                  </p>
                </div>
                <div className="col-md-6 col-lg-4 text-center mb-5" data-aos="fade-up">
                  <img src={Woman} alt="Image" className="img-fluid w-50 rounded-circle mb-4" />
                  <h2 className="text-black font-weight-light mb-4">Sra.</h2>
                  <p className="mb-4">Cargo</p>
                  <p>
                    <a href={linkHref} className="pl-0 pr-3">
                      <span className="icon-twitter" />
                    </a>
                    <a href={linkHref} className="pl-3 pr-3">
                      <span className="icon-instagram" />
                    </a>
                    <a href={linkHref} className="pl-3 pr-3">
                      <span className="icon-facebook" />
                    </a>
                    <a href={linkHref} className="pl-3 pr-3">
                      <span className="icon-linkedin" />
                    </a>
                  </p>
                </div>
                <div className="col-md-6 col-lg-4 text-center mb-5" data-aos="fade-up">
                  <img src={Woman} alt="Image" className="img-fluid w-50 rounded-circle mb-4" />
                  <h2 className="text-black font-weight-light mb-4">Sra.</h2>
                  <p className="mb-4">Cargo</p>
                  <p>
                    <a href={linkHref} className="pl-0 pr-3">
                      <span className="icon-twitter" />
                    </a>
                    <a href={linkHref} className="pl-3 pr-3">
                      <span className="icon-instagram" />
                    </a>
                    <a href={linkHref} className="pl-3 pr-3">
                      <span className="icon-facebook" />
                    </a>
                    <a href={linkHref} className="pl-3 pr-3">
                      <span className="icon-linkedin" />
                    </a>
                  </p>
                </div>
              </div>

        */}

              <div className="row justify-content-center mb-5" data-aos="fade-up">
                <div className="col-md-7">
                  <h3 className="font-weight-light text-black text-center">Área de Gestión</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-4 text-center mb-5" data-aos="fade-up">
                  <img src={Mauricio} alt="" className="img-fluid w-50 rounded-circle mb-4" />
                  <h2 className="text-black font-weight-light mb-4">Mauricio Vargas</h2>
                  <p className="mb-4">Director General</p>
                </div>
                <div className="col-md-6 col-lg-4 text-center mb-5" data-aos="fade-up">
                  <img src={Silvia} alt="" className="img-fluid w-50 rounded-circle mb-4" />
                  <h2 className="text-black font-weight-light mb-4">Silvia Huallpa</h2>
                  <p className="mb-4">Responsable de Administración</p>
                </div>
                <div className="col-md-6 col-lg-4 text-center mb-5" data-aos="fade-up">
                  <img src={Sthefanny} alt="" className="img-fluid w-50 rounded-circle mb-4" />
                  <h2 className="text-black font-weight-light mb-4">Sthefanny Cisneros</h2>
                  <p className="mb-4">Responsable de Capacitación e imagen institucional</p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-lg-4 text-center mb-5" data-aos="fade-up">
                  <img src={Jannet} alt="" className="img-fluid w-50 rounded-circle mb-4" />
                  <h2 className="text-black font-weight-light mb-4">Yanneth Akchar</h2>
                  <p className="mb-4">Responsable de área Pedagógica </p>
                </div>
                <div className="col-md-6 col-lg-4 text-center mb-5" data-aos="fade-up">
                  <img src={Patricia} alt="" className="img-fluid w-50 rounded-circle mb-4" />
                  <h2 className="text-black font-weight-light mb-4">Patricia Muñoz</h2>
                  <p className="mb-4">Responsable de área de diagnóstico e Intervención</p>
                </div>
                <div className="col-md-6 col-lg-4 text-center mb-5" data-aos="fade-up">
                  <img src={Sebastian} alt="" className="img-fluid w-50 rounded-circle mb-4" />
                  <h2 className="text-black font-weight-light mb-4">Sebastián Zenteno</h2>
                  <p className="mb-4">Responsable de Área de Investigación</p>
                </div>
              </div>

              <br />
              <br />
              <br />
              <br />
            </div>

            {/*<div className="row justify-content-center mb-5" data-aos="fade-up">
              <div className="col-md-7">
                <h2 className="font-weight-light text-black text-center">Equipo Técnico</h2>
              </div>
            </div>

           <div
              className="site-blocks-cover inner-page-cover"
              style={{
                backgroundImage: 'url(' + Equipo + ')',
                minHeight: '600px',
              }}
            >
              <div
                className="row align-items-center justify-content-center text-center"
                style={{ minHeight: '600px' }}
              >
                <div className="col-md-7" data-aos="fade-up" data-aos-delay="400" />
              </div>
            </div>*/}

            <div className="container equipo">
              <div className="row justify-content-center mb-5" data-aos="fade-up">
                <div className="col-md-7">
                  <h3 className="font-weight-light text-black text-center">Equipo Técnico</h3>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-lg-3 text-center mb-5" data-aos="fade-up">
                  <img
                    src={T_nancy_chipoco}
                    alt=""
                    className="img-fluid w-50 rounded-circle mb-4"
                  />
                  <h2 className="text-black font-weight-light mb-4">Nancy Chipoco </h2>
                </div>
                <div className="col-md-6 col-lg-3 text-center mb-5" data-aos="fade-up">
                  <img
                    src={T_diana_velarde}
                    alt=""
                    className="img-fluid w-50 rounded-circle mb-4"
                  />
                  <h2 className="text-black font-weight-light mb-4">Diana Velarde</h2>
                </div>
                <div className="col-md-6 col-lg-3 text-center mb-5" data-aos="fade-up">
                  <img src={T_blanca_perez} alt="" className="img-fluid w-50 rounded-circle mb-4" />
                  <h2 className="text-black font-weight-light mb-4">Blanca Pérez</h2>
                </div>
                <div className="col-md-6 col-lg-3 text-center mb-5" data-aos="fade-up">
                  <img
                    src={T_yesica_gonzales}
                    alt=""
                    className="img-fluid w-50 rounded-circle mb-4"
                  />
                  <h2 className="text-black font-weight-light mb-4">Yesica Gonzales</h2>
                </div>
                <div className="col-md-6 col-lg-3 text-center mb-5" data-aos="fade-up">
                  <img src={T_yeny_guillen} alt="" className="img-fluid w-50 rounded-circle mb-4" />
                  <h2 className="text-black font-weight-light mb-4">Yeny Guillen</h2>
                </div>
                <div className="col-md-6 col-lg-3 text-center mb-5" data-aos="fade-up">
                  <img
                    src={T_yizza_mayaute}
                    alt=""
                    className="img-fluid w-50 rounded-circle mb-4"
                  />
                  <h2 className="text-black font-weight-light mb-4">Yizza Mayaute</h2>
                </div>
                <div className="col-md-6 col-lg-3 text-center mb-5" data-aos="fade-up">
                  <img
                    src={T_milagros_lima}
                    alt=""
                    className="img-fluid w-50 rounded-circle mb-4"
                  />
                  <h2 className="text-black font-weight-light mb-4">Milagros Lima</h2>
                </div>
                <div className="col-md-6 col-lg-3 text-center mb-5" data-aos="fade-up">
                  <img
                    src={T_raquel_valdivieso}
                    alt=""
                    className="img-fluid w-50 rounded-circle mb-4"
                  />
                  <h2 className="text-black font-weight-light mb-4">Raquel Valdivieso</h2>
                </div>
                <div className="col-md-6 col-lg-3 text-center mb-5" data-aos="fade-up">
                  <img src={T_elio_avilan} alt="" className="img-fluid w-50 rounded-circle mb-4" />
                  <h2 className="text-black font-weight-light mb-4">Elio Avilan</h2>
                </div>
                <div className="col-md-6 col-lg-3 text-center mb-5" data-aos="fade-up">
                  <img
                    src={T_breny_zumaran}
                    alt=""
                    className="img-fluid w-50 rounded-circle mb-4"
                  />
                  <h2 className="text-black font-weight-light mb-4">Breny Zumarán</h2>
                </div>
                <div className="col-md-6 col-lg-3 text-center mb-5" data-aos="fade-up">
                  <img
                    src={T_mirelia_palomino}
                    alt=""
                    className="img-fluid w-50 rounded-circle mb-4"
                  />
                  <h2 className="text-black font-weight-light mb-4">Mirelia Palomino</h2>
                </div>
                <div className="col-md-6 col-lg-3 text-center mb-5" data-aos="fade-up">
                  <img
                    src={T_maria_grazia_insua}
                    alt=""
                    className="img-fluid w-50 rounded-circle mb-4"
                  />
                  <h2 className="text-black font-weight-light mb-4">María Grazia Insúa</h2>
                </div>
                <div className="col-md-6 col-lg-3 text-center mb-5" data-aos="fade-up">
                  <img
                    src={T_karen_maquera}
                    alt=""
                    className="img-fluid w-50 rounded-circle mb-4"
                  />
                  <h2 className="text-black font-weight-light mb-4">Karen Maquera</h2>
                </div>

                <div className="col-md-6 col-lg-3 text-center mb-5" data-aos="fade-up">
                  <img
                    src={T_ana_paula_fernandez}
                    alt=""
                    className="img-fluid w-50 rounded-circle mb-4"
                  />
                  <h2 className="text-black font-weight-light mb-4">Ana Paula Fernández</h2>
                </div>

                <div className="col-md-6 col-lg-3 text-center mb-5" data-aos="fade-up">
                  <img
                    src={T_monica_chambi}
                    alt=""
                    className="img-fluid w-50 rounded-circle mb-4"
                  />
                  <h2 className="text-black font-weight-light mb-4">Mónica Chambe</h2>
                </div>

                <div className="col-md-6 col-lg-3 text-center mb-5" data-aos="fade-up">
                  <img src={T_jimena_diaz} alt="" className="img-fluid w-50 rounded-circle mb-4" />
                  <h2 className="text-black font-weight-light mb-4">Jimena Díaz</h2>
                </div>

                <div className="col-md-6 col-lg-3 text-center mb-5" data-aos="fade-up">
                  <img
                    src={T_elizabeth_godoy}
                    alt=""
                    className="img-fluid w-50 rounded-circle mb-4"
                  />
                  <h2 className="text-black font-weight-light mb-4">Elizabeth Godoy</h2>
                </div>

                <div className="col-md-6 col-lg-3 text-center mb-5" data-aos="fade-up">
                  <img
                    src={T_valeria_carrera}
                    alt=""
                    className="img-fluid w-50 rounded-circle mb-4"
                  />
                  <h2 className="text-black font-weight-light mb-4">Valeria Carrera</h2>
                </div>
                <div className="col-md-6 col-lg-3 text-center mb-5" data-aos="fade-up">
                  <img
                    src={T_shiandy_contreras}
                    alt=""
                    className="img-fluid w-50 rounded-circle mb-4"
                  />
                  <h2 className="text-black font-weight-light mb-4">Shiandy Contreras</h2>
                </div>
                <div className="col-md-6 col-lg-3 text-center mb-5" data-aos="fade-up">
                  <img src={T_miguel_perez} alt="" className="img-fluid w-50 rounded-circle mb-4" />
                  <h2 className="text-black font-weight-light mb-4">Miguel Pérez</h2>
                </div>

                <div className="col-md-6 col-lg-3 text-center mb-5" data-aos="fade-up">
                  <img
                    src={T_leonardo_vilca}
                    alt=""
                    className="img-fluid w-50 rounded-circle mb-4"
                  />
                  <h2 className="text-black font-weight-light mb-4">Leonardo Vilca</h2>
                </div>

                <div className="col-md-6 col-lg-3 text-center mb-5" data-aos="fade-up">
                  <img
                    src={T_gabriel_silva}
                    alt=""
                    className="img-fluid w-50 rounded-circle mb-4"
                  />
                  <h2 className="text-black font-weight-light mb-4">Gabriel Silva</h2>
                </div>

                <div className="col-md-6 col-lg-3 text-center mb-5" data-aos="fade-up">
                  <img src={Woman} alt="" className="img-fluid w-50 rounded-circle mb-4" />
                  <h2 className="text-black font-weight-light mb-4">Yeltsin Copa</h2>
                </div>
              </div>
            </div>

            <div className="container equipo">
              <br />
              <br />
              <br />
              <br />

              <div className="row justify-content-center mb-5" data-aos="fade-up">
                <div className="col-md-7">
                  <h3 className="font-weight-light text-black text-center">
                    Directiva de Familias
                  </h3>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-lg-3 text-center mb-5" data-aos="fade-up">
                  <img src={P_Mayra} alt="" className="img-fluid w-50 rounded-circle mb-4" />
                  <h2 className="text-black font-weight-light mb-4">Mayra Delgado</h2>
                  <p className="mb-4">Presidenta</p>
                </div>
                <div className="col-md-6 col-lg-3 text-center mb-5" data-aos="fade-up">
                  <img src={P_Yesila} alt="" className="img-fluid w-50 rounded-circle mb-4" />
                  <h2 className="text-black font-weight-light mb-4">Yesila Arminta</h2>
                  <p className="mb-4">Vice presidenta</p>
                </div>
                <div className="col-md-6 col-lg-3 text-center mb-5" data-aos="fade-up">
                  <img src={P_Linda} alt="" className="img-fluid w-50 rounded-circle mb-4" />
                  <h2 className="text-black font-weight-light mb-4">Linda Ríos</h2>
                  <p className="mb-4">Secretaria </p>
                </div>

                <div className="col-md-6 col-lg-3 text-center mb-5" data-aos="fade-up">
                  <img src={P_Patricia} alt="" className="img-fluid w-50 rounded-circle mb-4" />
                  <h2 className="text-black font-weight-light mb-4">Patricia Llanque </h2>
                  <p className="mb-4">Tesorera </p>
                </div>
                <div className="col-md-6 col-lg-3 text-center mb-5" data-aos="fade-up">
                  <img src={P_Olguin} alt="" className="img-fluid w-50 rounded-circle mb-4" />
                  <h2 className="text-black font-weight-light mb-4">Olguín Quispe </h2>
                  <p className="mb-4">Vocal </p>
                </div>
              </div>

              <br />
              <br />
              <br />
              <br />

              <div className="row justify-content-center mb-5" data-aos="fade-up">
                <div className="col-md-7">
                  <h3 className="font-weight-light text-black text-center">
                    Red de Colaboradores y Asesores
                  </h3>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-lg-3 text-center mb-5" data-aos="fade-up">
                  <img src={Woman} alt="" className="img-fluid w-50 rounded-circle mb-4" />
                  <h2 className="text-black font-weight-light mb-4">Amamia Hervas</h2>
                  <p className="mb-4">España</p>
                </div>

                <div className="col-md-6 col-lg-3 text-center mb-5" data-aos="fade-up">
                  <img src={Man} alt="" className="img-fluid w-50 rounded-circle mb-4" />
                  <h2 className="text-black font-weight-light mb-4">Luis Cimarro</h2>
                  <p className="mb-4">España </p>
                </div>

                <div className="col-md-6 col-lg-3 text-center mb-5" data-aos="fade-up">
                  <img src={Woman} alt="" className="img-fluid w-50 rounded-circle mb-4" />
                  <h2 className="text-black font-weight-light mb-4">Laura Velayos</h2>
                  <p className="mb-4">España </p>
                </div>

                <div className="col-md-6 col-lg-3 text-center mb-5" data-aos="fade-up">
                  <img src={Woman} alt="" className="img-fluid w-50 rounded-circle mb-4" />
                  <h2 className="text-black font-weight-light mb-4">Celia Teira</h2>
                  <p className="mb-4">España </p>
                </div>

                <div className="col-md-6 col-lg-3 text-center mb-5" data-aos="fade-up">
                  <img src={Woman} alt="" className="img-fluid w-50 rounded-circle mb-4" />
                  <h2 className="text-black font-weight-light mb-4">Gisela Regli</h2>
                  <p className="mb-4">España </p>
                </div>

                <div className="col-md-6 col-lg-3 text-center mb-5" data-aos="fade-up">
                  <img src={Woman} alt="" className="img-fluid w-50 rounded-circle mb-4" />
                  <h2 className="text-black font-weight-light mb-4">Gey Lagar</h2>
                  <p className="mb-4">España </p>
                </div>

                <div className="col-md-6 col-lg-3 text-center mb-5" data-aos="fade-up">
                  <img src={Man} alt="" className="img-fluid w-50 rounded-circle mb-4" />
                  <h2 className="text-black font-weight-light mb-4">Ernesto Reaño</h2>
                  <p className="mb-4">Perú </p>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {/*<div
        className="site-blocks-cover overlay inner-page-cover"
        style={{
          backgroundImage: "url(" + Slider + ")",
          backgroundAttachment: "fixed",
          minHeight: "300px"
        }}
      >
        <div className="container">
          <div
            className="row align-items-center justify-content-center text-center"
            style={{ minHeight: "300px" }}
          >
            <div className="col-md-7" data-aos="fade-up" data-aos-delay="400">
              <h2 className="text-white font-weight-light h1">
                “La esencia no se transa”
              </h2>
            </div>
          </div>
        </div>
      </div>*/}

      <FooterContact />

      <Footer />
    </div>
  );
}
