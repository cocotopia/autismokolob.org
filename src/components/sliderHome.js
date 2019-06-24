import React from 'react';
import Slider1 from '../images/slider/hero_bg_1.jpg';
import Slider2 from '../images/slider/hero_bg_2.jpg';
import Slider3 from '../images/slider/hero_bg_3.jpg';
import Slider4 from '../images/slider/hero_bg_4.jpg';
import Slider5 from '../images/slider/hero_bg_5.jpg';
// import Identity from '../libs/identity';
// window.Identity = Identity;
// console.log(window.Identity);

export default class SliderHome extends React.Component {
  componentDidMount() {
    const $ = window.$;
    const siteCarousel = function() {
      $('.slide-one-item').owlCarousel({
        center: false,
        items: 1,
        loop: true,
        stagePadding: 0,
        margin: 0,
        autoplay: true,
        pauseOnHover: true,
        nav: true,
        autoHeight: true,
        navText: [
          '<span class="icon-keyboard_arrow_left">',
          '<span class="icon-keyboard_arrow_right">',
        ],
      });
    };
    siteCarousel();

    var siteMagnificPopup = function() {
      $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
      });
    };
    siteMagnificPopup();
  }

  render() {
    return (
      <div className="slide-one-item home-slider owl-carousel">
        <div
          className="site-blocks-cover overlay"
          style={{ backgroundImage: 'url(' + Slider1 + ')' }}
          data-aos="fade"
          data-stellar-background-ratio="1"
        >
          <div className="container col-md-10">
            <div className="row align-items-center justify-content-center text-center">
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
                <h1 className="text-white font-weight-light">DETECCIÓN Y DIAGNÓSTICO</h1>
                <p className="text-slider">Basado en protocolos Internacionales</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="site-blocks-cover overlay"
          style={{ backgroundImage: 'url(' + Slider2 + ')' }}
          data-aos="fade"
          data-stellar-background-ratio="1"
        >
          <div className="container col-md-10">
            <div className="row align-items-center justify-content-end text-center">
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
                <h1 className="text-white font-weight-light">TICS PARA AUTISMO</h1>
                <p className="text-slider">
                  Intervención con Tecnologías de la Información y Comunicación
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="site-blocks-cover overlay"
          style={{ backgroundImage: 'url(' + Slider3 + ')' }}
          data-aos="fade"
          data-stellar-background-ratio="1"
        >
          <div className="container col-md-10">
            <div className="row align-items-center justify-content-end text-center">
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
                <h1 className="text-white font-weight-light">INTERVENCIÓN TEMPRANA</h1>
                <p className="text-slider">Basada en modelos con evidencia científica</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="site-blocks-cover overlay"
          style={{ backgroundImage: 'url(' + Slider4 + ')' }}
          data-aos="fade"
          data-stellar-background-ratio="1"
        >
          <div className="container col-md-10">
            <div className="row align-items-center justify-content-start text-center">
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
                <h1 className="text-white font-weight-light">
                  CONVENIO DE COOPERACIÓN INSTITUCIONAL
                </h1>
                <p className="text-slider">
                  Entre Kolob Autismo Perú y ALEPH TEA de Madrid – España.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="site-blocks-cover overlay"
          style={{ backgroundImage: 'url(' + Slider5 + ')' }}
          data-aos="fade"
          data-stellar-background-ratio="1"
        >
          <div className="container col-md-10">
            <div className="row align-items-center justify-content-left text-center">
              <div className="col-md-5" data-aos="fade-up" data-aos-delay="400">
                <h1 className="text-white font-weight-light">CALIDAD DE VIDA</h1>
                <p className="text-slider">
                  Es nuestro objetivo principal para las personas con TEA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
