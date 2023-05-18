import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getUser, singOutUser } from '../../actions'

class GoogleAuth extends Component {
  state = { isSignedIn: null }

  // make cookies remember user image src
  
  componentDidMount(){
    window.gapi.load('client:auth2', () =>{
      window.gapi.client.init({
        clientId: "726777744346-18776632orlt5nreol5svt7p8k2h2ggt.apps.googleusercontent.com",
        scope: "email",
        plugin_name: "React Book Store"
      }).then(() =>{
        this.auth = window.gapi.auth2.getAuthInstance()
        this.onAuthChange(this.auth.isSignedIn.get())
        this.auth.isSignedIn.listen(this.onAuthChange)
        this.props.getUser(this.auth)
      })
    })
  }

  onAuthChange = isSingedIn =>{
    this.setState({ isSignedIn: isSingedIn })
  }

  onSignInClick = () =>{
    this.auth.signIn().then(() =>{
      this.props.getUser(this.auth)
    })
  }

  onSignOutClick = () =>{
    this.auth.signOut()
    this.props.singOutUser()
  }

  render() {
    if(this.state.isSignedIn === null) return (
      <>
        <i className='big user circle icon logOutIcon'/>
        <button className='ui button red googleButton'><i className='google icon'/><i className='spinner loading icon'/></button>
      </>
    )

    if(!this.state.isSignedIn) return (
      <>
        <i className='big user circle icon logOutIcon'/>
        <button className='ui button red googleButton' onClick={this.onSignInClick}><i className='google icon' />Sign In</button>
      </>
    )

    return (
      <>
        <img className='logInIcon' src={`${this.auth.currentUser.get().getBasicProfile().getImageUrl()}`}/>
        <button className='ui button red googleButton' onClick={this.onSignOutClick}><i className='google icon' />Sign Out</button>
      </>
    )
  }
}

const mapStateToProps = state =>{
  return {state}
}

export default connect(
  mapStateToProps,
  {
    getUser,
    singOutUser
  }
)(GoogleAuth)