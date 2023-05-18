import React from 'react'

const Footer = props =>{
  return (
    <footer>
      <div>
        {props.footerEmail}
      </div>
      <div className='iconList'>
        <a href='http://instagram.com'> <i className='big instagram icon'/> </a>
        <a href='http://youtube.com'> <i className='big youtube icon'/> </a>
        <a href='http://twitter.com'> <i className='big twitter icon'/> </a>
      </div>
      <div className='footerEndContainer'>
        {props.footerMessage}
      </div>
    </footer>
  )
}

export default Footer 