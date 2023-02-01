import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { atom } from 'recoil';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export const status = atom({
  key: 'signStatus',
  default: {
    userId: 'unknown',
    isSigned: false,
    address: '',
    userName: '',
  }
})
