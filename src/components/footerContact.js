import React from "react";
import { Link } from "react-router-dom";

export default function FooterContact(props) {
  return (
    <div className="site-section  bg-light">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <h2 className="mb-5 text-black">
              ¿Deseas saber más y contactarte con nosotros?
            </h2>
            <p className="mb-0">
              <Link
                to="/contacto"
                className="btn btn-primary py-3 px-5 text-white"
              >
                Contáctanos
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
