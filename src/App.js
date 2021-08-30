import './App.css'
import image from './furniture.jpg'
import { Link } from 'react-router-dom'
import React from 'react'
import productList from './productList'

let itemsToFeature = []

let x = 0
do {
  const item = Math.floor(Math.random() * (productList.length - 1))
  if (!itemsToFeature.includes(productList[item])) {
    x++
    itemsToFeature.push(productList[item])
  }
} while (x < 3)

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
          id='banner-img'
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

export const Memoized = React.memo(App)
