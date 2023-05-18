import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const CartIcon = props =>{
  const { cart } = props
  
  let cartLength
  if(cart === null){
    cartLength = 0
  } else {
    cartLength = cart.length
  }

  return (
    <Link to="/cart"> <div className='cartIconContainer'> <i className='big cart icon cartIcon'/> <h4 className='cartIconAmount'> { cartLength } </h4> </div> </Link>
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
)(CartIcon)