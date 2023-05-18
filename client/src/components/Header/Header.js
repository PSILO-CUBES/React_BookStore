import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import GoogleAuth from './GoogleAuth'
import CartIcon from './CartIcon'

class Header extends Component {
  render() {
    return (
      <header>
        <div className='logoContainer'>
        <Link to="/" className='logoLink'> <img  className='logo' src={require('../../img/logo.png')} /> </Link>
        </div>
        <div className='navButtonsContainer'>
            <Link to="/"> <h4 style={{paddingRight: '2.5px'}} className='hoverExpand'> HOME </h4> </Link> | 
            <Link to="/shop"> <h4 style={{padding:'0 2.5px 0 2.5px'}}  className='hoverExpand'> SHOP </h4> </Link> | 
            <Link to="/info"> <h4 style={{paddingLeft: '2.5px'}} className='hoverExpand'> INFO </h4> </Link>
        </div>
        <div className='headerEndContainer'>
          <div className='googleAuthContainer'>
            <GoogleAuth />
          </div>
          <CartIcon />
        </div>
      </header>
    )
  }
}

const mapStateToProps = state =>{
  return { 
    cart: state.cart,
  }
}

export default connect(
  mapStateToProps,
  {

  }
)(Header)
