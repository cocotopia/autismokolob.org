import React from 'react';

export default function VideoHome() {
  return (
    <div
      className="site-blocks-cover overlay inner-page-cover"
      style={{
        backgroundImage: 'url(http://i3.ytimg.com/vi/W3oxhPkBcRc/maxresdefault.jpg)',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-md-7" data-aos="fade-up" data-aos-delay="400">
            <a
              href="https://www.youtube.com/watch?v=W3oxhPkBcRc?autoplay=1&rel=0"
              className="play-single-big mb-4 d-inline-block popup-youtube"
            >
              <span className="icon-play" />
            </a>
            <h2 className="text-white font-weight-light mb-5 h1">AUTISMO RESPETO!</h2>
            <p style={{ color: 'white' }}>
              En el día de la concienciación por el Autismo, algunos de nuestros jóvenes envían un
              mensaje a los profesionales, padres y gobernantes!
            </p>
            <br />
            <br />
            <a
              className="btn btn-labeled btn-danger btn-lg  text-white"
              href="https://www.youtube.com/channel/UCkcK9EQez-xZPNP3EgjCiAA"
              // target="_blank"
              rel="noopener"
            >
              <span className="btn-label">
                <i className="icon-youtube" />
              </span>{' '}
              Visita Nuestro Canal
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
