import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../features/auth/authReducer'
import userReducer from '../features/users/userReducer';

const store = configureStore({
    reducer: {
        auth: authReducer,
        userInfo: userReducer
    }
})

export default store;