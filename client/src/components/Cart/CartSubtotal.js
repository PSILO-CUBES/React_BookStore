import React, {useEffect} from 'react'
import { connect } from 'react-redux'

import { cartItemUpdate } from '../../actions'

const CartTotal = props =>{
  const { book, cart, cartItemUpdate } = props 
  const { cartAmount, price, title } = book
  const floatPrice = parseFloat(price)
  const subtotal = (cartAmount * floatPrice).toFixed(2)

  const areArraysEqual = (a, b) =>{
    return JSON.stringify(a) == JSON.stringify(b)
  }

  useEffect(() =>{
    const updatedCart = [...cart]
    for(let i = 0; i < updatedCart.length; i++){
      let updatedBook = {...updatedCart[i]}
      if(updatedBook.title === title){
        updatedBook.subtotal = subtotal
        updatedCart[i] = updatedBook
      }
    }
    
    if(areArraysEqual(updatedCart, [...cart])) return
    cartItemUpdate(updatedCart)
  }, [cartAmount])

  return (
    <h2>Subtotal : ${subtotal}</h2>
  )
}

const mapStateToProps = state =>{
  return {cart: state.cart}
}

export default connect(
  mapStateToProps,
  {
    cartItemUpdate
  }
)(CartTotal)