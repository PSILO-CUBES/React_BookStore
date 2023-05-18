import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { motion } from 'framer-motion'

import Book from './Book.js'
import BookSortByWindow from './BookSortByWindow.js'

const BookList = props => {
  const { books } = props

  const sortByRef = useRef()
  const sortByArrowRef = useRef()

  const [ sorting, setSorting ] = useState('default')
  let sortByArr

  const [ window, setWindow ] = useState(false)
  const toggleWindow = () =>{
    setWindow(!window)
  }

  //make multiple sort Functions here

  let sortBooksByAlphabeticalOrder
  let sortBookByPriceUp
  let sortBookByPriceDown
  if(books !== null){
    sortBooksByAlphabeticalOrder = [...books].sort((a, b) => (a.title < b.title) ? -1 : (a.title > b.title) ? 1 : 0 )
    sortBookByPriceUp = [...books].sort((a, b) => (a.price < b.price) ? -1 : (a.price > b.price) ? 1 : 0 )
    sortBookByPriceDown = [...books].sort((a, b) => (a.price < b.price) ? 1 : (a.price > b.price) ? -1 : 0 )
  }

  // assing sort Function by condition
  switch(sorting){
    case 'default':
      sortByArr = sortBooksByAlphabeticalOrder
      break
    case 'Alphabetical':
      sortByArr = sortBooksByAlphabeticalOrder
      break
    case 'PriceUp':
      sortByArr = sortBookByPriceUp
      break
    case 'PriceDown':
      sortByArr = sortBookByPriceDown
      break
  }

  const rotateSortByArrow = () =>{
    sortByArrowRef.current.style.transform = 'rotateZ(0deg)'
  }
  const resetSortByArrow = () =>{
    if(!window){
      sortByArrowRef.current.style.transform = 'rotateZ(-90deg)'
    }
  }

  useEffect(() =>{
    resetSortByArrow()
  }, [window])
  
  const renderBooks = () =>{
    if(props.books === null){
      return (
        <>
          <div style={{height: '750px'}}></div>
          <div style={{height: '750px'}}></div>
          <div style={{height: '750px'}}></div>
          <div style={{height: '750px'}}></div>
          <div style={{height: '750px'}}></div>
        </>
      )
    }
    
    return (
      sortByArr.map(book =>{
         return <Book book={book} key={book.title}/>
      })
    )
  }

  return (
    <div className='bookListContainer'>
      <div className='section'>
        <div className='bookListHeaderContainer'>
          <h1>List Of Books</h1>
          <div className='bookListSortByContainer' ref={sortByRef}>
            <h2 className='sortBy' onClick={toggleWindow} onMouseOver={rotateSortByArrow} onMouseOut={resetSortByArrow}>Sort By</h2><i className='ui icon angle down sortByIcon' ref={sortByArrowRef} onClick={toggleWindow} onMouseOver={rotateSortByArrow} onMouseOut={resetSortByArrow}/>
            <BookSortByWindow window={window} setWindow={setWindow} toggleWindow={toggleWindow} setSorting={setSorting} sortByRef={sortByRef}/>
          </div>
        </div>
      </div>
      <motion.div 
        className='booksContainer'
      
        initial={{transform: 'translateX(-15%)', opacity: 0}}
        animate={{transform: 'translateX(0%)', opacity: 1}}
        exit={{transform: 'translateX(0%)', opacity: 0}}
      >
        {renderBooks()}
      </motion.div>
    </div>
  )
}

const mapStateToProps = (state) =>{
  return { books: state.books }
}

export default connect(
  mapStateToProps,
  {

  }
)(BookList)