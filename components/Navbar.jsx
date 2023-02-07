import React from 'react';
import Link from 'next/link';
import { CiShoppingCart, CiHome } from 'react-icons/ci';


import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">

      <div className='navbar-sec-left'> 
        <button type="button" aria-label='home page button' className="navicon">
          <CiHome />
        </button>
      </div>

      <div className="navbar-sec-mid">
        <div className='logo'>
          <a className='cupck' href="/"><span className='toly'>Toly</span> Cupcakes</a>
        </div>
      </div>

      <div className='navbar-sec-right'>
        
        <div className='navbar-side'>
          <div className='navbar-item'>
            <p className="navbar-text">
              <Link href="/">About</Link>
            </p>
          </div>

          <div className='navbar-item'>
            <p className="navbar-text">
              <Link href="/">Contact</Link>
            </p>
          </div>

          
          
          <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
            <CiShoppingCart />
            <span className="cart-item-qty">{totalQuantities}</span>
          </button>

        </div>
      </div>
      {showCart && <Cart />}
    </div>
  )
}

export default Navbar