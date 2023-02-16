import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const FooterBanner = ({ footerBanner }) => {
  return (
    <div className="footer-banner-container">
      <div className='footer-banner-sec'> 
        <div className='hero-banner-vid'>
          <video className='vid-size' src={footerBanner.bannerDisplay} autoPlay loop muted />
        </div>
        
        <div className='footer-banner-text-sec'>
          <h1 className='footer-banner-text'>{footerBanner.desc}</h1>
          <p className='promo'>{footerBanner.largeText}</p>
        </div>

      </div>
    </div>
  )
}

export default FooterBanner;