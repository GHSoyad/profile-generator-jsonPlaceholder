import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        loading: true
    },
    reducers: {
        getUsers: (state, action) => {
            state.users = action.payload;
        },
        loadingUsers: (state, action) => {
            state.loading = action.payload;
        },
        deleteUser: (state, action) => {
            const userId = action.payload;
            state.users = state.users.filter(user => user.id !== userId);
        }
    }
})

export const { getUsers, loadingUsers, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;