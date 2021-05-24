import React from 'react'
import './products.css'
import productList from './productList'
import { Link } from 'react-router-dom'

const furnitureType = [
  'All',
  'Office',
  'Living Room',
  'Kitchen',
  'Bedroom',
  'Dining',
  'Kids',
]

const color = '#b8360b'

const Products = () => {
  const [text, setText] = React.useState('')
  const [slider, setSlider] = React.useState(310000)
  const [dropdown, setDropdown] = React.useState('All')
  const [filterButton, setFilterButton] = React.useState('all')
  const [width, setWidth] = React.useState(window.innerWidth)
  const [showFilter, setShowFilter] = React.useState(false)

  React.useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
    if (width > 768) {
      setShowFilter(false)
    }
    return () =>
      window.removeEventListener('resize', () => setWidth(window.innerWidth))
  }, [width])

  const clear = () => {
    setText('')
    setSlider(310000)
    setDropdown('All')
    setFilterButton('all')
    setShowFilter(false)
  }

  return (
    <>
      <div className='product-container'>
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value.toLowerCase())}
          id='searchBar'
          placeholder='Search by name'
        />

        <div className='filter-and-grid'>
          {(width > 768 || showFilter) && (
            <div className={showFilter ? 'mobile-filter' : 'filter'}>
              <div className='button-container'>
                {furnitureType.map((type, id) => {
                  return (
                    <button
                      key={id}
                      className='button'
                      style={
                        filterButton === type.toLowerCase()
                          ? { background: color }
                          : {}
                      }
                      onClick={() => setFilterButton(type.toLowerCase())}
                    >
                      {type}
                    </button>
                  )
                })}
              </div>
              <div className='slider'>
                <input
                  type='range'
                  min='3100'
                  max='310000'
                  step='100'
                  value={slider}
                  onChange={(e) => setSlider(e.target.value)}
                  id='price'
                />
                <p>{'$' + slider}</p>
              </div>
              <label htmlFor='company' className='company'>
                Company
              </label>
              <div className='dropdown'>
                <select
                  name='company'
                  className='company'
                  value={dropdown}
                  onChange={(e) => setDropdown(e.target.value)}
                >
                  <option value='All'>All</option>
                  <option value='marcos'>Marcos</option>
                  <option value='liddy'>Liddy</option>
                  <option value='ikea'>Ikea</option>
                  <option value='caressa'>Caressa</option>
                </select>
              </div>
              <button className='button' id='clear' onClick={() => clear()}>
                Clear
              </button>
            </div>
          )}
          <div className='grid'>
            {width <= 768 && (
              <button
                className='filter-button'
                onClick={() => setShowFilter(!showFilter)}
              >
                Filters
              </button>
            )}
            {productList.map((product) => {
              if (
                product.name.includes(text) &&
                product.price < slider &&
                (product.company === dropdown || dropdown === 'All') &&
                (product.category === filterButton || filterButton === 'all')
              )
                return (
                  <Link to={`/products/${product.id}`} key={product.id}>
                    <div className='product-tile'>
                      <div className='product-image'>
                        <img src={product.image} alt={product.description} />
                      </div>
                      <div className='product-description'>
                        <p className='name'>{product.name}</p>
                        <p className='product-company'>{product.company}</p>
                        <p className='catergory'>{product.category}</p>
                        <p className='price'>{'$' + product.price}</p>
                      </div>
                    </div>
                  </Link>
                )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Products
