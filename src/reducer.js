export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const itemArray = state.cart.filter(
        (item) => item.id === action.payload.id
      )
      if (itemArray.length > 0) {
        const newArray = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: item.totalPrice + itemArray[0].price,
            }
          }
          return item
        })
        return {
          cart: newArray,
          totalQuantity: state.totalQuantity + 1,
          totalPrice: state.totalPrice + newArray[0].price,
        }
      }
      const newEntry = action.payload
      newEntry.quantity = 1
      newEntry.totalPrice = action.payload.price
      return {
        cart: [...state.cart, newEntry],
        totalQuantity: state.totalQuantity + 1,
        totalPrice: state.totalPrice + newEntry.price,
      }

    case 'CLEAR':
      return { cart: [], totalPrice: 0, totalQuantity: 0 }
    case 'REMOVE':
      const removedItem = state.cart.filter(
        (item) => item.id === action.payload
      )
      const newCart = []
      state.cart.map((item) => {
        if (item.id !== action.payload) {
          newCart.push(item)
        }
      })
      return {
        cart: newCart,
        totalQuantity: state.totalQuantity - removedItem[0].quantity,
        totalPrice: state.totalPrice - removedItem[0].totalPrice,
      }
    case 'INCREMENT':
      const itemToIncrement = state.cart.filter(
        (item) => item.id === action.payload
      )
      const updatedCart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
            totalPrice: item.totalPrice + item.price,
          }
        }
        return item
      })
      return {
        cart: updatedCart,
        totalQuantity: state.totalQuantity + 1,
        totalPrice: state.totalPrice + itemToIncrement[0].price,
      }
    case 'DECREMENT':
      let tQuantity = 0
      let tPrice = 0
      const decrementCart = state.cart.map((item) => {
        if (item.id === action.payload && item.quantity > 1) {
          tQuantity++
          tPrice = tQuantity * item.price
          return {
            ...item,
            quantity: item.quantity - 1,
            totalPrice: item.totalPrice - item.price,
          }
        }
        return item
      })
      return {
        cart: decrementCart,
        totalQuantity: state.totalQuantity - tQuantity,
        totalPrice: state.totalPrice - tPrice,
      }
    default:
      return { ...state }
  }
}
