import React from 'react'
import './cart.css'
import { context } from './index'
import { Link } from 'react-router-dom'
import { BsCaretUp, BsCaretDown } from 'react-icons/bs'

const Cart = () => {
  const {
    state: { cart, totalPrice, totalQuantity },
    clearCart,
    removeFromCart,
    incrementItem,
    decrementItem,
  } = React.useContext(context)

  return (
    <div className='cart-container'>
      <h1 className='cart-name'>Cart</h1>
      {cart.length <= 0 && (
        <div className='cart-subcontainer'>
          <p>Cart is empty, shop now.</p>
          <Link to='/products'>
            <button className='shop-button'>Shop</button>
          </Link>
        </div>
      )}
      {cart.length > 0 && (
        <div className='cart-items'>
          {cart.map((item) => (
            <div key={item.id} className='cart-item'>
              <div className='cart-image'>
                <img
                  src={item.image}
                  alt={item.description}
                  className='cart-item-image'
                />
              </div>
              <div className='cart-display'>
                <p className='cart-item-name'>{item.name}</p>
                <p className='cart-item-company'>{item.company}</p>
                <p className='cart-item-price'>${item.price}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className='cart-item-remove'
                >
                  remove
                </button>
              </div>
              <div className='cart-quantity'>
                <button onClick={() => incrementItem(item.id)}>
                  <BsCaretUp />
                </button>
                <p className='cart-item-quantity'>{item.quantity}</p>
                <button onClick={() => decrementItem(item.id)}>
                  <BsCaretDown />
                </button>
                <p className='cart-item-totalprice'>${item.totalPrice}</p>
              </div>
            </div>
          ))}
          <div className='total-quantity'>
            Number of items: <p>{totalQuantity}</p>
          </div>
          <div className='total-price'>
            Total price: <p>${totalPrice}</p>
          </div>
          <button onClick={() => clearCart()} className='cart-clear-button'>
            Clear cart
          </button>
          <button className='checkout'>Proceed to checkout</button>
        </div>
      )}
    </div>
  )
}

export default Cart
