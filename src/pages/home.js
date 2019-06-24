import React from 'react';
import Header from '../components/header';
import SliderHome from '../components/sliderHome';
import VideoHome from '../components/videoHome';
import NoticiasHome from '../components/noticiasHome';
import Footer from '../components/footer';
import FooterContact from '../components/footerContact';

export default function Home() {
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

      <SliderHome />

      <NoticiasHome />

      <VideoHome />

      <FooterContact />

      <Footer />
    </div>
  );
}
