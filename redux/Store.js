import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './reducers/AppReducer';


export default store = configureStore({
    reducer: {
        filters: filterReducer,
    },
})