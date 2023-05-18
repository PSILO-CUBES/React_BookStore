import { combineReducers } from "@reduxjs/toolkit"
import { booksReducer, bookReducer} from "./bookReducer"
import { userReducer } from "./userReducer"
import { cartReducer } from "./cartReducer"

export default combineReducers({
  books: booksReducer,
  book: bookReducer,
  user: userReducer,
  cart: cartReducer
})