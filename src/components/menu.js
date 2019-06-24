import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Menu() {
  const linkHref = '#';
  return (
    <nav className="site-navigation position-relative text-right text-lg-center" role="navigation">
      <ul className="site-menu js-clone-nav mx-auto d-none d-lg-block">
        {/*<li>
          <NavLink to="/nosotros" activeClassName="active">
            Nosotros
          </NavLink>
        </li>*/}

        <li className="has-children">
          <a href={linkHref}>Nosotros</a>
          <ul className="dropdown">
            <li>
              <Link to="/nosotros/historia">Historia</Link>
            </li>
            <li>
              <Link to="/nosotros/vision">Visión</Link>
            </li>
            <li>
              <Link to="/nosotros/mision">Misión</Link>
            </li>
            <li>
              <Link to="/nosotros/nuestro-equipo">Nuestro Equipo</Link>
            </li>
          </ul>
        </li>

        <li className="has-children">
          <a href={linkHref}>Sobre Autismo</a>
          <ul className="dropdown">
            <li>
              <Link to="/autismo/definicion-transtorno-espectro-autista">
                Definición Trastorno Espectro Autista
              </Link>
            </li>
            <li>
              <Link to="/autismo/etiologia">Etiología</Link>
            </li>
            <li>
              <Link to="/autismo/deteccion-y-diagnostico">Detección y Diagnóstico</Link>
            </li>
            <li>
              <Link to="/autismo/comorbilidad">Comorbilidad</Link>
            </li>
            <li>
              <Link to="/autismo/atencion-temprana">Atención Temprana</Link>
            </li>
            <li>
              <Link to="/autismo/accesibilidad">Accesibilidad</Link>
            </li>
            <li>
              <Link to="/autismo/participacion-y-derechos">Participación y Derechos</Link>
            </li>
            <li>
              <Link to="/autismo/educacion">Educación</Link>
            </li>
            <li>
              <Link to="/autismo/intervencion">Intervención</Link>
            </li>
            <li>
              <Link to="/autismo/familias">Familias</Link>
            </li>
          </ul>
        </li>

        <li className="has-children">
          <a href={linkHref}>Servicios</a>
          <ul className="dropdown">
            <li>
              <Link to="/servicios/orientacion">Orientación</Link>
            </li>
            <li>
              <Link to="/servicios/deteccion-y-diagnostico">Detección y Diagnóstico</Link>
            </li>
            <li>
              <Link to="/servicios/atencion-temprana">Atención Temprana</Link>
            </li>
            <li>
              <Link to="/servicios/saicon">Saicon</Link>
            </li>
            <li>
              <Link to="/servicios/intervencion-terapeutica-individual">
                Intervención Terapéutica Individual
              </Link>
            </li>
            <li>
              <Link to="/servicios/grupos-de-habilidades-sociales">
                Grupos de Habilidades Sociales
              </Link>
            </li>
            <li>
              <Link to="/servicios/aulas-terapeuticas-pedagogicas">
                Aulas Terapéuticas Pedagógicas
              </Link>
            </li>
            <li>
              <Link to="/servicios/apoyo-en-escuela">Apoyo en escuela</Link>
            </li>
            <li>
              <Link to="/servicios/ocio-y-tiempo-libre">Ocio y tiempo libre</Link>
            </li>
            <li>
              <Link to="/servicios/capacitaciones">Capacitaciones</Link>
            </li>
            <li>
              <Link to="/servicios/pasantias">Pasantías</Link>
            </li>
            <li>
              <Link to="/servicios/cuidador-de-personas-con-tea">Cuidador de personas con TEA</Link>
            </li>
            <li>
              <Link to="/servicios/terapia-a-familias">Terapia a familias</Link>
            </li>
          </ul>
        </li>

        <li className="has-children">
          <a href={linkHref}>Colabora</a>
          <ul className="dropdown">
            <li>
              <Link to="/colabora/donaciones">Donaciones</Link>
            </li>
            <li>
              <Link to="/colabora/contrata-a-alguien-con-autismo">
                Contrata a alguien con autismo
              </Link>
            </li>
            <li>
              <Link to="/colabora/servicios-con-descuento">Servicios con descuento</Link>
            </li>
            <li>
              <Link to="/colabora/practicas-pre-profesionales">Prácticas PRE Profesionales</Link>
            </li>
            <li>
              <Link to="/colabora/voluntariado">Voluntariado</Link>
            </li>
            <li>
              <Link to="/colabora/estudios-para-personas-con-tea">
                Estudios para personas con TEA
              </Link>
            </li>
          </ul>
        </li>

        <li className="has-children">
          <a href={linkHref}>Filiales</a>
          <ul className="dropdown">
            <li>
              <Link to="/filiales/tacna">Tacna</Link>
            </li>
            <li>
              <Link to="/filiales/ilo">Ilo</Link>
            </li>
            <li>
              <Link to="/filiales/arequipa">Arequipa</Link>
            </li>
          </ul>
        </li>

        <li className="has-children">
          <a href={linkHref}>Investigación</a>
          <ul className="dropdown">
            <li>
              <Link to="/investigacion/articulos-cientificos">Artículos científicos</Link>
            </li>
            <li>
              <Link to="/investigacion/fuentes-de-informacion">Fuentes de información</Link>
            </li>
            <li>
              <Link to="/investigacion/investigaciones-kolob">Investigaciones KOLOB</Link>
            </li>
            <li>
              <Link to="/investigacion/proyectos-de-investigacion">Proyectos de Investigación</Link>
            </li>
            <li>
              <Link to="/investigacion/investiga-con-nosotros">Investiga con Nosotros</Link>
            </li>
          </ul>
        </li>

        {/* <li>
          <NavLink to="/filiales" activeClassName="active">
            Filiales
          </NavLink>
       </li>*/}
        <li>
          <NavLink to="/transparencia" activeClassName="active">
            Transparencia
          </NavLink>
        </li>
        {/*<li>
          <NavLink to="/contacto" activeClassName="active">
            Contacto
          </NavLink>
        </li>*/}
      </ul>
    </nav>
  );
}
