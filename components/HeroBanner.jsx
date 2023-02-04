import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div className='hero-banner-sec'> 

        <div className='hero-banner-vid'>
          <video className='vid-size' src={heroBanner.bannerDisplay} autoPlay loop muted />
        </div>

        <div className="hero-banner-text">

          <div className='hero-banner-text-sec'>
            <h1>{heroBanner.product}</h1>
            <p>{heroBanner.desc}</p>
            <div className='largetext'>{heroBanner.largeText}</div>
          </div>
          <Link href={`/`}>
              <button type="button">{heroBanner.buttonText}</button>
          </Link>
        
        </div>
      </div>
    </div>
  )
}

export default HeroBanner;