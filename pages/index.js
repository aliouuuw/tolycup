import React from 'react';

import { client } from '../lib/client';
import { Product, HeroBanner, FooterBanner } from '../components';

const Home = ({ products, bannerData }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
    <FooterBanner footerBanner={bannerData.length && bannerData[0]}  />
    <div id='catalogue' className="products-heading">
      <h2>Timeless Treats</h2>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"] { largeText,desc,product,buttonText,"bannerDisplay": file.asset->url, "bannerImg": image.asset->url }';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;