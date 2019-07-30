import * as React from 'react';
import '../css/testimony';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

var Counter = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="container py-4 text-center">
      <h3 className="text-dark">Partners Recommend</h3>
      <h4 className="text-dark">XXXXXXXXXXXXXXXX</h4>
      <div className="row justify-content-center mt-4 quotes">
        <Slider {...settings}>
          { 
            partners.map(partner => (<div className="bubble" key="{partner.name}">
              <blockquote>{partner.quotation}</blockquote>
              <div></div>
              <cite>{partner.name}</cite>
            </div>))
          }
        </Slider>
      </div>
    </div>
  );
};

(window.synaPortals || (window.synaPortals = {})).counter = {
  component: Counter,
  container: '#counter [data-portal]',
};
