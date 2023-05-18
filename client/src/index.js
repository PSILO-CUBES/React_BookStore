import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore, applyMiddleware } from "@reduxjs/toolkit"
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from './components/App'
import reducer from './reducers'
import './css/index.css'

const store = configureStore({
  reducer
},
applyMiddleware(thunk))

const container = document.querySelector('#root')
const root = ReactDOM.createRoot(container)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)