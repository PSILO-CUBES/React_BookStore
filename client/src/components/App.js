import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import AnimatedRoutes from './AnimatedRoutes'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import history from '../history.js'
import { fetchBooks } from '../actions'

import '../css/App.css'
import '../css/Header.css'
import '../css/CartIcon.css'
import '../css/GoogleAuth.css'
import '../css/Landing.css'
import '../css/Book.css'
import '../css/CartButton.css'
import '../css/LandingBooks.css'
import '../css/BookSortByWindow.css'
import '../css/BookList.css'
import '../css/BookPage.css'
import '../css/Cart.css'
import '../css/CartList.css'
import '../css/CartItem.css'
import '../css/CartItemCounter.css'
import '../css/CartTotalCheckout.css'
import '../css/CartCheckoutButton.css'
import '../css/Info.css'
import '../css/InfoSection.css'
import '../css/Footer.css'

const App = props =>{
  useEffect(() =>{
    props.fetchBooks()

    const options = {
      root: null,
      threshold: 0.20,
      rootMargin: '-25px 0px 50px 0px'
    }
    const sections = document.querySelectorAll('.section')
    sections.forEach(section =>{
      section.style.opacity = '0'
    })

    const observer = new IntersectionObserver((entries, observer) =>{
      entries.forEach(entry =>{
        if(!entry.isIntersecting){
          entry.target.style.opacity = '0'
          return
        }
        
        entry.target.style.opacity = '1'
      })
    }, options)
    sections.forEach(section =>{
      observer.observe(section)
    })
  }, [])

  return (
    <>
      <div className='appContainer'>
        <Router history={history}>
          <Header />
          <AnimatedRoutes />
        </Router>
      </div>
      <Footer 
        footerEmail={'reactBookStore@placeholder.com'}
        footerMessage={'placeholder'}
      />
    </>
  )
}

const mapStateToProps = state =>{
  return { books: state.books }
}

export default connect(
  mapStateToProps,
  {
    fetchBooks
  }
)(App)