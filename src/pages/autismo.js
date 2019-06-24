import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import FooterContact from "../components/footerContact";
import SliderDefault from "../images/slider.jpg";

import Definicion from "../images/pages/autismo/definicion-transtorno-espectro-autista.jpg";

import Etimologia from "../images/pages/autismo/etiologia.jpg";
import DeteccionDiagnostico from "../images/pages/autismo/deteccion-y-diagnostico.jpg";
import Comobilidad from "../images/pages/autismo/comorbilidad.jpg";
import AtencionTemprana from "../images/pages/autismo/atencion-temprana.jpg";
import Accesibilidad from "../images/pages/autismo/accesibilidad.jpg";
import ParticipacionDerechos from "../images/pages/autismo/participacion-y-derechos.jpg";
import Educacion from "../images/pages/autismo/educacion.jpg";
import Intervencion from "../images/pages/autismo/intervencion.jpg";
import Familias from "../images/pages/autismo/familias.jpg";

export default function Autismo(props) {
  const linkHref = "#";
  let Slider = SliderDefault;
  switch (true) {
    case props.url === "definicion-transtorno-espectro-autista":
      Slider = Definicion;
      break;
    case props.url === "etiologia":
      Slider = Etimologia;
      break;
    case props.url === "deteccion-y-diagnostico":
      Slider = DeteccionDiagnostico;
      break;
    case props.url === "comorbilidad":
      Slider = Comobilidad;
      break;
    case props.url === "atencion-temprana":
      Slider = AtencionTemprana;
      break;
    case props.url === "accesibilidad":
      Slider = Accesibilidad;
      break;
    case props.url === "participacion-y-derechos":
      Slider = ParticipacionDerechos;
      break;
    case props.url === "educacion":
      Slider = Educacion;
      break;
    case props.url === "intervencion":
      Slider = Intervencion;
      break;
    case props.url === "familias":
      Slider = Familias;
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
        style={{ backgroundImage: "url(" + Slider + ")", minHeight: "450px" }}
        data-aos="fade"
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div
            className="row align-items-center justify-content-center text-center"
            style={{ minHeight: "450px" }}
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
              {props.url === "definicion-transtorno-espectro-autista" ? (
                <div className="h-entry">
                  <h2 className="font-size-regular">
                    <a href={linkHref}>DEFINICION TRASTORNO ESPECTRO AUTISTA</a>
                  </h2>
                  <p>
                    Los Trastornos del Espectro Autista (TEA) comprende un grupo
                    heterogéneo de trastornos de origen neurobiológico que
                    afecta a la configuración del sistema nervioso y al
                    funcionamiento cerebral, afectando el desarrollo de la
                    comunicación e interacción social, la flexibilidad del
                    pensamiento y la conducta, con la presencia de
                    comportamientos e intereses repetitivos y restringidos.
                    Presentan una evolución crónica, con diferentes grados de
                    afectación, adaptación funcional y funcionamiento en el área
                    de lenguaje y desarrollo intelectual, según el caso y
                    momento evolutivo.
                  </p>
                  <p>
                    <strong className="mb-0 font-weight-bold">
                      CAUSA Y ORIGEN:{" "}
                    </strong>
                    En la actualidad, no está determinada la causa exacta que
                    explique la aparición del TEA, sin embargo, poco a poco van
                    conociéndose los diferentes mecanismos etiológicos.
                    Actualmente, la evidencia indica que no existe un autismo,
                    sino que los TEA son diferentes trastornos, de etiologías
                    múltiples, que tienen fenotipos similares. Sabemos que la
                    etiología genética es la más sustentada y que existen
                    mecanismos genéticos en TEA, que conducirán a fenotipos
                    similares.
                  </p>
                  <p>
                    <strong className="mb-0 font-weight-bold">
                      ESPECIFICIDAD:{" "}
                    </strong>
                    El TEA tiene características nucleares propias y
                    definitorias que se manifiestan de forma heterogénea a lo
                    largo de todo el ciclo vital. Esta especificidad ha quedado
                    recogida en los sistemas de clasificación internacionales de
                    salud, incluyendo los de salud mental (DSM-5 y CIE-11) que
                    han sustituido el término “Trastorno Generalizado del
                    Desarrollo (TGD)” por el de “Trastornos del Espectro del
                    Autismo (TEA)”.
                  </p>
                  <p>
                    <strong className="mb-0 font-weight-bold">
                      VARIABILIDAD:{" "}
                    </strong>
                    No hay dos personas con TEA iguales; dependerá de su propio
                    desarrollo personal y de los apoyos que pueda tener en su
                    contexto inmediato, así como de la presencia de una
                    comorbilidad asociada, como la discapacidad intelectual y el
                    nivel de desarrollo del lenguaje.
                  </p>
                  <p>
                    <strong className="mb-0 font-weight-bold">
                      FISICAMENTE INVISIBLE:{" "}
                    </strong>
                    El TEA no lleva asociado ningún rasgo físico diferenciador
                    (solo se manifiesta a nivel de las competencias cognitivas
                    de la persona y del comportamiento).
                  </p>
                  <p>
                    <strong className="mb-0 font-weight-bold">
                      CICLO DE VIDA:{" "}
                    </strong>
                    Acompaña a la persona a lo largo de toda su vida, aunque sus
                    manifestaciones y necesidades cambian en función de las
                    distintas etapas del desarrollo y de las experiencias
                    adquiridas.
                  </p>
                  <p>
                    <strong className="mb-0 font-weight-bold">
                      APOYOS:{"  "}
                    </strong>
                    Es necesario un abordaje integral orientado a facilitar los
                    apoyos individualizados, especializados y basados en la
                    evidencia más adecuados para mejorar la calidad de vida de
                    cada persona (manteniendo, además, una perspectiva de
                    género).
                  </p>
                  <p>
                    <strong className="mb-0 font-weight-bold">
                      FAMILIAS:{" "}
                    </strong>
                    Impacta no solo en quien lo presenta sino también en su
                    familia, quienes son el apoyo fundamental de la persona con
                    TEA.
                  </p>
                  <h2 className="font-size-regular">
                    <a href={linkHref}>
                      ¿CUÁLES SON LAS CARACTERÍSTICAS PRINCIPALES DEL TEA?
                    </a>
                  </h2>
                  <p>
                    Las manifestaciones clínicas del TEA varían mucho entre las
                    personas que lo presentan, así como su funcionamiento
                    intelectual y sus habilidades lingüísticas. Sin embargo,
                    todas ellas comparten características fundamentalmente en
                    dos áreas del desarrollo y del funcionamiento personal: la
                    comunicación e interacción social y la flexibilidad de
                    comportamiento y de pensamiento (criterios centrales para el
                    diagnóstico).
                  </p>
                  <h2 className="font-size-regular">
                    <a href={linkHref}>COMUNICACIÓN E INTERACCIÓN SOCIAL</a>
                  </h2>
                  <p>
                    <strong className="mb-0 font-weight-bold">
                      Habilidades de comunicación verbal y no verbal
                    </strong>
                  </p>
                  <p>
                    Las dificultades de comunicación que pueden presentar se
                    manifiestan tanto a nivel de comprensión como de expresión.
                  </p>
                  <ul className="list-unstyled">
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        <strong className="mb-0 font-weight-bold">
                          COMUNICACIÓN VERBAL:{" "}
                        </strong>
                        Algunas personas con TEA tienen habilidades lingüísticas
                        adecuadas, pero encuentran dificultades para utilizarlas
                        en una comunicación recíproca o en el contexto social en
                        el que son necesarias. Otras presentan alteración en la
                        funcionalidad del lenguaje o estas habilidades son
                        limitadas y, por otro lado, tenemos a las personas que
                        no emplean lenguaje verbal y requieren el apoyo de
                        Sistemas Alternativos y/o Aumentativos de Comunicación -
                        SAAC (sustituyen y apoyan al lenguaje oral,
                        respectivamente).
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        <strong className="mb-0 font-weight-bold">
                          COMUNICACIÓN NO VERBAL:{" "}
                        </strong>
                        Las personas con TEA pueden experimentar dificultades
                        para emplear o extraer el significado de gestos o
                        expresiones faciales de otras personas, así como de
                        otros elementos relevantes para la interacción (contacto
                        ocular, postura corporal, etc.), e integrar estas
                        habilidades con el habla, lo que puede suponerle alguna
                        situación de malentendido en sus interacciones.
                      </span>
                    </li>
                  </ul>
                  <p>
                    <strong className="mb-0 font-weight-bold">
                      Habilidades para la interacción social
                    </strong>
                  </p>
                  <p>
                    Algunas personas con TEA pueden tener dificultades para
                    relacionarse con los demás, comprender el entorno y
                    desenvolverse en determinadas situaciones sociales. Se
                    manifiesta, por ejemplo, en:
                  </p>
                  <ul className="list-unstyled">
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        Acercamientos sociales inusuales o inadecuados para
                        iniciar o reaccionar ante interacciones con otras
                        personas.
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        Problemas para adaptar el comportamiento a distintos
                        contextos o situaciones sociales.
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        Dificultades para comprender las reglas sociales “no
                        escritas”.
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        Dificultades para entender o expresar las emociones de
                        forma ajustada al contexto o a la situación.
                      </span>
                    </li>
                  </ul>

                  <h2 className="font-size-regular">
                    <a href={linkHref}>
                      FLEXIBILIDAD DE COMPORTAMIENTO Y DE PENSAMIENTO
                    </a>
                  </h2>

                  <p>
                    <strong className="mb-0 font-weight-bold">
                      Forma de pensar y comportarse
                    </strong>
                  </p>

                  <p>
                    Las personas con TEA pueden tener dificultades para
                    responder de manera flexible a las demandas de los
                    diferentes contextos y ajustar su forma de pensar y de
                    comportarse. Por ello, adaptarse a los cambios o a
                    situaciones imprevistas puede suponerles un gran esfuerzo y
                    generarles malestar, angustia o ansiedad. Puede
                    manifestarse, por ejemplo, en insistencia en que las cosas
                    sucedan siempre de la misma manera; en la disposición de un
                    repertorio limitado de intereses específicos o en patrones
                    de comportamiento rígido y repetitivo (como repetir las
                    palabras o frases una y otra vez, exactamente de la misma
                    forma -ecolalia-).
                  </p>

                  <p>
                    <strong className="mb-0 font-weight-bold">
                      Estímulos sensoriales
                    </strong>
                  </p>

                  <p>
                    Algunas personas con TEA presentan alteraciones en el
                    procesamiento de los estímulos sensoriales, que se puede
                    manifestar en malestar intenso ante determinados sonidos,
                    olores, luces, sabores o texturas (hipersensorialidad);
                    interés inusual en aspectos sensoriales del entorno (como
                    insistencia por oler o tocar determinadas cosas);
                    fascinación por luces, objetos brillantes o que giran o
                    indiferencia aparente al dolor o a la temperatura
                    (hiposensorialidad).
                  </p>

                  <h2 className="font-size-regular">
                    <a href={linkHref}>
                      EL SÍNDROME DE ASPERGER o TEA SIN DISCAPACIDAD INTELECTUAL
                      ASOCIADA
                    </a>
                  </h2>

                  <p>
                    En la actualidad, tanto el DSM 5 como la CIE-11 (nueva
                    edición que viene a sustituir a la CIE 10 y que entra en
                    vigor en enero 2022) recogen bajo un solo término (TEA) el
                    conjunto de trastornos del neurodesarrollo que antes se
                    incluían en la categoría de trastornos generalizados del
                    desarrollo. Así, los nuevos sistemas de clasificación
                    identifican los criterios de diagnóstico que comparte el
                    TEA, pero reconoce explícitamente la variabilidad de las
                    personas que lo presentan en cuanto a sus habilidades
                    lingüísticas e intelectuales.
                  </p>
                  <p>
                    Por lo que respecta al síndrome de Asperger, los criterios
                    diagnósticos del citado DSM-5 establecen que a las personas
                    “con un diagnóstico bien establecido según el DSM-IV de
                    trastorno autista, enfermedad de Asperger o trastorno
                    generalizado del desarrollo no especificado de otro modo, se
                    les aplicará el diagnóstico de trastorno del espectro del
                    autismo”.
                  </p>
                  <p>
                    Esta afirmación no deja lugar a dudas: el síndrome de
                    Asperger está incorporado en la definición de TEA.
                    Concretamente, en el caso de los criterios que establece el
                    DSM 5 se identificaría bajo la denominación de “TEA sin
                    déficit intelectual acompañante” o “TEA sin discapacidad
                    intelectual asociada”.
                  </p>
                  <p>
                    Atendiendo a las nuevas clasificaciones, podemos referirnos
                    al tradicionalmente denominado síndrome de Asperger como
                    trastorno del espectro del autismo sin discapacidad
                    intelectual asociada ni dificultades en aspectos formales
                    del lenguaje.
                  </p>

                  <h2 className="font-size-regular">
                    <a href={linkHref}>
                      ¿HAY DIFERENCIAS DE PREVALENCIA ENTRE HOMBRES Y MUJERES?
                    </a>
                  </h2>

                  <p>
                    Durante años los datos de investigación han apuntado que los
                    TEA se presentan casi cuatro veces más en el caso de los
                    hombres que en las mujeres. Sin embargo, estos datos se
                    están cuestionando en la actualidad, dado el aumento de
                    diagnósticos en niñas y mujeres que se está produciendo en
                    los últimos años (National Association of Special
                    Educational Needs, 2016). 
                  </p>

                  <p>
                    Este cambio de paradigma ha producido un interés creciente
                    en la comunidad científica por incrementar el conocimiento
                    sobre las necesidades, intereses y capacidades de las
                    mujeres con TEA, aunque hasta el momento la investigación al
                    respecto es limitada.
                  </p>
                  <p>
                    Esta falta de información en el ámbito científico provoca
                    también sesgos de género en la práctica profesional.
                    Así, los diagnósticos en el caso de las mujeres se retrasan
                    aún más que en el caso de los hombres incluso cuando las
                    manifestaciones son evidentes, y existe un mayor riesgo a
                    que reciban diagnósticos erróneos o poco precisos. 
                  </p>
                  <p>
                    En la actualidad la prevalencia del TEA, según la OMS, se
                    calcula en 1 de cada 160 niños. Esta estimación representa
                    una cifra media, pues la prevalencia observada varía
                    considerablemente entre los distintos estudios. No obstante,
                    en algunos estudios bien controlados se han registrado
                    cifras notablemente mayores. Por ejemplo, según la CDC (Los
                    Centros para el Control y la Prevención de Enfermedades de
                    los Estados Unidos) identificó TEA en 1 de cada 59 niños de
                    08 años de edad. La prevalencia de TEA en muchos países de
                    ingresos bajos y medios es hasta ahora desconocida.
                  </p>
                </div>
              ) : null}

              {props.url === "etiologia" ? (
                <div className="h-entry">
                  <h2 className="font-size-regular">
                    <a href={linkHref}>
                      ¿CUÁLES SON LAS CAUSAS DEL TEA? ¿POR QUÉ SE PRODUCEN?
                    </a>
                  </h2>
                  <p>
                    En la actualidad no es posible determinar una causa única
                    que explique la aparición del Trastorno del Espectro del
                    Autismo (TEA), pero sí la fuerte implicación genética en su
                    origen. La gran variabilidad presente en este tipo de
                    trastornos apunta también a la relevancia que puede tener la
                    interacción entre los distintos genes y diferentes factores
                    ambientales en el desarrollo del TEA (fenotipo), pero por el
                    momento, estos elementos no se encuentran claramente
                    identificados, y aún es necesaria mucha investigación al
                    respecto.
                  </p>
                  <h2 className="font-size-regular">
                    <a href={linkHref}>
                      DESPUÉS DE TENER UN HIJO/A CON TEA, ¿CUÁL ES EL RIESGO DE
                      QUE EL SIGUIENTE TAMBIÉN TENGA UN TRASTORNO DE ESTE TIPO?
                    </a>
                  </h2>
                  <p>
                    Muchas familias que tienen un hijo o hija con TEA se
                    plantean esta cuestión cuando piensan en tener más hijos. La
                    respuesta a esta pregunta depende en gran medida de si ha
                    resultado posible identificar o no una causa genética
                    específica para el TEA del primer hijo o hija.
                  </p>
                  <p>
                    Esta identificación no siempre es posible, en la actualidad
                    sólo se logra en aproximadamente el 15% de los casos
                    diagnosticados de TEA. Para estas familias sería
                    especialmente relevante recibir una orientación genética
                    especializada sobre el riesgo de que su siguiente hijo/a
                    pudiera presentar también un trastorno de este tipo.
                  </p>
                  <p>
                    Cuando no es posible identificar esta causa genética
                    específica, los estudios de investigación identifican un
                    riesgo aproximado de recurrencia, en familias que tienen un
                    hijo con TEA, 1 de cada 5 de los hermanos posteriores
                    recibirá un diagnóstico similar y si tiene 2 o más hermanos
                    con TEA, el riesgo de otro hermano con TEA se incrementa a 1
                    de cada 3. De aquellos hermanos que no reciben un
                    diagnóstico de TEA, 1 de cada 5 presentarán elevados
                    síntomas de TEA subclínicos para un diagnóstico y/o
                    alteraciones en su desarrollo evolutivo de lenguaje,
                    cognición o desarrollo motor fino y/o grueso.
                  </p>
                  <p>
                    Esto hace que sea imprescindible mantener una vigilancia
                    estrecha del desarrollo de los hermanos menores de un niño o
                    una niña con TEA, con el objetivo de favorecer la
                    identificación precoz de un posible trastorno de este tipo
                    (u otras dificultades en el desarrollo) y la intervención
                    temprana cuando sea necesario. Por último, es necesario
                    destacar que la dificultad para detectar la causa genética
                    en un amplio porcentaje de los casos de TEA no pone en duda
                    que éstos tengan una base genética, sólo que no es posible
                    identificarla con la tecnología y las pruebas disponibles en
                    la actualidad.
                  </p>
                  <h2 className="font-size-regular">
                    <a href={linkHref}>
                      ¿ES CIERTO QUE LAS VACUNAS QUE SE PONEN A LOS NIÑOS
                      PEQUEÑOS PROVOCAN AUTISMO?
                    </a>
                  </h2>
                  <p>
                    En los últimos años se han llevado a cabo muchas
                    investigaciones para determinar si existe alguna relación
                    entre la vacunación y una mayor prevalencia del TEA. Los
                    estudios se han centrado especialmente en los posibles
                    efectos de la vacuna triple vírica (sarampión, paperas y
                    rubeola) y en aquellas que han utilizado el componente
                    timerosal como conservante.
                  </p>
                  <p>
                    Después del desarrollo de numerosos trabajos de
                    investigación a gran escala y a nivel internacional,
                    actualmente la comunidad médica y científica de todo el
                    mundo apoya de forma unánime la conclusión de que no existe
                    evidencia que relacione la vacunación y la aparición del
                    TEA.
                  </p>
                  <p>
                    Es más, con el paso de los años se ha demostrado que los
                    estudios originales desarrollados por el Dr. Andrew
                    Wakefield que establecían esa posible conexión, carecían de
                    rigor científico y que estaban falseados. Asimismo, una
                    sentencia emitida en 2010 por el Consejo General Médico de
                    Gran Bretaña retiró la licencia para ejercer la medicina de
                    este facultativo en Reino Unido por mala práctica
                    profesional y conducta poco ética. Inmediatamente después la
                    prestigiosa publicación británica The Lancet, responsable de
                    la publicación original del trabajo de Wakefield, emitió una
                    rectificación retirando el artículo y retractándose de su
                    publicación.
                  </p>
                  <p>
                    No obstante, y a pesar de los posicionamientos sostenidos
                    por organismos y entidades de prestigio internacional en el
                    ámbito de la investigación y de la salud, aún se mantienen
                    las voces y comunicaciones que apoyan esta supuesta relación
                    causal entre vacunas y TEA.
                  </p>
                  <p>
                    En este sentido es necesario destacar el importante papel
                    que tienen los medios de comunicación en la difusión del
                    conocimiento, y la gran responsabilidad que deben asumir
                    sobre el mensaje que transmiten en relación a este tipo de
                    trastornos. Es absolutamente necesaria la difusión de
                    información fiable y contrastada, evitando contenidos
                    llamativos pero poco rigurosos o que incluso contradicen la
                    evidencia científica disponible sobre el TEA.
                  </p>
                </div>
              ) : null}

              {props.url === "deteccion-y-diagnostico" ? (
                <div className="h-entry">
                  <h2 className="font-size-regular">
                    <a href={linkHref}>
                      ¿A QUÉ EDAD SE PUEDEN DETECTAR EL TEA? (PRINCIPALES
                      SEÑALES DE ALERTA EN EL DESARROLLO)
                    </a>
                  </h2>
                  <p>
                    A pesar de que cada niño con TEA es diferente a los demás, y
                    que la edad de detección varía de un caso a otro, existen
                    una serie de señales de alarma que pueden hacer recomendable
                    una valoración exhaustiva del desarrollo. Éstas se muestran
                    a continuación, destacándose que en cualquier edad se pueden
                    presentar los signos establecidos en las etapas previas.
                  </p>

                  <p>
                    <strong className="mb-0 font-weight-bold">
                      HACIA LOS 12 MESES DE EDAD
                    </strong>
                  </p>

                  <ul className="list-unstyled">
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>No balbucea.</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        No hace gestos como saludar con la mano, señalar para
                        pedir alguna cosa o mostrar objetos.
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        No reconoce su nombre ni responde cuando se le llama.
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        No se interesa ni se implica en juegos interactivos
                        sencillos, como hacerle cosquillas o similares.
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>Ausencia de atención conjunta.</span>
                    </li>
                  </ul>

                  <p>
                    <strong className="mb-0 font-weight-bold">
                      ENTRE LOS 12 Y LOS 18 MESES DE EDAD
                    </strong>
                  </p>

                  <ul className="list-unstyled">
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>No dice palabras sencillas.</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>No responde a su nombre.</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        Presenta un uso limitado o disminuido del contacto
                        ocular.
                      </span>
                    </li>

                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        Ausencia de balbuceo social/comunicativo como si
                        conversara con el adulto.
                      </span>
                    </li>

                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>Ausencia de imitación espontánea. </span>
                    </li>

                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        No señala para “pedir algo” (protoimperativo).
                      </span>
                    </li>

                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>No mira hacia donde otros señalan.</span>
                    </li>

                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>No enseña o muestra objetos.</span>
                    </li>

                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        Puede manifestar una respuesta inusual ante estímulos
                        auditivos.
                      </span>
                    </li>

                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        Falta de interés en juegos interactivos simples como las
                        cosquillas o similares.
                      </span>
                    </li>
                  </ul>

                  <p>
                    <strong className="mb-0 font-weight-bold">
                      HACIA LOS 24 MESES DE EDAD
                    </strong>
                  </p>

                  <ul className="list-unstyled">
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        No dice frases de dos o más palabras, que sean
                        espontáneas y no sólo repeticiones de lo que ha
                        escuchado a los demás.
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        Tiene dificultades para mantener el contacto ocular
                        cuando se le habla, y no sigue objetos con la mirada.
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        No se implica en juegos compartidos, y parece no
                        disfrutar de la relación compartida con otras personas.
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        Uso estereotipado o poco funcional de juguetes y objetos
                        cotidianos.
                      </span>
                    </li>
                  </ul>

                  <p>
                    También se recomienda una valoración exhaustiva del
                    desarrollo si a cualquier edad parece que el niño o la niña
                    pierden habilidades que ya había conseguido, como el
                    balbuceo o las primeras palabras.
                  </p>
                  <p>
                    En cualquier caso, estos factores de forma aislada no
                    implican que el niño o la niña tenga TEA. Son señales que
                    deben alertar a las familias y a los profesionales de
                    atención al infante del riesgo de que se presente un
                    trastorno de este tipo en el desarrollo, y favorecer la
                    derivación a una evaluación especializada que lo confirme o
                    descarte.
                  </p>
                </div>
              ) : null}

              {props.url === "comorbilidad" ? (
                <div className="h-entry">
                  <p>
                    La comorbilidad, también conocida como "morbilidad
                    asociada", es un término utilizado para describir dos o más
                    trastornos o condiciones que ocurren en la misma persona.
                    Pueden ocurrir al mismo tiempo o uno después del otro. La
                    comorbilidad también implica que hay una interacción entre
                    las dos enfermedades que puede agravar la evolución de
                    ambas.
                  </p>
                  <p>
                    Numerosos estudios han acordado que los síntomas y
                    comportamientos asociados a los TEA se consideran
                    potenciales indicadores de presencia de comorbilidades como
                    diagnóstico adicional. Algunos individuos diagnosticados con
                    TEA pueden presentan otros trastornos del neurodesarrollo o
                    psicológicos tales como Trastorno por Déficit de Atención e
                    Hiperactividad, Discapacidad Intelectual, Trastorno de
                    Ansiedad, Trastorno Obsesivo Compulsivo, otras alteraciones
                    del humor, etc. Se considera que las comorbilidades serían
                    una de las principales causas de mayor severidad debido al
                    efecto acumulativo de tener más de un trastorno.
                  </p>
                  <p>
                    Entonces esto significa que un gran porcentaje de personas
                    con TEA, además tienen un diagnóstico asociado.
                  </p>
                </div>
              ) : null}

              {props.url === "atencion-temprana" ? (
                <div className="h-entry">
                  <p>
                    Uno de los principales requerimientos de las familias de
                    personas con TEA es garantizar el acceso a la atención
                    temprana personalizada hasta los seis años a todos los niños
                    y niñas que reciban el diagnóstico de TEA, con independencia
                    de su lugar de residencia, por parte de equipos
                    interdisciplinares formados en modelos de intervención
                    basados en la evidencia científica.
                  </p>
                  <p>
                    En este sentido, es muy necesario el desarrollo de una red
                    variada y suficiente de centros especializados en la
                    atención a menores con TEA. También el impulso a la
                    coordinación de los recursos de los 2 principales sistemas
                    implicados (Educación y Salud), dotándoles de medios
                    adecuados y suficientes para la intervención e inclusión.
                  </p>
                </div>
              ) : null}

              {props.url === "accesibilidad" ? (
                <div className="h-entry">
                  <h2 className="font-size-regular">
                    <a href={linkHref}>¿QUÉ ES LA ACCESIBILIDAD UNIVERSAL?</a>
                  </h2>
                  <p>
                    La accesibilidad universal es una cualidad de los entornos
                    que ayuda a que todas las personas comprendan, utilicen,
                    participen y disfruten de los entornos con autonomía y
                    comodidad.
                  </p>
                  <p>
                    Existen tres tipos de accesibilidad dentro de la
                    accesibilidad universal:
                  </p>
                  <ul className="list-unstyled">
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        <strong>Accesibilidad física: </strong> los entornos que
                        son accesibles de forma física permiten que las personas
                        con diferentes necesidades de movilidad puedan
                        utilizarlos.
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        <strong>Accesibilidad sensorial: </strong>  los entornos
                        que son accesibles de forma sensorial permiten que las
                        personas con diferentes necesidades de visión o audición
                        puedan utilizarlos.
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        <strong>Accesibilidad cognitiva: </strong> los entornos
                        que son accesibles de forma cognitiva permiten que las
                        personas con diferentes necesidades de comprensión
                        puedan utilizarlos.  La accesibilidad cognitiva 
                        contempla las características y capacidades de las
                        personas con TEA y les ayuda a comprender, utilizar,
                        participar y disfrutar de los entornos con autonomía y
                        comodidad.
                      </span>
                    </li>
                  </ul>
                  <h2 className="font-size-regular">
                    <a href={linkHref}> ¿QUÉ ES LA ACCESIBILIDAD COGNITIVA?</a>
                  </h2>
                  <p>
                    La accesibilidad cognitiva es una cualidad de los entornos,
                    que permite entender la información y orientarse con
                    facilidad en ellos, así mismo permite a todas las personas
                    comunicarse y relacionarse con otras. Beneficia de forma
                    especial a las personas con dificultad para comprender los
                    entornos.
                  </p>
                  <p>
                    Las personas con TEA tienen dificultades cognitivas para
                    comprender y relacionarse en los entornos. Otras personas
                    con dificultades de comprensión pueden ser:
                  </p>
                  <ul className="list-unstyled">
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>personas con discapacidad intelectual</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>personas mayores</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>personas que no saben leer y escribir</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        personas que no dominan los idiomas porque son de otros
                        países.
                      </span>
                    </li>
                  </ul>
                  <h2 className="font-size-regular">
                    <a href={linkHref}> ACCESIBILIDAD COGNITIVA EN LOS ENTORNOS</a>
                  </h2>
                  <p>
                    Un entorno es accesible de forma cognitiva cuando todas las
                    personas pueden comprenderlo y utilizarlo de forma sencilla.
                  </p>
                  <p>
                    Existen estrategias y recursos para que un entorno sea
                    accesible de forma cognitiva. Algunos de ellas son:
                  </p>
                  <ul className="list-unstyled">
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>entornos construidos para todas las personas.</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>sistemas de señalización,</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        diseño para todas las personas de las Tecnologías de la
                        Información y la Comunicación,
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>lectura fácil,</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        apoyos a la comunicación e interacción social.
                      </span>
                    </li>
                  </ul>
                  <h2 className="font-size-regular">
                    <a href={linkHref}>ENTORNOS CONSTRUIDOS PARA TODAS LAS PERSONAS</a>
                  </h2>
                  <p>
                    Un entorno construido para todas las personas ayuda a
                    orientarse con facilidad y a saber qué hacer en cada momento
                    y en cada lugar, ayuda a que las personas estén cómodas y
                    seguras, favoreciendo la autonomía, y ayuda a disminuir la
                    estimulación sensorial.
                  </p>
                  <p>
                    Los elementos arquitectónicos o gráficos ayudan a que un
                    entorno esté construido para todas las personas. Algunos
                    elementos arquitectónicos que ayudan a todas las personas
                    son:
                  </p>
                  <ul className="list-unstyled">
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        identificación de los puntos de información, entrada y
                        salida,
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>identificación de los ascensores</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>áreas de espera,</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        diferenciación de las zonas de acceso público y privado,
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        organización de los espacios en función de sus usos,
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>insonorización,</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>uso de luz natural.</span>
                    </li>
                  </ul>
                  <p>
                    Algunos elementos gráficos que ayudan a todas las personas
                    son:
                  </p>
                  <ul className="list-unstyled">
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        unificación de los nombres de todas las áreas,
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        inclusión de los mapas con información de “Usted está
                        aquí”,
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        utilización de los colores para la organización de las
                        áreas,
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>numeración de las plantas.</span>
                    </li>
                  </ul>
                  <p>
                    En un entorno construido para todas las personas, las
                    personas con TEA pueden:
                  </p>
                  <ul className="list-unstyled">
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>orientarse y moverse con facilidad,</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        saber dónde se encuentran y cómo llegar a otros lugares,
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        saber qué hacer en cada lugar y en cada momento,
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        sentirse cómodas con los niveles de ruidos, olores o
                        luces.
                      </span>
                    </li>
                  </ul>
                  <h2 className="font-size-regular">
                    <a href={linkHref}>SISTEMAS DE SEÑALIZACIÓN</a>
                  </h2>
                  <p>
                    Los sistemas de señalización son sistemas de señales para
                    que todas las personas sepan qué hacer en cada entorno,
                    tienen que ser claros y sencillos y deben cumplir varias
                    funciones. Algunas de ellas son:
                  </p>
                  <ul className="list-unstyled">
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        las señales tienen que favorecer el desplazamiento
                        seguro y autónomo,
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        las señales tienen que apoyar la localización en el
                        espacio y el tiempo,
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        las señales tienen que facilitar la realización de las
                        acciones previstas en cada entorno.
                      </span>
                    </li>
                  </ul>
                  <p>
                    Las señales pueden ser de tipo visual, acústico o textual.
                    Las señales visuales pueden ser imágenes reales o
                    pictogramas, estos deben ser sencillos y fáciles de
                    comprender y deben ser conocidos por el mayor número de
                    personas posible.
                  </p>
                  <p>
                    En un entorno con sistemas de señalización para todas las
                    personas, las personas con TEA pueden:
                  </p>
                  <ul className="list-unstyled">
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        comprender la información de imágenes, pictogramas,
                        avisos y anuncios,
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>seguir direcciones o indicaciones,</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>desplazarse con autonomía y seguridad,</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>saber qué se espera en cada lugar.</span>
                    </li>
                  </ul>
                  <h2 className="font-size-regular">
                    <a href={linkHref}> DISEÑO PARA TODAS LAS PERSONAS DE LAS TIC</a>
                  </h2>
                  <p>
                    Llamamos TIC a las Tecnologías de la Información y la
                    Comunicación. El diseño para todas las personas favorece que
                    las TIC sean fáciles de usar por todos, incluidas las
                    personas con TEA. El desarrollo de este tipo de páginas web,
                    software y hardware sirve para comprender y utilizar los
                    recursos con facilidad.
                  </p>
                  <p>
                    Existen principios que favorecen la accesibilidad de las
                    TIC. Algunos de ellos son:
                  </p>
                  <ul className="list-unstyled">
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        los recursos deben ser útiles para todas las personas,
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        los recursos deben ser flexibles y adaptables,
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>los recursos deben ser simples e intuitivos,</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>el contenido deber ser fácil de entender,</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        los recursos deben minimizar los riesgos y los errores,
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>los recursos deben ser fáciles de usar.</span>
                    </li>
                  </ul>
                  <p>
                    El diseño de las TIC para todas las personas tiene ventajas
                    para las personas con TEA. Algunas de ellas son:
                  </p>
                  <ul className="list-unstyled">
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>son predecibles,</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>son flexibles y adaptables,</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>son motivantes,</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        pueden incluir información de diferentes sentidos.
                      </span>
                    </li>
                  </ul>
                  <p>
                    El diseño de las TIC para todas las personas, ayuda a las
                    personas con TEA a:
                  </p>
                  <ul className="list-unstyled">
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>favorecer el aprendizaje,</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>buscar información,</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>retener y manejar la información,</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>comprender el contenido con facilidad,</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        comunicarse y relacionarse con otras personas,
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        realizar tareas de la vida diaria con autonomía.
                      </span>
                    </li>
                  </ul>
                  <h2 className="font-size-regular">
                    <a href={linkHref}> LECTURA FÁCIL</a>
                  </h2>
                  <p>
                    La Lectura Fácil es una técnica de redacción y publicación
                    de textos que hace accesibles los contenidos a personas con
                    dificultades de comprensión lectora. Para elaborar un
                    documento en Lectura Fácil se deben tener en cuenta pautas y
                    recomendaciones. Algunas de ellas son:
                  </p>
                  <ul className="list-unstyled">
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        el contenido del texto debe estar redactado en frases
                        sencillas,
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        el contenido del texto debe estar organizado y tener
                        cohesión y coherencia,
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        el lenguaje utilizado deber ser claro y sencillo,
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        la presentación del texto debe tener una estructura
                        clara y sencilla,
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        las imágenes deben ayudar a la comprensión del texto.
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        Existe normativa experimental sobre las pautas y
                        recomendaciones para la elaboración de documentos en
                        Lectura Fácil.
                      </span>
                    </li>
                  </ul>
                  <p>
                    La adaptación de textos a Lectura Fácil ayuda a las personas
                    con TEA a:
                  </p>
                  <ul className="list-unstyled">
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>estar informadas,</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>participar en la sociedad,</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>disfrutar de la cultura,</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>ejercer sus derechos,</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        comunicarse y relacionarse con otras personas.
                      </span>
                    </li>
                  </ul>
                  <h2 className="font-size-regular">
                    <a href={linkHref}>
                      APOYOS A LA COMUNICACIÓN E INTERACCIÓN SOCIAL
                    </a>
                  </h2>
                  <p>
                    Algunas personas tienen dificultad para comunicarse con
                    otras personas y comprender la información del entorno
                    social. Las personas pueden utilizar recursos que sirven de
                    apoyo a la comunicación. Algunos de ellos son:
                  </p>
                  <ul className="list-unstyled">
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>símbolos,</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>gestos,</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>signos,</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>libros de comunicación,</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        herramientas tecnológicas como comunicadores o
                        dispositivos electrónicos.
                      </span>
                    </li>
                  </ul>
                  <p>
                    A algunos de estos recursos se les llama sistemas
                    alternativos y aumentativos de comunicación. Los sistemas
                    alternativos de comunicación sustituyen al lenguaje oral,
                    apoyan al lenguaje oral. Las personas también son apoyos
                    fundamentales para hacer más accesible la comunicación y la
                    interacción social.
                  </p>
                  <p>
                    Los apoyos a la comunicación e interacción social ayudan a
                    las personas con TEA a:
                  </p>

                  <ul className="list-unstyled">
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        desarrollar sus habilidades y capacidades personales,
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>
                        comprender el lenguaje y las situaciones sociales,
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>establecer y mantener relaciones personales,</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>expresar sus deseos y necesidades,</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>participar en las decisiones sobre su vida,</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>participar en la sociedad,</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="icon-check2 text-primary h3 mr-2" />
                      <span>tener una vida independiente.</span>
                    </li>
                  </ul>
                </div>
              ) : null}

              {props.url === "participacion-y-derechos" ? (
                <div className="h-entry">
                  <h2 className="font-size-regular">
                    <a href={linkHref}>PARTICIPACIÓN</a>
                  </h2>
                  <p>
                    Las personas con TEA y sus familias reclaman impulsar el
                    acceso, participación ciudadana y disfrute en la sociedad,
                    favoreciendo el conocimiento y uso de los recursos
                    comunitarios y potenciando el desarrollo de las prestaciones
                    y servicios dirigidos a promover su autonomía personal. 
                  </p>
                  <p>
                    Por ello, es fundamental el desarrollo de medidas orientadas
                    a combatir la exclusión social de las personas con TEA y sus
                    familias, así como incorporar los servicios de apoyo al ocio
                    y tiempo libre del colectivo, como recursos clave para
                    promover su participación en la comunidad.
                  </p>
                  <p>
                    También es necesario crear mecanismos que garanticen la
                    participación de las personas con TEA en los procesos de
                    toma de decisiones, a nivel autonómico y nacional.
                  </p>
                  <h2 className="font-size-regular">
                    <a href={linkHref}>DERECHOS</a>
                  </h2>
                </div>
              ) : null}

              {props.url === "educacion" ? (
                <div className="h-entry">
                  <p>
                    Las personas con TEA tienen una serie de necesidades
                    específicas en las distintas etapas educativas, incluyendo
                    las previas a la escolarización obligatoria. Kolob Autismo
                    Perú apuesta por la inclusión educativa de las personas
                    diagnosticadas con TEA, pero esta inclusión solo será
                    posible si se garantiza tanto la formación y capacitación de
                    los profesionales educativos en la especificidad del TEA
                    como los apoyos y recursos específicos que permitan promover
                    una educación especializada, inclusiva y de calidad para el
                    alumnado con TEA.
                  </p>
                  <p>
                    En este sentido, es imprescindible avanzar en el desarrollo
                    de la legislación educativa, así como flexibilizar e innovar
                    en la oferta educativa existente, de manera que ésta
                    responda y se ajuste a las necesidades individuales de cada
                    persona con TEA y maximice el éxito educativo, el desarrollo
                    personal y la inclusión social.
                  </p>
                  <p>
                    Otro aspecto a tener en cuenta en el ámbito de la educación
                    es la prevención de las situaciones de abuso y acoso en el
                    contexto educativo, para lo que resulta imprescindible que,
                    desde las aulas, se fomente y trasmita el respeto a la
                    diversidad, para concienciar de que “todos somos
                    diferentes”.
                  </p>
                </div>
              ) : null}

              {props.url === "intervencion" ? (
                <div className="h-entry">
                  <p>
                    Para garantizar la calidad, la equidad y la sostenibilidad
                    de los servicios es preciso fomentar el acceso igualitario
                    de las personas con TEA en todo el territorio peruano, tanto
                    a los recursos como a los bienes y servicios especializados,
                    mediante medidas que contemplen variables como el lugar de
                    residencia, prestando especial atención al ámbito rural y
                    realizando los estudios de necesidades dirigidos a conocer
                    su situación y a diseñar estrategias que den respuesta a las
                    mismas.
                  </p>
                  <p>
                    También es imprescindible una financiación adecuada y
                    estable que garantice la viabilidad y sostenibilidad de
                    servicios y apoyos, así como la creación e implantación de
                    modelos de calidad orientados a la mejora de sistemas,
                    programas, metodologías y recursos de apoyo a las personas
                    con TEA.
                  </p>
                </div>
              ) : null}

              {props.url === "familias" ? (
                <div className="h-entry">
                  <p>
                    Las familias de las personas con TEA necesitan que se les
                    faciliten los apoyos especializados necesarios que les
                    permitan disfrutar de una calidad de vida satisfactoria.
                    Para ello, se brinda orientación dirigida a proporcionar
                    información, asesoramiento y apoyo emocional a las familias.
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
