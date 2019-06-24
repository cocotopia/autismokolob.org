import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import FooterContact from '../components/footerContact';
import Slider from '../images/pages/colabora.jpg';
import Image from '../images/img_4.jpg';

export default function Colabora(props) {
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
        <div className="container" data-aos="fade-up" />
        {props.url === 'donaciones' ? (
          <div className="row">
            <div className="col-lg-4 mb-5">
              <img src={Image} alt="" className="image-responsive" style={{ width: '100%' }} />
            </div>

            <div className="overlap-left col-lg-8 bg-white p-md-5 align-self-center">
              <p className="text-black lead">
                Colabora a través de aportaciones económicas, mobiliario, productos o servicios que
                nos permitan continuar ayudando a personas con TEA y a sus familias.
              </p>
              <p className="text-black lead">
                Para aportaciones económicas rellena y haz llegar a{' '}
                <a href="mailto:asociación@autismokolob.org">asociación@autismokolob.org</a> el
                siguiente formulario.​
              </p>
            </div>
          </div>
        ) : null}

        {props.url === 'contrata-a-alguien-con-autismo' ? (
          <div className="row">
            <div className="col-lg-4 mb-5">
              <img src={Image} alt="" className="image-responsive" style={{ width: '100%' }} />
            </div>
            <div className="overlap-left col-lg-8 bg-white p-md-5 align-self-center">
              <p className="text-black lead">
                Tener un trabajo es una herramienta fundamental para que el adulto con TEA pueda
                obtener una vida independiente.
              </p>
              <p className="text-black lead">
                Para la persona con TEA, además de la estabilidad económica, un empleo le aporta
                autoestima, automotivación de sentirse válido en la sociedad, y la posibilidad de
                conocer nuevos entornos y personas.
              </p>
              <p className="text-black lead">
                NOSOTROS te ayudamos a encontrar a una persona con TEA para tu empresa.
              </p>
            </div>
          </div>
        ) : null}

        {props.url === 'servicios-con-descuento' ? (
          <div className="row">
            <div className="col-lg-4 mb-5">
              <img src={Image} alt="" className="image-responsive" style={{ width: '100%' }} />
            </div>
            <div className="overlap-left col-lg-8 bg-white p-md-5 align-self-center">
              <p className="text-black lead">
                Una gran oportunidad de colaborar con las personas con TEA y sus familias es
                brindándoles descuentos en los servicios y productos que oferta tu empresa. Estos
                beneficios también pueden ser dirigidos a la organización o directamente en forma
                personal.
              </p>
            </div>
          </div>
        ) : null}

        {props.url === 'practicas-pre-profesionales' ? (
          <div className="row">
            <div className="col-lg-4 mb-5">
              <img src={Image} alt="" className="image-responsive" style={{ width: '100%' }} />
            </div>
            <div className="overlap-left col-lg-8 bg-white p-md-5 align-self-center">
              <p className="text-black lead">
                Las prácticas Profesionales o Pre Profesionales, son esenciales para aplicar
                aprendizajes y herramientas adquiridas durante el período de aprendizaje.
              </p>
              <p className="text-black lead">
                Generando así más oportunidades de desarrollo, y mayor accesibilidad de servicios
                especializado y éticos para las personas con TEA y sus familias de la región donde
                reside el practicante.
              </p>
              <p className="text-black lead">
                Además, aportaras y sumaras esfuerzos en la ejecución de los programas, servicios y
                proyectos de nuestra organización.
              </p>
            </div>
          </div>
        ) : null}

        {props.url === 'voluntariado' ? (
          <div className="container">
            <div className="row mb-3 align-items-stretch">
              <div className="col-md-12 col-lg-12 mb-12 mb-lg-12">
                <div className="h-entry">
                  <p>
                    Te ofrecemos oportunidades de participar en nuestro equipo, mejorando la calidad
                    de vida de las personas con (tea) y de sus familias. Experiencias enriquecedoras
                    que contribuyan a tu crecimiento personal, a través de la relación con personas
                    con tea.
                  </p>
                  <h2 className="font-size-regular">
                    <a href={linkHref}>¿QUÉ ES SER VOLUNTARIO?</a>
                  </h2>

                  <p>
                    En KOLOB Autismo Perú consideramos el voluntariado son personas comprometidas de
                    forma libre y solidaria, en desarrollar acciones programadas y planificadas que
                    contribuyen a que cada persona con autismo y su familia, puedan desarrollar sus
                    oportunidades de calidad de vida, así como a promover su inclusión como
                    ciudadanos.
                  </p>
                  <p>
                    Las personas con trastorno del espectro del autismo (TEA) tienen limitaciones
                    sociales, pero también capacidades y es importante potenciarlas y hacerlas
                    visibles. Necesitan apoyos para desenvolverse en su entorno y ser parte de la
                    sociedad. Y tú, como voluntario, eres uno de esos apoyos.
                  </p>

                  <h2 className="font-size-regular">
                    <a href={linkHref}>¿QUÉ NECESITAS PARA COLABORAR?</a>
                  </h2>

                  <ul class="list-unstyled">
                    <li class="d-flex align-items-center">
                      <span class="icon-check2 text-primary h3 mr-2" />
                      <span>Tener al menos 16 años.</span>
                    </li>
                    <li class="d-flex align-items-center">
                      <span class="icon-check2 text-primary h3 mr-2" />
                      <span>Tener disposición de tiempo.</span>
                    </li>
                    <li class="d-flex align-items-center">
                      <span class="icon-check2 text-primary h3 mr-2" />
                      <span>Tener una actitud positiva y responsable.</span>
                    </li>
                    <li class="d-flex align-items-center">
                      <span class="icon-check2 text-primary h3 mr-2" />
                      <span>
                        No es necesario que tengas conocimientos específicos, nosotros te
                        orientaremos.
                      </span>
                    </li>
                    <li class="d-flex align-items-center">
                      <span class="icon-check2 text-primary h3 mr-2" />
                      <span>
                        Casos excepcionales de menores de 16 años o grupos deberán ser solicitados
                        con dirección general.
                      </span>
                    </li>
                  </ul>

                  <h2 className="font-size-regular">
                    <a href={linkHref}>¿QUÉ TE OFRECEMOS? </a>
                  </h2>

                  <ul class="list-unstyled">
                    <li class="d-flex align-items-center">
                      <span class="icon-check2 text-primary h3 mr-2" />
                      <span>
                        Oportunidades de participar en nuestro equipo mejorando la calidad de vida
                        de las personas con (TEA) y de sus familias.
                      </span>
                    </li>
                    <li class="d-flex align-items-center">
                      <span class="icon-check2 text-primary h3 mr-2" />
                      <span>
                        Experiencias enriquecedoras que contribuyan en tu crecimiento personal, a
                        través de la relación con personas con TEA y del trabajo en equipo.
                      </span>
                    </li>
                    <li class="d-flex align-items-center">
                      <span class="icon-check2 text-primary h3 mr-2" />
                      <span>
                        Capacitación e Información por un profesional del equipo Kolob, para hacer
                        eficaz tu tiempo y participación de voluntario.
                      </span>
                    </li>
                    <li class="d-flex align-items-center">
                      <span class="icon-check2 text-primary h3 mr-2" />
                      <span>Contar con tus aportaciones, ideas y sugerencias.</span>
                    </li>
                    <li class="d-flex align-items-center">
                      <span class="icon-check2 text-primary h3 mr-2" />
                      <span>
                        Certificación de tu actividad voluntaria y de las formaciones en la que
                        participes durante tu tiempo de voluntariado.
                      </span>
                    </li>
                  </ul>

                  <h2 className="font-size-regular">
                    <a href={linkHref}>¿DÓNDE PUEDES PARTICIPAR?</a>
                  </h2>

                  <p>
                    En actividades, programas o proyectos desarrollados, por nuestra organización
                    según el perfil o acuerdo de participación con el que ingresaste.
                  </p>
                  <p>
                    SOLICITA una entrevista a nuestros números o direcciones de contacto y envíanos
                    un correo a: asociacion@autismokolob.org con el título VOLUNTARIADO adjuntando
                    tu hoja de vida no documentada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {props.url === 'estudios-para-personas-con-tea' ? (
          <div className="row">
            <div className="col-lg-4 mb-5">
              <img src={Image} alt="" className="image-responsive" style={{ width: '100%' }} />
            </div>
            <div className="overlap-left col-lg-8 bg-white p-md-5 align-self-center">
              <p className="text-black lead">
                Puedes colaborar brindando cualquier tipo de ayuda como becas, vacantes, descuentos,
                procesos de admisión exonerados entre otros para que personas con TEA accedan a
                estudios técnicos, universitarios, o cualquiera que fueran de beneficio para
                promover mayores oportunidades de autonomía en ellos. Nosotros te ayudamos a
                encontrar los candidatos.
              </p>
            </div>
          </div>
        ) : null}

        <div className="container">
          <br />
          <br />
          <br />
          <div className="addthis_inline_share_toolbox" />
        </div>
      </div>

      <div
        className="site-blocks-cover overlay inner-page-cover"
        style={{
          backgroundImage: 'url(' + Slider + ')',
          backgroundAttachment: 'fixed',
          minHeight: '300px',
        }}
      >
        <div className="container">
          <div
            className="row align-items-center justify-content-center text-center"
            style={{ minHeight: '300px' }}
          >
            <div className="col-md-7" data-aos="fade-up" data-aos-delay="400">
              <h2 className="text-white font-weight-light h1">“Muchas gracias por colaborar”</h2>
            </div>
          </div>
        </div>
      </div>

      <FooterContact />

      <Footer />
    </div>
  );
}
