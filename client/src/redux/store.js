import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from './category/categorySlice'
import  loggedReducer from './logged/loggedSlice'
import addressReducer from './address/addressSlice'

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    isLogged: loggedReducer,
    address: addressReducer
  },
})