import React, {useState, useRef, useEffect} from 'react'
import { motion } from 'framer-motion'
import { connect } from 'react-redux'

import Book from './Book'

const BookDisplay = props =>{
  const { state, type } = props
  const { books, book } = state
  const [ sortedBooks, setSortedBooks] = useState([])

  useEffect(() =>{
    sortWantedBooks()
  }, [books, book])

  const sortWantedBooks = () =>{

    if(books === null) return

    let sortedArray
    let sortedRes
    
    switch(type){
      case 'landingBooks':
        sortedArray = [...books].sort((a, b) => b.amount - a.amount)
        sortedRes = sortedArray.slice(0, 5)
        setSortedBooks(sortedRes)
        break
      case 'bookPage':
        sortedArray = [...books].filter((bookItem => bookItem.author === book.author))
        sortedRes = sortedArray.slice(0, 5)
        setSortedBooks(sortedRes)
        break
    }   
  }

  const renderSortedBooks = () =>{
    if(sortedBooks.length === 0){
      return (
        <>
          <div></div>
          <div></div>
          <div className='landingBooksInfoContainer'></div>
          <div></div>
          <div></div>
        </>
      )
    }

    return(
      sortedBooks.map(book =>{
        return <Book book={book} key={book.title}/>
      })
    )
  }

  if (props.type === 'landingBooks') {
    return (
      <>
        <h1 className='landingTextLowerContainer'> Books With The Most Inventory Count </h1>
        <motion.div
         className='landingLowerGridContainer'

         initial={{transform: 'translateX(-15%)', opacity: 0}}
         animate={{transform: 'translateX(0%)', opacity: 1}}
         exit={{transform: 'translateX(0%)', opacity: 0}}
        >
          {renderSortedBooks()}
        </motion.div>
      </>
    )
  } else if(props.type === 'bookPage'){
    return (
      <>
        <h1> By This Author </h1>
        <motion.div
         className='landingLowerGridContainer'
  
         initial={{transform: 'translateX(-15%)', opacity: 0}}
         animate={{transform: 'translateX(0%)', opacity: 1}}
         exit={{transform: 'translateX(0%)', opacity: 0}}
        >
          {renderSortedBooks()}
        </motion.div>
      </>
    )
  } 
}

const mapStateToProps = state =>{
  return { state }
}

export default connect(
  mapStateToProps,
  {
    
  }
)(BookDisplay)