import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    language: 'english',

};

const configSlice = createSlice({
    name: "config",
    initialState,
    reducers: {
        changeLanguage: (state, action) => {
            state.language = action.payload;
        },
    }
});

export const {changeLanguage} = configSlice.actions;

export default configSlice.reducer;
