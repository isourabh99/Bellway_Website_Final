
import React from 'react';
import './HomeSlider.css';
import { Link } from 'react-router-dom';
import image1 from './assets/Shree Jyotish.png';
import image2 from './assets/Brobo.png';
import image3 from './assets/ONEAPP PLUS.png';
import image4 from './assets/HAZE.png';
import image5 from './assets/Trulymatchslider.png';
import image6 from './assets/DCart.png';
import image7 from './assets/DesiGrow.png';
import image8 from './assets/Online store web.png';
import image9 from './assets/Coupon Counter.png';
import image10 from './assets/Go Connect.png';
import image11 from './assets/LLN.png';
import image12 from './assets/Mazaa Munch.png';
import image13 from './assets/YML MART.png';
import image14 from './assets/cashbackcouponslider.png';

// import image14 from "./assets/"
const images = [


    { src: image1, route: '/shri-jyotish' },
    { src: image2, route: '/brobo' },
    // { src: image3, route: '/oneapp-plus' },
    { src: image4, route: '/oneapp-plus' },
    { src: image5, route: '/truely-match' },
    { src: image6, route: '/dcart' },
    // { src: image7, route: '/desigro' },
    { src: image8, route: '/online-store-web' },
    { src: image9, route: '/coupon-counter' },
    { src: image10, route: '/goconnect' },
    { src: image11, route: '/lln' },
    { src: image12, route: '/maza-munch' },
    { src: image13, route: '/yml-mart' },
    { src: image14, route: '/Cashbackcoupon' }

  

];

const HomeSlider = () => {
    return (
      <div className="mt-2">
        <div className="text-center">
          <h1 className="recent-work">See Our Creations</h1>
        </div>
        <div className="slider-container overflow-hidden">
          <div className="slider mt-5">
            {images.concat(images).map((image, index) => (
              <div key={index} className="image-wrapper">
                <Link to={image.route}>
                  <img
                    loading="lazy"
                    src={image.src}
                    alt={`Slide ${index + 1}`}
                    className="image"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default HomeSlider;
