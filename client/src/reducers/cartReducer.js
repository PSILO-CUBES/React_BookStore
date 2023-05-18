export const cartReducer = (state = null, action) => {
  switch(action.type){
    case 'INIT_CART':
      if(action.payload === undefined) return []
      return action.payload
    case 'ADD_TO_CART':
      return action.payload
    case 'REMOVE_FROM_CART':
      return action.payload
    case 'CHANGE_CART':
      return action.payload
    default:
      return state
  }
}