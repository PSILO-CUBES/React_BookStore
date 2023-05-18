import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { cartItemUpdate } from '../../actions'

const CartItemCounter = props =>{
  const { book, cart, cartItemUpdate } = props
  const { title } = book
  let [ state, setState ] = useState(book.cartAmount)

  let areArraysEqual = (a, b) =>{
    return JSON.stringify(a) == JSON.stringify(b)
  }

  useEffect(() =>{
    const updatedCart = [...cart]
    for(let i = 0; i < updatedCart.length; i++){
      if(updatedCart[i].title === title){
        let updatedBook = {...updatedCart[i]}
        updatedBook.cartAmount = state
        updatedCart[i] = updatedBook
      }
    }

    if(areArraysEqual(updatedCart, [...cart])) return
    console.log(areArraysEqual(updatedCart, [...cart]))
    cartItemUpdate(updatedCart)
  }, [state])

  useEffect(() =>{
    setState(book.cartAmount)
  }, [cart])

  const increaseInputOnClick = () =>{
    if(state < book.inventoryAmount){
      setState(state + 1)
    }
  }

  const decreaseInputOnClick = () =>{
    if(state > 1){
      setState(state - 1)
    }
  }

  return (
    <div className='cartCounterContainer'>
      <button className='ui button cartCounterButton minusButton' onClick={decreaseInputOnClick}>-</button>
      <div className='ui input cartCounterInputContainer'>
        <input className='cartCounterInput' value={state} />
      </div>
      <button className='ui button cartCounterButton plusButton' onClick={increaseInputOnClick}>+</button>
    </div>
  )
}

const mapStateToProps = state =>{
  return {
    cart: state.cart
  }
}

export default connect(
  mapStateToProps,
  {
    cartItemUpdate
  }
)(CartItemCounter)