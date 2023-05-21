import { createSlice } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

const searchSlice = createSlice({
    name: 'search',
    initialState: {

    },
    reducers:{
        cacheResults: (state, action) => {
            // state = {...action.payload, ...state}
            //merge two object
            state = Object.assign(state, action.payload);
        },
    },

});

export const {cacheResults} =  searchSlice.actions;
export default searchSlice.reducer;

/**
 * data structure
 * if i will take array then time complexity will be O(n)
 * if i will take map / set /object then time complexity will be O(1)
 * or new map
 * we can use LRU cache (least recently used) as cache(store) more than lets say 100, it will start removing from top
 * normally as we refresh our page automatically store will clear
 * we are using object for initialState
 */

