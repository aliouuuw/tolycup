import React from 'react';

import { client } from '../lib/client';
import { Product, HeroBanner, FooterBanner } from '../components';

const Home = ({ smallproducts, largeproducts, bannerData }) => {
  return (
  <div>
    <HeroBanner heroBanner={bannerData}  />
    <FooterBanner footerBanner={bannerData}  />
    <div id='catalogue' className="products-heading">
      <h2>Timeless Treats</h2>
    </div>

    <div className="products-title">
      <p>Boxes of 4</p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3">
      {smallproducts?.map((product) => <Product key={product._id} product={product} />)}
    </div>
    
    <div className="products-title">
      <p>Boxes of 6 - L</p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3">
      {largeproducts?.map((product) => <Product key={product._id} product={product} />)}
    </div>
  </div>
  )
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"][large==false]';
  const smallproducts = await client.fetch(query);

  const query1 = '*[_type == "product"][large==true]';
  const largeproducts = await client.fetch(query1);

  const bannerQuery = '*[_type == "banner"][0] { largeText,desc,product,buttonText,"bannerDisplay": file.asset->url, "bannerImg": image.asset->url }';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { smallproducts, largeproducts, bannerData }
  }
};



export default Home;