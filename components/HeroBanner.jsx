import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  const imageUrl = heroBanner.bannerImg;
  return (
    <div className="hero-banner-container" style={{backgroundImage:`url(${imageUrl})`}}>
      <div className='hero-banner-sec'> 

        {/*<div className='hero-banner-vid'>
          <video className='vid-size' src={heroBanner.bannerDisplay} autoPlay loop muted />
          <img src={imageUrl} alt="three cupcakes" />
          <video className='vid-size' src={heroBanner.bannerDisplay} autoPlay loop muted />
        </div>*/}


          <div className='hero-banner-text-sec'>
            <h1>{heroBanner.product}</h1>
            <div>Shop now</div>
          </div>
        
        
      </div>
    </div>
  )
}

export default HeroBanner;