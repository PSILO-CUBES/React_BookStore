import React, {useEffect} from 'react'

import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"

import BookList from './Book/BookList'
import Landing from './Landing/Landing'
import BookPage from './Book/BookPage'
import Cart from './Cart/Cart'
import Info from './Info/Info'

const AnimatedRoutes = props =>{
  const location = useLocation()

  useEffect(() =>{
    window.scrollTo(0,0)
  }, [document.URL])

  return (
    <AnimatePresence>
      <div className='App'>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <Landing 
              greetingMessage='WELCOME TO'
              shopName='MY REACT SHOP'
              landingSrc='https://images.unsplash.com/photo-1541854615901-93c354197834?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80'
            />
          }/>
          <Route exact path="/shop" element={
            <BookList />
          }/>
          <Route exact path="/info" element={
            <Info />
          }/>
          <Route exact path="/book/:bookName" element={
            <BookPage />
          }/>
          <Route exact path="/cart" element={
            <Cart />
          }/>
          <Route exact path="/info" element={
            <Info />
          }/>
        </Routes>
      </div>
    </AnimatePresence>  
  )
}

export default AnimatedRoutes
