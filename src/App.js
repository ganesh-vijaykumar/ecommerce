import './App.css'
import image from './furniture.jpg'
import { Link } from 'react-router-dom'
import React from 'react'
import { itemsToFeature } from './index'

function App() {
  return (
    <>
      <div className='App'>
        <h1 className='description'>
          Customize your home today with our latest furntiure
        </h1>
        <a
          href='https://www.freepik.com/photos/house'
          target='_blank'
          rel='noreferrer'
        >
          <img src={image} alt='furniture' />
          <p className='credits'>
            House photo created by vanitjan - www.freepik.com
          </p>
        </a>
        <h1 className='featured-products'>Featured Products</h1>
        <div className='featured-products-list'>
          {itemsToFeature.map((item) => {
            return (
              <Link
                to={`/products/${item.id}`}
                className='featured-product-container'
                key={item.id}
              >
                <img src={item.image} alt={item.description} />
                <p>{item.name}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
