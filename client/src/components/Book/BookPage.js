import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router'
import { motion } from 'framer-motion'

import { fetchBook } from '../../actions'
import CartButton from '../Cart/CartButton'
import BookDisplay from './BookDisplay'

const BookPage = props =>{
  const { bookName } = useParams()
  const { book, books, fetchBook } = props

  useEffect(() =>{
    if(books !== null){
      let currBook = books.filter(book => book.title === `${bookName}`)
      fetchBook(currBook)
    }
  }, [books])

  // useEffect(() =>{
  //   console.log(book)
  // }, [book])

  if(book === null || books === null){
    return (
      <div><h1>Loading...</h1></div>
    )
  }

  return (
    <>
      <div className='section'>
        <h1> About This Book </h1>
      </div>
      <div className='bookPageContainer'>
        <motion.div 
            className='bookPageImageContainer'
            
            initial={{transform: 'translateX(-125%)', opacity: 0}}
            animate={{transform: 'translateX(0%)', opacity: 1}}
            exit={{transform: 'translateX(0%)', opacity: 0}}
          >
            <img className='bookPageImage' src={`${book.src}`}/>
            <h1 className='bookPageContentTitle' > {book.title} </h1>
        </motion.div>
        <div className='bookPageContentContainer'>
          <div className='bookPageDataContainer'>
            <div className="bookPageDataTypeContainer">
              <h2 className='bookPageContentData'> Author : </h2> <h1 className='bookPageContent bookPageAuthor' > {book.author} </h1>            
            </div>
            <div className="bookPageDataTypeContainer">
              <h2 className='bookPageContentData bordered'> <span> Description : </span> </h2> <h4 className='bookPageContent bookPageDesc bordered' > <span> {book.description} </span> </h4>            
            </div>
            <div className="bookPageDataTypeContainer">
              <h2 className='bookPageContentData'> Price : </h2> <h1 className='bookPageContent' > ${book.price} </h1>
            </div>
          </div>
          <CartButton book={book} />
        </div>
      </div>
      <BookDisplay type={'bookPage'}/>
    </>
  )
}

const mapStateToProps = state =>{
  return {
    books: state.books,
    book: state.book
  }
}

export default connect(
  mapStateToProps,
  {
    fetchBook
  }
)(BookPage)