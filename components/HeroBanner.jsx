import React from 'react';
import {Link} from 'react-scroll';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div className='hero-banner-sec-text'> 
          <div className='hero-banner-text'>
            <h1>{heroBanner.product}</h1>
            <div className='shopnow'>
              <Link to="catalogue" spy={true} smooth={true} offset={-70} duration={500}>
                <button type='button'>Shop now</button>
              </Link>
            </div>
          </div> 
      </div>
      <div className='hero-banner-sec-im'>
        <img className='hero-banner-image' src={heroBanner.bannerImg} alt="hero banner image" />
      </div>

    </div>
  )
}

export default HeroBanner;