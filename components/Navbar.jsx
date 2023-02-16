import React from 'react';
import Link from 'next/link';
import { HiShoppingBag, HiHome } from 'react-icons/hi';


import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div id='navbar' className="navbar-container">

      <div className='navbar-sec-left'>
        <Link href="/">
          <button type="button" aria-label='home page button' className="navicon">
            <HiHome />
          </button>
        </Link>
      </div>

      <div className="navbar-sec-mid">
        <div className='logo'>
          <Link href="/">
            <a className='cupck'><span className='toly'>Toly</span> Cupcakes</a>
          </Link>
        </div>
      </div>

      <div className='navbar-sec-right'>

        <div className='navbar-side'>
          <div className='navbar-item'>
            <p className="navbar-text">
              <Link href="/about">About</Link>
            </p>
          </div>

          <div className='navbar-item'>
            <p className="navbar-text">
              <Link href="/contact">Contact</Link>
            </p>
          </div>



          <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
            <HiShoppingBag />
            <span className="cart-item-qty">{totalQuantities}</span>
          </button>

        </div>
      </div>
      {showCart && <Cart />}
    </div>
  )
}

export default Navbar