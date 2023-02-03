import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <img src={urlFor(heroBanner.image)} alt="animation" className="hero-banner-image" />
      <div className="hero-banner-text">
        <p>{heroBanner.desc}</p>
        <h1>{heroBanner.largeText}</h1>

        <div className='hero-banner-button'>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner;