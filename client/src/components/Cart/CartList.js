import React, {useEffect} from 'react'
import { connect } from 'react-redux'

import CartItem from './CartItem'

const CartList = props =>{
  const { cart, user } = props

  const renderCartList = () =>{
    if(user !== null){
      if(cart !== null){
        if(cart.length === 0){
          return (
            <div>Your Cart Is Empty</div>
          )
        } else if(cart === null){
          return (
            <i className="icon spinner loading"></i>
          )
        }
        let cartItems = [...cart].map(cartItem => {return <CartItem book={cartItem}/>})

        return (
          <>
            <div><h4>Remove from Cart</h4></div>
            {cartItems}
          </>
        )
      }
    }

    return (
      <div>Please, Sign In to see your Cart.</div>
    )
  }

  return (
    <>
      {renderCartList()}
    </>
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

  }
)(CartList)