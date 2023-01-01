import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        loading: true,
    },
    reducers: {
        getUsers: (state, action) => {
            state.users = action.payload;
            state.loading = false;
        },
        loadingUsers: (state, action) => {
            state.loading = action.payload;
        },
        likeUser: (state, action) => {
            const userId = action.payload;
            const user = state.users.find(user => user.id === userId);
            if (user.liked) {
                delete user.liked;
            } else {
                user.liked = true;
            }
        },
        updateUser: (state, action) => {
            const { id, values } = action.payload;
            const { name, email, phone, address, website, company } = values;
            const user = state.users.find(user => user.id === id);
            // user = { ...user, name, email, phone, website, address: { ...user.address, city: address }, company: { ...user.company, name: company } };
            if (user) {
                user.name = name;
                user.email = email;
                user.phone = phone;
                user.website = website;
                user.address.city = address;
                user.company.name = company;
            }
        },
        deleteUser: (state, action) => {
            const userId = action.payload;
            state.users = state.users.filter(user => user.id !== userId);
        }
    }
})

export const { getUsers, loadingUsers, likeUser, updateUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;