import React from 'react';

const BasicBanner = ({ basicBanner }) => {
  return (
      <div className="basic-banner-container">
          <div className='footer-banner-sec'>
              <div className='basic-banner-text-sec'>
                  <h1 className='basic-banner-header'>{basicBanner.product}</h1>
                  <p className='welcome'>{basicBanner.largeText}</p>
                  <p className='owner'>{basicBanner.buttonText}</p>
                  <p className='story'>{basicBanner.desc}</p>
              </div>


          </div>
      </div>
  )
}

export default BasicBanner;