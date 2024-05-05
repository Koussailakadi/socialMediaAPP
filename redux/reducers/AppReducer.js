import Data from '../../data/data';
import { createSlice } from '@reduxjs/toolkit';

// this is a user reducer by category name
const filterReducer = createSlice({
    name :'filter',
    // initial state : all
    initialState:{
        category:{
            animals: true,
            cars: true,
            travel: true,
        },
        users: Data,
        selectedData: Data,
    },
    reducers:{
        setCategory: (state, action) => {
            state.category = action.payload;
            state.selectedData = state.users.filter((item) => {
                return state.category[item.category] === true
            });
        }
    }
});

export const { setCategory } = filterReducer.actions;
export default filterReducer.reducer;