import React from 'react'

const InfoSection = props =>{
  const { section, text, imgSrc } = props

  if(section % 2 === 1){
    return (
      <div className='infoSection'>
        <div className='infoLandingTextContainer'> 
          <span> <hr/> {text} <hr/> </span>
        </div>
        <img src={imgSrc} />
      </div>
    )
  } else {
    return (
      <div className='infoSection'>
        <img src={imgSrc} />
        <div className='infoLandingTextContainer'> 
          <span> <hr/> {text} <hr/> </span> 
        </div>
      </div>
    )
  }
}

export default InfoSection