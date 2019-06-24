import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import FooterContact from '../components/footerContact';
import SliderDefault from '../images/slider.jpg';

import Orientacion from '../images/pages/servicios/orientacion.jpg';
import DeteccionDiagnostico from '../images/pages/servicios/deteccion-diagnostico.jpg';
import AtencionTemprana from '../images/pages/servicios/atencion-temprana.jpg';
import Saicon from '../images/pages/servicios/saicon.jpg';
import IntervencionTerapeutica from '../images/pages/servicios/intervencion-terapeutica.jpg';
import ApoyoEscuela from '../images/pages/servicios/apoyo-escuela.jpg';
import Capacitaciones from '../images/pages/servicios/capacitaciones.jpg';
import GruposHabilidadesSociales from '../images/pages/servicios/grupos-de-habilidades-sociales.jpg';
import AulasTerapeuticasPedagogicas from '../images/pages/servicios/aulas-terapeuticas-pedagogicas.jpg';
import OcioTiempoLibre from '../images/pages/servicios/ocio-y-tiempo-libre.jpg';
import Pasatias from '../images/pages/servicios/pasantias.jpg';
import CuidadorPersonasTea from '../images/pages/servicios/cuidador-de-personas-con-tea.jpg';
import TerapiaFamilias from '../images/pages/servicios/terapia-a-familias.jpg';

export default function Servicios(props) {
  const linkHref = '#';
  let Slider = SliderDefault;
  switch (true) {
    case props.url === 'orientacion':
      Slider = Orientacion;
      break;
    case props.url === 'deteccion-y-diagnostico':
      Slider = DeteccionDiagnostico;
      break;
    case props.url === 'atencion-temprana':
      Slider = AtencionTemprana;
      break;
    case props.url === 'saicon':
      Slider = Saicon;
      break;
    case props.url === 'intervencion-terapeutica-individual':
      Slider = IntervencionTerapeutica;
      break;
    case props.url === 'grupos-de-habilidades-sociales':
      Slider = GruposHabilidadesSociales;
      break;
    case props.url === 'aulas-terapeuticas-pedagogicas':
      Slider = AulasTerapeuticasPedagogicas;
      break;
    case props.url === 'apoyo-en-escuela':
      Slider = ApoyoEscuela;
      break;
    case props.url === 'ocio-y-tiempo-libre':
      Slider = OcioTiempoLibre;
      break;
    case props.url === 'capacitaciones':
      Slider = Capacitaciones;
      break;
    case props.url === 'pasantias':
      Slider = Pasatias;
      break;
    case props.url === 'cuidador-de-personas-con-tea':
      Slider = CuidadorPersonasTea;
      break;
    case props.url === 'terapia-a-familias':
      Slider = TerapiaFamilias;
      break;
    default:
      Slider = SliderDefault;
  }

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
        <div className="container">
          <div className="row mb-3 align-items-stretch">
            <div className="col-md-12 col-lg-12 mb-12 mb-lg-12">
              {props.url === 'orientacion' ? (
                <div className="h-entry">
                  <p>
                    Es nuestro Servicio de Información y Asesoramiento GRATUITO sobre los Trastornos
                    del Espectro del Autismo y sobre sus recursos existentes.
                  </p>
                  <p>
                    Desde el año 2011 brindamos información, orientación, asesoramiento y apoyo
                    psicosocial, a las personas con TEA, sus familias, profesionales, estudiantes,
                    voluntarios y cualquier persona que lo requiera; información veraz, actual,
                    personalizada e inmediata, teniendo libre y fácil acceso a la misma para
                    identificar los recursos disponibles de su entorno y, a partir de ahí, poder
                    elegir y trabajar en mejorar la calidad de vida de las personas con Autismo.
                  </p>
                  <p>
                    Puedes <Link to="/contacto">SOLICITAR</Link> un turno para orientación dando
                    clic en la pestaña de contacto.
                  </p>
                </div>
              ) : null}

              {props.url === 'deteccion-y-diagnostico' ? (
                <div className="h-entry">
                  <p>
                    Nuestro servicio de Detección y Diagnóstico, está dirigido a familias que estén
                    preocupadas al identificar algunas alteraciones o dificultades en el desarrollo
                    de su hijo o de su hija, al margen de la edad cronológica.
                  </p>

                  <p>
                    Nuestro servicio de Detección y Diagnóstico atiende a personas de todas las
                    edades, por ello este servicio es aplicable también a personas adultas que han
                    identificado en ellos mismos una manera diferente de ser y entender la
                    comunicación social con otras personas o han observado algunas dificultades
                    relacionadas con la cognición social.
                  </p>
                  <p>
                    Dentro de los trastornos del neurodesarrollo estamos especializados en el
                    diagnóstico del trastorno del <strong>espectro del autismo </strong>y por ende
                    del diagnóstico diferencial o la comorbilidad con otras condiciones como pueden
                    ser el trastorno de la comunicación, discapacidad intelectual, el trastorno por
                    déficit de atención e hiperactividad, entre otras.
                  </p>

                  <h2 className="font-size-regular">
                    <a href={linkHref}>¿Qué Ofrecemos?</a>
                  </h2>

                  <p>
                    Nuestro proceso de Evaluación y Diagnóstico está basado en los elementos
                    esenciales de las buenas prácticas y protocolos internacionales, para el
                    diagnóstico del trastorno del espectro de autista.
                  </p>
                  <p>
                    Destacamos el uso de las pruebas estandarizadas y específicas para el
                    diagnóstico de TEA, como la Prueba de Observación ADOS-2 (Lord, C. y cols. 2015)
                    y de la Entrevista para el diagnóstico del autismo ADI-R (LeCouteur, Rutter y
                    Lord, 1994), además de otras entrevistas o cuestionarios dirigidas a los
                    cuidadores, como el Cuestionario de Comunicación Social (SCQ; Rutter, Bailey y
                    Lord, 2005). También exploramos la capacidad cognitiva, habilidades adaptativas
                    y lingüística del evaluado para interpretar las conductas comunicativas y
                    sociales. así como la elaboración de un informe donde no solo se expliquen los
                    aspectos más determinantes de la evaluación, sino que además permita decidir a
                    la familia o a la persona sobre recursos, modelos de intervención, ayuda
                    disponible y otros aspectos que pueden tener un rol importante para su calidad
                    de vida y que impacten el desarrollo de sus capacidades positivamente.
                  </p>

                  <h2 className="font-size-regular">
                    <a href={linkHref}>Nuestro Equipo</a>
                  </h2>
                  <p>
                    Nuestro equipo está formado por profesionales acreditados en los instrumentos
                    diagnósticos ADOS2 y ADIR- R, además cuentan con una amplia experiencia en el
                    proceso de diagnóstico y un profundo conocimiento sobre el trastorno del
                    espectro del autismo, en sus diferentes niveles de severidad y en la forma de
                    expresarse la condición del TEA, según variables como la edad, el sexo, la
                    presencia o no de discapacidad o de lenguaje fluido. Proceso desde el respeto y
                    acompañamiento emocional que se requiere para el evaluado y la familia.
                  </p>
                </div>
              ) : null}

              {props.url === 'atencion-temprana' ? (
                <div className="h-entry">
                  <p>
                    Una de las principales responsabilidades de las familias de personas con TEA es
                    garantizar el acceso a la intervención temprana personalizada (Hasta los seis
                    años de edad) por parte de profesionales formados en modelos de intervención
                    basados en la evidencia científica.
                  </p>
                  <p>
                    La Intervención Temprana mejora el pronóstico aumentando las capacidades
                    intelectuales, reduce las conductas disruptivas, permite mayor desarrollo del
                    lenguaje, mayor integración escolar y reduce los efectos acumulativos de las
                    alteraciones, además aumentan las habilidades sociales y reduce el estrés de la
                    familia.
                  </p>
                  <p>
                    En el centro de atención de la asociación <strong>KOLOB</strong>, contamos con
                    profesionales con experiencia, formados y acreditados en modelos y metodologías
                    para la intervención Temprana, como el Modelo Denver y PACT, entre otros.
                  </p>
                </div>
              ) : null}

              {props.url === 'saicon' ? (
                <div className="h-entry">
                  <p>El Servicio de Apoyo e Intervención en Contextos Naturales (SAICON)</p>
                  <p>
                    Se trata de un servicio ambulatorio, en el que es el profesional de{' '}
                    <strong>KOLOB</strong> el que se desplaza para trabajar en los entornos
                    cotidianos de los niños, adolescentes o adultos con Autismo (casas, escuelas, y
                    comunidad). La intervención se realiza desde un modelo orientado y enfocado en
                    la familia, que considera fundamental la participación de la familia para
                    conseguir la adquisición y generalización de los aprendizajes y favorecer el
                    desarrollo de la persona con TEA.
                  </p>
                </div>
              ) : null}

              {props.url === 'intervencion-terapeutica-individual' ? (
                <div className="h-entry">
                  <p>
                    La intervención terapéutica individual es un espacio privado y primordial para
                    ayudar a potenciar positivamente el desarrollo de las habilidades de la persona
                    con TEA, mediante técnicas y modelos basados en la evidencia.
                  </p>
                  <p>
                    Nuestro Servicio de intervención terapéutica individual permite tres enfoques de
                    trabajo:
                  </p>

                  <h2 className="font-weight-light text-black mb-4">
                    1. Terapia individual multimétodo para Autismo:
                  </h2>
                  <p>
                    Es un sistema que combina en la misma sesión los fundamentos de distintas
                    metodologías con evidencia científica que atienda las necesidades propias e
                    individuales de cada persona con Autismo.
                  </p>

                  <h2 className="font-weight-light text-black mb-4">
                    2. Terapia individual para Autismo:
                  </h2>
                  <p>
                    En este espacio se aplica algunas metodologías, modelos o programas específicos
                    de Autismo como por ejemplo el modelo Denver, PACT, Pecs, Teacch, Ablls,
                    Floortime, entre otros; tomando en cuenta su intensidad, continuidad y
                    protocolos.
                  </p>

                  <h2 className="font-weight-light text-black mb-4">
                    3. Terapia Individual por Áreas:
                  </h2>
                  <p>
                    En este espacio brindamos de manera individual a las personas en sus distintas
                    AREAS DEL DESARROLLO, según sus necesidades, tales como:
                  </p>

                  <ul className="list-unstyled">
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>Terapia de Conducta</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>Terapia de Lenguaje y Comunicación</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>Terapia Ocupacional</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>Terapia Sensorial</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>Terapia Psicológica</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>Terapia Cognitivo - Pedagógico</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>Terapia Familiar</span>
                    </li>
                  </ul>
                </div>
              ) : null}

              {props.url === 'grupos-de-habilidades-sociales' ? (
                <div className="h-entry">
                  <p>
                    Las habilidades sociales son un conjunto de capacidades que permiten el
                    desarrollo de un repertorio de acciones y conductas que hacen que las personas
                    se desenvuelvan en lo social. Estas habilidades son algo complejo ya que están
                    formadas por un amplio abanico de ideas, pensamientos, creencias y valores que
                    son fruto de aprendizajes y de experiencias. Todo esto va a provocar una gran
                    influencia en las conductas, actitudes y en el uso adecuado que tenga la persona
                    en su relación e interacción con los demás.
                  </p>
                  <p>
                    En el Centro Especializado de la Asociación <strong>KOLOB</strong>, atendemos
                    estas necesidades mediante grupos que estén dentro de un perfil similar en su
                    funcionalidad y edad, lo cual permite dinamizar y estructurar asertivamente el
                    cómo trabajar sus necesidades, de acuerdo a sus intereses propios y, sobre todo,
                    los propios de sus edades, para potenciar positivamente sus habilidades
                    sociales.
                  </p>
                  <p>
                    El Centro de Atención de la Asociación <strong>KOLOB</strong> cuenta con un
                    equipo de profesionales de amplia experiencia, formados y acreditados en
                    distintos modelos o metodologías específicos para el TEA, que trabajan con ética
                    y con el objetivo de mejorar positivamente las habilidades y la calidad de vida
                    de las personas con Autismo.
                  </p>
                </div>
              ) : null}

              {props.url === 'aulas-terapeuticas-pedagogicas' ? (
                <div className="h-entry">
                  <p>
                    Nuestra Aulas Terapéuticas Pedagógicas son un espacio importante en donde se
                    combina de acuerdo a las edades y severidad del TEA de los participantes, los
                    siguientes aspectos:
                  </p>

                  <ul className="list-unstyled">
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>A. Intervención terapéutica para las habilidades cognitivas.</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>B. Intervención terapéutica para el desarrollo del lenguaje.</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>C. formato y/o estructura Escuela Regular.</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>D. Autonomía y Calidad de Vida.</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>E. Intensidad de ejecución diaria no menor a 3 horas.</span>
                    </li>
                  </ul>

                  <p>
                    Este programa está a cargo de profesionales acreditados de amplia experiencia,
                    que interactúan y dirigen a los participantes de una manera respetuosa y
                    empática.
                  </p>
                </div>
              ) : null}

              {props.url === 'apoyo-en-escuela' ? (
                <div className="h-entry">
                  <p>
                    Mediante este programa brindamos un servicio en el cual se asigna a una tutora o
                    tutor de capacitado por <strong>KOLOB</strong>, acompañar al estudiante con TEA
                    en su escuela en periodos y objetivos específicos (diario, semanal, quincenal,
                    etc.), con el fin de lograr el mayor desarrollo de elementos funcionales para su
                    inclusión educativa, principalmente instaurando y logrando un trabajo
                    colaborativo entre el estudiante, la Familia, y la Escuela.
                  </p>

                  <p>
                    Además, se combina con un espacio para el acompañamiento psicopedagógico, el
                    cual se aplica en circunstancias muy especiales cuando se observan dificultades
                    que no resultan fácilmente abordables con los recursos usuales o comunes de la
                    clase y tampoco con el apoyo de los compañeros o maestra u otros recursos
                    disponibles en la institución escolar.
                  </p>
                </div>
              ) : null}

              {props.url === 'ocio-y-tiempo-libre' ? (
                <div className="h-entry">
                  <p>
                    El Ocio es el tiempo libre que se dedica a actividades que no son ni trabajo ni
                    tareas domésticas esenciales, pero si con fines recreativos. Es un tiempo
                    recreativo que se usa de manera funcional hacia la calidad de vida. Es diferente
                    al tiempo dedicado a actividades obligatorias como comer, dormir, hacer tareas
                    de cierta necesidad, etc.
                  </p>

                  <p>
                    Las actividades de ocio son aquellas que hacemos en nuestro tiempo libre y no
                    las hacemos por obligación.
                  </p>
                  <p>
                    Mediante este programa, profesionales capacitados por <strong>KOLOB</strong>,
                    brindan dos servicios:
                  </p>

                  <p>
                    <strong className="mb-0 font-weight-bold">SERVICIO DE OCIO INCLUSIVO,</strong>{' '}
                    el cual es un apoyo y acompañamiento a las personas con TEA de manera individual
                    para que desarrollen su ocio positivamente en recursos de la comunidad.
                  </p>

                  <p>
                    <strong className="mb-0 font-weight-bold">SERVICIO DE OCIO COMPARTIDO </strong>{' '}
                    para facilitar experiencias que favorezcan el disfrute y la calidad de vida de
                    los participantes, y además brinde descanso a las familias, mientras sus
                    familiares con TEA realizan actividades lúdicas (excursiones, campamentos,
                    paseos, fiestas, entre otras). En Pequeños grupos estables de amigos, con edades
                    similares, que se reúnen con una frecuencia programada por el tutor, para
                    realizar actividades de su interés en la comunidad.
                  </p>
                </div>
              ) : null}

              {props.url === 'capacitaciones' ? (
                <div className="h-entry">
                  <p>
                    El servicio de capacitación cubre todas las áreas de trabajo y experticia de
                    <strong>KOLOB</strong>. En este servicio se pueden acceder a los espacios de
                    capacitación calendarizados y certificaciones internacionales como también se
                    pueden solicitar espacios específicos de capacitación para organizaciones que lo
                    requieran.
                  </p>

                  <p>
                    Las capacitaciones solicitadas son adaptadas de acuerdo a la necesidad de la
                    organización que la requiera (temática, intensidad, contenidos, certificación,
                    etc.), considerando reuniones previas de planificación y coordinación para
                    culminar con la capacitación y evaluación por parte de los asistentes.
                  </p>
                  <p>
                    Las capacitaciones impartidas por <strong>KOLOB</strong> son impartidas por
                    profesionales de amplia experiencia, cuentan con respaldo académico y consolidan
                    la formación a través de actividades participativas que buscan crear
                    aprendizajes significativos y de impacto en los asistentes.
                  </p>
                  <p>
                    Este servicio también brinda la posibilidad de formaciones con expositores
                    externos, que pertenecen a la red de trabajo y de convenios institucionales
                    nacionales e internacionales de <strong>KOLOB</strong>.
                  </p>
                </div>
              ) : null}

              {props.url === 'pasantias' ? (
                <div className="h-entry">
                  <p>
                    Espacio de formación teórico práctico desarrollado en los espacios de trabajo
                    diarios de <strong>KOLOB</strong>, en periodos bisemanales y mensuales. Los
                    pasantes deben postular en las fechas que <strong>KOLOB</strong> publicará y
                    luego de un proceso de selección se les asignará un tutor y el área de trabajo
                    de su interés. Para iniciar, el tutor y el pasante elaboran un plan de trabajo
                    con objetivos a evaluar, los que serán revisados durante el proceso y en la
                    evaluación final.
                  </p>
                  <p>
                    Una vez aprueben el plan de trabajo se les entregará un certificado de pasantía
                    con las horas trabajadas y el área de desarrollo. Este servicio busca potenciar
                    en los pasantes el máximo de habilidades a través de un aprendizaje en
                    experiencia directa como un miembro más del equipo <strong>KOLOB</strong>.
                  </p>
                </div>
              ) : null}

              {props.url === 'cuidador-de-personas-con-tea' ? (
                <div className="h-entry">
                  <p>
                    Este Servicio brinda a la familia, la asistencia de un profesional de{' '}
                    <strong>KOLOB</strong>, calificado para cuidar de una persona con TEA, durante
                    la ausencia por alguna emergencia, compromiso o espacio de respiro de la familia
                    o sus cuidadores.
                  </p>
                  <p>
                    El profesional de <strong>KOLOB</strong>, asistirá y acompañará a la persona con
                    TEA, mediante un protocolo de atención que permita su seguridad y protección,
                    además de la asistencia a sus necesidades básicas como alimentación, descanso,
                    salud, abrigo, y sobre todo a su integridad, en el tiempo de cuidado.
                  </p>
                  <p>
                    Este servicio tiene como objetivo únicamente el acompañamiento y cuidado, mas NO
                    la intervención terapéutica.
                  </p>
                </div>
              ) : null}

              {props.url === 'terapia-a-familias' ? (
                <div className="h-entry">
                  <p>
                    La terapia para familia busca orientar los recursos familiares hacia la mejora
                    de calidad de vida de sus miembros, centrando el trabajo en su integrante con
                    TEA. Para ello se acompaña a la familia en las distintas vivencias y necesidades
                    respecto a su relación con el autismo, desde la psicoeducación hasta la
                    intervención terapéutica.
                  </p>
                  <p>
                    Este servicio se lleva a cabo combinadamente en consultorio y en los contextos
                    familiares que se requiera según las necesidades específicas de cada familia,
                    mediante el acompañamiento y la planificación colectiva entre el profesional
                    capacitado en <strong>KOLOB</strong> y la familia.
                  </p>
                </div>
              ) : null}
            </div>
          </div>

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
