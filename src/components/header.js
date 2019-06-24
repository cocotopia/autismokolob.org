import React from 'react';
import LogoKolob from '../images/logo_kolob.png';
import LogoEducatea from '../images/logo_educatea.jpg';
import Menu from './menu';
import { Link } from 'react-router-dom';

export default function header(props) {
  const linkHref = '#';
  return (
    <div>
      <div className="line-top" />
      <header className="site-navbar py-1" role="banner">
        <div className="container new-width">
          <div className="row align-items-center">
            <div className="col-6 col-xl-2">
              <h1 className="mb-0">
                <Link to="/" className="text-black h2 mb-0">
                  <img src={LogoKolob} alt="Logo Kolob" />
                </Link>
              </h1>
            </div>

            <div className="col-10 col-md-8 d-none d-xl-block" style={{ padding: '0px' }}>
              <Menu />
            </div>

            <div className="col-6 col-xl-2 text-right">
              <div className="d-none d-xl-inline-block">
                <a
                  href="https://educateaperu.org/"
                  //target="_blank"
                  rel="noopener"
                  className="text-black h2 mb-0"
                >
                  <img src={LogoEducatea} alt="" />
                </a>
              </div>

              <div
                className="d-inline-block d-xl-none ml-md-0 mr-auto py-3"
                style={{ position: 'relative', top: '3px' }}
              >
                <a href={linkHref} className="site-menu-toggle js-menu-toggle text-black">
                  <span className="icon-menu h3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
