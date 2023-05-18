import React from 'react'
import { connect } from 'react-redux'

import CartCheckoutButton from './CartCheckoutButton'

const CartTotalCheckout = props =>{
  const { cart } = props 
  const cartPriceArr = []
  let totalPrice = 0

  const calcTotalPrice = () =>{
    if(cart == null) return (
      <i className='ui icon loading spinner'/>
    )

    for(let i = 0; i < cart.length; i++){
      cartPriceArr.push(parseFloat(cart[i].subtotal))
      totalPrice += cartPriceArr[i]
    }
    
    return `Total : $${totalPrice = totalPrice.toFixed(2)}`
  }

  return (
    <div className='totalPriceContainer'>
      <div>
        <h2>{calcTotalPrice()}</h2>
      </div>
      <CartCheckoutButton />
    </div>
  )
}

const mapStatetoProps = state =>{
  return {
    cart: state.cart
  }
}

export default connect(
  mapStatetoProps,
  {

  }
)(CartTotalCheckout)