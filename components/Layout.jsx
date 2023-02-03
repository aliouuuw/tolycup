import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
    <div>
      <header>
        <Navbar />
      </header>
    </div>
    <div className="layout">
      <Head>
        <title>Toly Cupcakes</title>
      </Head>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
    </>
  )
}

export default Layout;