import React from 'react'
import { motion } from 'framer-motion'

import BookDisplay from '../Book/BookDisplay'

const Landing = props => {
  const { greetingMessage, shopName, landingSrc } = props

  return (
    <motion.div 
      className='landingContainer'

      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 1}}
    >
      <div className='landingContentContainer'>
          <div className='landingTextContainer'>
            <h2 className='landingText'> <hr /> {greetingMessage} <br /> {shopName} <hr /> </h2>
          </div>
          <div className='landingImageContainer'>
            <img src={`${landingSrc}`} className='landingImage'/>
          </div>
      </div>
      <div className='landingLowerContainer'>
        <BookDisplay type={'landingBooks'}/>
      </div>
    </motion.div>
  )
}

export default Landing