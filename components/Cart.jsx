import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import getStripe from "@/lib/getStripe";

import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";
import Image from "next/image";

const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuantity,
    onRemove,
  } = useStateContext();

  const router = useRouter();

  //PAY WITH STRIPE

  const payStrip = async() =>{

    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    if(response.statusCode === 500) return;
    
    const data = await response.json();

    toast.loading('Redirecting...');

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  //PAY WITH WAVE

  // const handleCheckout = async () => {
  //   console.log("Checkout");

  //   const generateUniqueReference = () => {
  //     // generate a random string for the reference
  //     let randomString = Math.random().toString(36).substr(2, 6);

  //     // add a timestamp to the randomString
  //     let timestamp = Date.now();

  //     // combine the two
  //     let uniqueReference = `${randomString}_${timestamp}`;

  //     return uniqueReference;
  //   };

  //   const commandRef = generateUniqueReference();

  //   const body = { cartItems, totalPrice, commandRef };

  //   console.log({ body });

  //   const response = await fetch("/api/paytech", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(body),
  //   });

  //   if (response.statusCode === 500) return;

  //   const data = await response.json();

  //   toast.loading("Redirecting...");

  //   router.push(data.redirectUrl);
  // };

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping style={{ fontSize: "150" }} />
            <h3>Your shopping bag is empty</h3>
            <Link href="/" passHref>
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div className="product" key={item._id}>
                <div className="relative h-36 w-36">
                  <Image
                    alt="Cart product image"
                    src={urlFor(item?.image[0]).url()}
                    className="cart-product-image"
                    fill
                  />
                </div>
                <div className="item-desc">
                  <div className="flex top">
                    <h5>{item.name}</h5>
                    <h4>${item.price}</h4>
                  </div>
                  <div className="flex bottom justify-between items-center border border-black w-20">
                    <div className="flex items-center justify-between w-full">
                      <span
                        className="flex flex-col justify-center items-center h-full py-2 px-2 hover:cursor-pointer"
                        onClick={() =>
                          toggleCartItemQuantity(item._id, "dec")
                        }
                      >
                        <AiOutlineMinus color="red" />
                      </span>
                      <span className="flex flex-col justify-center items-center  h-full border-x border-black py-2 px-4">
                        {item.quantity}
                      </span>
                      <span
                        className="flex flex-col justify-center items-center  h-full py-2 px-2 hover:cursor-pointer "
                        onClick={() =>
                          toggleCartItemQuantity(item._id, "inc")
                        }
                      >
                        <AiOutlinePlus color="green" />
                      </span>
                    </div>
                    <button
                      type="button"
                      className="remove-item"
                      onClick={() => onRemove(item)}
                    >
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className="btn-container">
              <button type="button" className="btn" onClick={payStrip}>
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
