import React from 'react';
import {Link} from 'react-scroll';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  const imageUrl = heroBanner.bannerImg;
  return (
    <div className="hero-banner-container" style={{backgroundImage:`url(${imageUrl})`}}>
      <div className='hero-banner-sec'> 
          <div className='hero-banner-text-sec'>
            <h1>{heroBanner.product}</h1>
            <div className='shopnow'>
              <Link to="catalogue" spy={true} smooth={true} offset={-70} duration={500}>
                <button type='button'>Shop now</button>
              </Link>
            </div>
          </div> 
      </div>
    </div>
  )
}

export default HeroBanner;