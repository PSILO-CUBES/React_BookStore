import React, { useEffect, useRef } from 'react'

const BookSortByWindow = props =>{
  const { window, setWindow, toggleWindow, setSorting, sortByRef } = props

  const windowRef = useRef()

  const handleOutsideClick = e =>{
    if(sortByRef.current !== null){
      if(sortByRef && !sortByRef.current.contains(e.target)) {
        setWindow(false)
        document.removeEventListener('click', handleOutsideClick, true)
      }
    }
  }

  const applySetSorting = category => {
    setSorting(category)
    toggleWindow()
  }

  useEffect(() =>{
    if(!window){
      windowRef.current.style.display = 'none'
      document.removeEventListener('click', handleOutsideClick, true)
      return
    }

    document.addEventListener('click', handleOutsideClick, true)
    windowRef.current.style.display = 'block'
  }, [window])

  return (
    <div ref={windowRef} className="window">
      <div className="sortByList">
        <div className='windowContainer'>
          <h4 
            className='sortByCategory' 
            onClick={() => applySetSorting('Alphabetical')}
            >Alphabetical
          </h4>
          <h4 
            className='sortByCategory' 
            onClick={() => applySetSorting('PriceUp')}
            >Price: Ascending
          </h4>
          <h4 
            className='sortByCategory' 
            onClick={() => applySetSorting('PriceDown')}
            >Price: Descending
          </h4>
        </div>
      </div>
      <button
        className='ui button closeWindow'
        onClick={toggleWindow}
      > Close 
      </button>
    </div>
  )
}

export default BookSortByWindow