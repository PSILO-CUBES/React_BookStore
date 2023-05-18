export const booksReducer = (state = null, action) =>{
  switch(action.type){
      case 'FETCH_BOOKS':
          return action.payload
      default:
          return state
  }
}

export const bookReducer = (state = null, action) =>{
  switch(action.type){
      case 'FETCH_BOOK':
          return action.payload[0]
      default:
          return state
  }
}