import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import CartButton from '../Cart/CartButton'

const Book = props =>{
  const { book } = props
  const bookRef = useRef()

  useEffect(() =>{
    const options = {
      root: null,
      threshold: 0.20,
      rootMargin: '-75px 0px -50px 0px'
    }

    bookRef.current.style.opacity = '0'

    const observer = new IntersectionObserver((entries, observer) =>{
      entries.forEach(entry =>{
        if(!entry.isIntersecting){
          entry.target.style.opacity = '0'
          return
        }
        
        entry.target.style.opacity = '1'
      })
    }, options)

    observer.observe(bookRef.current)
  }, [])
  
  return (
    <div className='bookItem' key={book.title} ref={bookRef}>
        <div className='bookImgContainer'>
          <Link to={`/book/${book.title}`}>
            <img src={`${book.src}`} className="bookImg"/>
          </Link>
        </div>
      <div className='bookInfoContainer'>
        <div className='booksInfoContainer'>
          <h4>{book.title}</h4>
        </div>
        <div className='booksInfoContainer'>
          <h4>{book.author}</h4>
        </div>
        <div className='booksInfoContainer'>
          <h4>${book.price}</h4>
        </div>
      </div>
      <CartButton book={book} />
    </div>
  )
}

export default Book