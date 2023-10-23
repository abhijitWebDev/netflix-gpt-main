import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nowPlayingMovies: null,
    loading: false,
    error: null,
}

 const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        }
    }
});

export const { addNowPlayingMovies } = moviesSlice.actions;

export default moviesSlice.reducer;