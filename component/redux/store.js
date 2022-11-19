import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './reducers/todoReducer.js';
import authReducer from "./reducers/authReducer.js";

export default configureStore({
    reducer: {todoReducer, authReducer},
})