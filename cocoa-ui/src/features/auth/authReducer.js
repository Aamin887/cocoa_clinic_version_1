import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";


export const register = createAsyncThunk('auth/register', async(formData, thunkAPI) => {
    try {
        return await authService.register(formData)
    } catch (error) {
        const message =
           (error.response &&
           error.response.data &&
           error.response.data.message) ||
           error.message ||
           error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const login = createAsyncThunk('auth/login', async(formData, thunkAPI) => {
    try {
        return await authService.login(formData)
    } catch (error) {
         const message =
            (error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString()
      return thunkAPI.rejectWithValue(message)
    }

})

export const adminLogin = createAsyncThunk('auth/admin', async(formData, thunkAPI) => {
    try {
        return await authService.adminLogin(formData)
    } catch (error) {
         const message =
            (error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString()
      return thunkAPI.rejectWithValue(message)
    }

})




export const logout = createAsyncThunk('auth/logout', (_, thunkAPI) => {
    try {
        return authService.logout();
    } catch (error) {
         const message =
            (error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString()
      return thunkAPI.rejectWithValue(message)
    
    }
})

export const adminLogout = createAsyncThunk('auth/adminLogout', (_, thunkAPI) => {
    try {
        return authService.adminLogout();
    } catch (error) {
         const message =
            (error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString()
      return thunkAPI.rejectWithValue(message)
    
    }
})

const user = JSON.parse(localStorage.getItem('user'))
const admin = JSON.parse(localStorage.getItem('admin'))

const initialState = {
    user: user ? user :null,
    admin: admin ? admin :null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ''
}

const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        reset: (state) => {
            state.isError = false
            state.isSuccess = false
            state.isLoading = false
            state.message =''
        }
    },
    extraReducers: (builder) =>{
        builder
        .addCase(login.pending, (state) =>{
            state.isLoading = true
        })
        .addCase(login.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload
            state.isSuccess = true
        })
        .addCase(login.rejected, (state, action) => {
            state.isError = true
            state.isLoading = false
            state.message = action.payload
        })
        .addCase(register.pending, (state) =>{
            state.isLoading = true
        })
        .addCase(register.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload
            state.isSuccess = true
        })
        .addCase(register.rejected, (state, action) => {
            state.isError = true
            state.isLoading = false
            state.message = action.payload
        })
        .addCase(logout.fulfilled, (state) => {
            state.user = null
        })
    }
})

export const {reset} = authReducer.actions

export default authReducer.reducer