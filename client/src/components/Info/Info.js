import React from 'react'
import { motion } from 'framer-motion'

import InfoSection from './InfoSection'

const Info = () =>{
  return (
    <>
      <motion.div 
        className='infoLandingContainer'
      
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 1}}
      >
        <div className='infoLanding'>
          <InfoSection 
            section={1}
            text={'About Us'}
            imgSrc={'https://images.unsplash.com/photo-1474366521946-c3d4b507abf2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'}
          />
          <InfoSection 
            section={2}
            text={'We do Things like sell books and nothing much else!'}
            imgSrc={'https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'}
          />
        </div>
      </motion.div>
    </>
  )
}

export default Info