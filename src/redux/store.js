import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";
import timerReducer from "./timerSlice"
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist';

const persistConfig = {
    key: 'users',
    storage,
    blacklist: ['timer']
};

const reducers = combineReducers({ users: usersReducer, timer: timerReducer })
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})
