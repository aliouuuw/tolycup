import React from 'react';
import Link from 'next/link';
import { RiShoppingBagFill, RiHomeSmileFill } from 'react-icons/ri';


import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">

      <div className='navbar-sec-left'> 
        <button type="button" aria-label='home page button' className="navicon">
          <RiHomeSmileFill />
        </button>
      </div>

      <div className="navbar-sec-mid">
        <div className='logo'>
          <a className='cupck' href="/"><span className='toly'>Toly</span> Cupcakes</a>
        </div>
      </div>

      <div className='navbar-sec-right'>
        
        <div className='navbar-side'>
          <p className="navbar-text">
            <Link href="/">About</Link>
          </p>
          <p className="navbar-text">
            <Link href="/">Contact</Link>
          </p>
          <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
            <p className="navbar-text">Cart</p>
            <RiShoppingBagFill />
            <span className="cart-item-qty">{totalQuantities}</span>
          </button>
        </div>
      </div>

      {/*<button type="button" aria-label='home page button' className="home-icon">
        <RiHomeSmileFill />
      </button>

      <div className='mid-bar'>

        <div className="logo">
          <a className='cupck' href="/"><span className='toly'>Toly</span> Cupcakes</a>
        </div>
        
        <div className='nav-bar'>
          <p className="nav-text">
            <Link href="/">About</Link>
          </p>
          <p className="nav-text">
            <Link href="/">Contact</Link>
          </p>
        </div>

      </div>
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <p className="cart-text">Cart</p>
        <RiShoppingBagFill />
        <span className="cart-item-qty">{totalQuantities}</span>
  </button>*/}

      {/*showCart && <Cart />*/}
    </div>
  )
}

export default Navbar