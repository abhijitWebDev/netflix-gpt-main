import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';
import moviesSlice from './movieSlice';
const store = configureStore({
    reducer: {
        auth: authSlice,
        movies: moviesSlice,
    },
});

export default store;