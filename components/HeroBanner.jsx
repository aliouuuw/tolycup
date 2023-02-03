import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div className='banner-sec'> 

        <div className='ban-img'>
          <video className='ban-img' src={heroBanner.bannerDisplay} autoPlay loop muted />
        </div>

        <div>
          <div className="hero-banner-text">
            <h1>{heroBanner.largeText}</h1>
            <p>{heroBanner.desc}</p>

            <div className='hero-banner-button'>
              <Link href={`/product/${heroBanner.product}`}>
                <button type="button">{heroBanner.buttonText}</button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HeroBanner;