export const userReducer = (state = null, action) =>{
  switch(action.type){
    case 'GET_USER': 
      return action.payload
    case 'SING_OUT':
      return action.payload
    default:
      return state
  }
}