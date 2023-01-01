import { createSlice } from "@reduxjs/toolkit";

export const timerSlice = createSlice({
    name: 'timer',
    initialState: {
        expireTime: Date.now(),
        reset: false
    },
    reducers: {
        resetTimer: (state, action) => {
            state.reset = action.payload;
        }
    }
})

export const { resetTimer } = timerSlice.actions;
export default timerSlice.reducer;