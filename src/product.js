import React from 'react'
import './product.css'
import { useParams } from 'react-router-dom'
import { context } from './index'
import productList from './productList'

const Product = () => {
  const { addToCart } = React.useContext(context)
  const { id } = useParams()
  const [productToRender] = productList.filter((product) => product.id === id)

  return (
    <>
      <div className='product-cont'>
        <div className='product-box'>
          <img src={productToRender.image} alt={productToRender.description} />
          <p className='prod-name'>{productToRender.name}</p>
          <p className='prod-company'>{productToRender.company}</p>
          <p className='prod-description'>{productToRender.description}</p>
          <p className='prod-category'>Catergory: {productToRender.category}</p>
          <div className='price-cart'>
            <button
              className='cart-button'
              onClick={() => addToCart(productToRender)}
            >
              Add to Cart
            </button>
            {console.log(productToRender.id)}
            <p className='prod-price'>${productToRender.price}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
