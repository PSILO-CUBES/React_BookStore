import dataAPI from '../apis/fetchDB'

export const fetchBooks = () => async dispatch =>{
    const res = await dataAPI.get('/books')
  
    dispatch({
      type: 'FETCH_BOOKS',
      payload: res.data
    })
}

export const fetchBook = book => async dispatch =>{

  dispatch({
    type: 'FETCH_BOOK',
    payload: book
  })
}

export const getUser = auth => async dispatch =>{
  const currUser = auth.currentUser.get().getBasicProfile()

  // let serializedUser = JSON.stringify(currUser)

  if(currUser !== undefined){
    dispatch({
      type: 'GET_USER',
      payload: currUser
    })

    const currUserId = currUser.getId()
    const userCartData = await dataAPI.get(`/cartId`)
    let userCart
    userCartData.data.forEach(user => {
      if(user.id === currUserId){
        userCart = user.cart
      }
    })

    dispatch({
      type: 'INIT_CART',
      payload: userCart
    })
    return
  }

  dispatch({
    type: 'GET_USER',
    payload: null
  })
}

export const singOutUser = () => dispatch =>{
  dispatch({
    type: 'SING_OUT',
    payload: null
  })
  dispatch({
    type: 'INIT_CART',
    payload: null
  })
}

export const addToCart = book => async (dispatch, getState) =>{
  const { cart, user } = getState()
  const userId = user.getId()
  const userRes = await dataAPI.get('/cartId')
  // not good
  const isUserCreated = userRes.data.filter(user => user.id === userId)
  
  if(cart.length === 0){
    dispatch({
      type: 'ADD_TO_CART',
      payload: [{...book, cartAmount: 1, subtotal: book.price}]
    })
    if(isUserCreated.length === 0) {
      await dataAPI.post('/cartId', {id : userId, cart: [{...book, cartAmount: 1, subtotal: book.price}]})
    }
    return
  }

  dispatch({
    type: 'ADD_TO_CART',
    payload: [...cart, {...book, cartAmount: 1, subtotal: book.price}]
  })
  await dataAPI.patch(`/cartId/${userId}`, {id : userId, cart: [...cart, {...book, cartAmount: 1, subtotal: book.price}]})
}

export const removeFromCart = book => async (dispatch, getState) =>{
  const { title } = book
  const { cart, user } = getState()
  const userId = user.getId()

  if(cart.length > 0){
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: cart.filter(book => book.title !== title)
    })
    if(cart.length === 1){
      await dataAPI.delete(`/cartId/${userId}`)
      return
    }
    const updatedCartArr = cart.filter(book => book.title !== title)
    await dataAPI.patch(`/cartId/${userId}`, {id: userId, cart: updatedCartArr})
  }
} 

export const cartItemUpdate = updatedCart => async (dispatch, getState) =>{
  const { user } = getState()
  const userId = user.getId()

  dispatch({
    type: 'CHANGE_CART',
    payload: updatedCart
  })
  
  await dataAPI.patch(`/cartId/${userId}`, { cart : updatedCart })
}