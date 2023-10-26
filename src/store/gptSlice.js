import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showGptSearch: false,
    movieNames: null,
    movieResults: null,
};

const gptSlice = createSlice({
    name: "gpt",
    initialState,
    // eslint-disable-next-line no-unused-vars
    reducers: {
        toggleGptSearchView: (state, action) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult: (state, action) => {
            const {movieNames, movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
    }
   
})

export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;