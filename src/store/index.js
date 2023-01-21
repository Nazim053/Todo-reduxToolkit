import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import usersReducer from './userSlice'

export default configureStore( {
    reducer: {
        todos:todoReducer,
        users:usersReducer,
    },
})