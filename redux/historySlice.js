import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
    name: 'history',
    initialState:{
        history:[]
    },
    reducers:{
        addHistory:(state, action) => {
            state.history.push(action.payload)
        }
    }
});

export const { addHistory } = historySlice.actions;

export default historySlice.reducer;