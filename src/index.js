import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './navbar'
import App from './App'
import Products from './products'
import About from './about'
import Cart from './cart'
import Error from './error'
import Product from './product'
import { reducer } from './reducer'
import productList from './productList'

export const context = React.createContext()
export let itemsToFeature = []

const defaultState = {
  cart: [],
  totalPrice: 0,
  totalQuantity: 0,
}

const HomePage = () => {
  const [state, dispatch] = React.useReducer(reducer, defaultState)

  const addToCart = (product) => {
    dispatch({ type: 'ADD', payload: product })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR' })
  }

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE', payload: id })
  }

  const incrementItem = (id) => {
    dispatch({ type: 'INCREMENT', payload: id })
  }

  const decrementItem = (id) => {
    dispatch({ type: 'DECREMENT', payload: id })
  }

  let x = 0
  do {
    const item = Math.floor(Math.random() * (productList.length - 1))
    if (!itemsToFeature.includes(productList[item])) {
      x++
      itemsToFeature.push(productList[item])
    }
  } while (x < 3)

  return (
    <context.Provider
      value={{
        state,
        addToCart,
        clearCart,
        removeFromCart,
        incrementItem,
        decrementItem,
      }}
    >
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <App />
          </Route>
          <Route exact path='/products'>
            <Products />
          </Route>
          <Route path='/products/:id' children={<Product />}></Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </Router>
    </context.Provider>
  )
}

ReactDOM.render(<HomePage />, document.getElementById('root'))
