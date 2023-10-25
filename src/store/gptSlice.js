import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showGptSearch: false,
};

const gptSlice = createSlice({
    name: "gpt",
    initialState,
    // eslint-disable-next-line no-unused-vars
    reducers: {
        toggleGptSearchView: (state, action) => {
            state.showGptSearch = !state.showGptSearch;
        },
    }
   
})

export const { toggleGptSearchView } = gptSlice.actions;
export default gptSlice.reducer;