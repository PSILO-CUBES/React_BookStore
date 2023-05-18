import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import CartList from './CartList'
import CartTotalCheckout from './CartTotalCheckout'

const Cart = props =>{
  const { cart } = props

  if(cart !== null){
    if(cart.length > 0){
      return (
        <div>
          <div className='section'><h1>Your Cart</h1></div>
          <CartTotalCheckout />
          <CartList />
          <CartTotalCheckout />
        </div>
      )
    }
  }

  return (
    <div>
      <div className='section'><h1>Your Cart</h1></div>
      <CartTotalCheckout />
      <CartList />
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

  }
)(Cart)