import React from 'react';
import Link from 'next/link';
import { RiShoppingBagFill, RiHomeSmileFill } from 'react-icons/ri';


import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <div className='nav-bar'>
        <button type="button" className="home-icon">
          <RiHomeSmileFill />
        </button>

        <div className="logo">
          <Link href="/">Toly Cupcakes</Link>
        </div>
      </div>

      <div className='nav-bar'>
        <p className="nav-text">
          <Link href="/">About</Link>
        </p>

        <p className="nav-text">
          <Link href="/">Contact</Link>
        </p>

        <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
          <p className="cart-text">Cart</p>
          <RiShoppingBagFill />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>
      </div>

      {/*showCart && <Cart />*/}
    </div>
  )
}

export default Navbar