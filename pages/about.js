import React from 'react';

import { client } from '../lib/client';
import { BasicBanner } from '@/components';

const about = ({bannerData}) => {
  return (
    <div>
      <BasicBanner basicBanner={bannerData}/>
    </div>
  )
}

export default about

export const getServerSideProps = async () => {
  
    const bannerQuery = '*[_type == "banner"][1] { largeText,desc,product,buttonText, "bannerImg": image.asset->url }';
    const bannerData = await client.fetch(bannerQuery);
  
    return {
      props: { bannerData }
    }
  }