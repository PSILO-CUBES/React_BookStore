import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { addToCart, removeFromCart } from '../../actions'

const CartButton = props =>{
  const [ state, setState ] = useState(true)
  const { book, cart, user, addToCart, removeFromCart } = props

  useEffect(() =>{
    if(cart !== null){
      // Needs to be adjusted! Need to refresh button state when page is changed
      let cartArr = cart.filter(cartItem => cartItem.title === book.title)
      if(cartArr.length > 0){
        setState(false)
      } else setState(true)
    } else {
      setState(true)
    }
  }, [cart, book])

  const removeFromCartOnClick = () =>{
      setState(true)
      removeFromCart(book)
  }

  const addToCartOnClick = () =>{
    if(user !== null){
      setState(false)
      addToCart(book)
      return
    }
    alert('Sign In to Add a book to Your Cart.')
  }

  const renderCartButton = () =>{
    if(document.location.pathname == "/cart"){
      return (
        <button className='ui button removeButton removeButtonIcon' onClick={() => removeFromCartOnClick()}> <i className='ui icon close icon'></i> </button>
      )
    }
    
    if(!state){
      return (
        <button className='ui button cartButton removeButton' onClick={() => removeFromCartOnClick()}> Remove From Cart </button>
      )
    }
  
    return (
      <button className='ui button cartButton addButton' onClick={() => addToCartOnClick()}> Add To Cart </button>
    )
  }

  return (
    renderCartButton()
  )
}

const mapStateToProps = state =>{
  return {
    cart: state.cart,
    user: state.user
  }
}

export default connect(
  mapStateToProps,
  {
    addToCart,
    removeFromCart
  }
)(CartButton)