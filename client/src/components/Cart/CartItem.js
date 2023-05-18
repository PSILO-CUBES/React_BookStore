import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import CartButton from './CartButton'
import CartItemCounter from './CartItemCounter'
import CartSubtotal from './CartSubtotal'


const CartItem = props =>{
  const { book } = props

  // could make logic for CartItemCounter and CartSubtotal here and pass results as props 
  // so it wouldnt have to compute it twice

  return (
    <motion.div 
      className='cartItemContainer'
      
      initial={{transform: 'translateX(-15%)', opacity: 0}}
      animate={{transform: 'translateX(0%)', opacity: 1,  paddingBottom: '10px'}}
      exit={{transform: 'translateX(0%)', opacity: 0}}
    >
      <div className='cartItemButton'>
        <CartButton book={book} />
      </div>
      <div className='cartItemContent'>
        <Link to={`/book/${book.title}`}>
          <img src={`${book.src}`} className='cartBookImage bookImg' />
        </Link>
        <h1 style={{marginTop: '23.5px', wordBreak: 'keep-all'}}>{book.title}</h1>
        <div />
        <div /> 
        <div className='cartItemPriceContainer'> 
          <h1>${book.price}</h1> <CartItemCounter book={book} /> <CartSubtotal book={book}/> 
        </div>
      </div>
    </motion.div>
  )
}

export default CartItem