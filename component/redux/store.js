import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './reducers/todoReducer.js';

export default configureStore({
    reducer: {todoReducer},
})