import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { context } from './index'
import { ImHome3 } from 'react-icons/im'
import { FiShoppingCart } from 'react-icons/fi'

const Navbar = () => {
  const {
    state: { totalQuantity },
  } = React.useContext(context)

  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link to='/'>
            <ImHome3 />
          </Link>
        </li>
        <li>
          <Link to='/products'>Products</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li className='cart'>
          <Link to='/cart'>
            <FiShoppingCart />
          </Link>
          <div className='total-items'>{totalQuantity}</div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
